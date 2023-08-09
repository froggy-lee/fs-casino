"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import * as S from "./styles";
import { PasswordInputIcon, UserInputIcon } from "../../../../public/svg/icons";
import ModalWrapper from "../ModalWrapper";
import { useDispatch } from "react-redux";
import { showLoginModal, showRegisterModal } from "@/store/slice/modal";
import { toggleLoadingPage } from "@/store/slice/loading";
import { handleAuth } from "@/store/slice/auth";
import { handleUpdateUser } from "@/store/slice/user";
import { useFormik } from "formik";
import * as Yup from "yup";
import { setLocalStorageUser } from "@/utils/localStorage";
import { loginRequest } from "@/api/Auth/request";
import { getMeRequest } from "@/api/User/request";
import { useMutation } from "@tanstack/react-query";

interface User {
  username: string;
  password: string;
}

function LoginModal() {
  const [showPass, setShowPass] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { mutate: getMeAction } = useMutation({
    mutationFn: () => getMeRequest(),
    onSuccess: (data) => {
      dispatch(handleUpdateUser(data?.data));
      dispatch(toggleLoadingPage());
      dispatch(showLoginModal(false));
      dispatch(handleAuth(true));
    },
    onError: () => {
      dispatch(toggleLoadingPage());
    },
  });
  const { mutate: loginAction } = useMutation({
    mutationFn: (data: User) => loginRequest(data),
    onSuccess: ({ data }) => {
      setLocalStorageUser(data?.username, data?.token);
      getMeAction();
    },
    onError: (error) => {
      dispatch(toggleLoadingPage());
      console.log(error);
    },
  });
  const styles = {
    width: "900px",
    height: "550px",
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Không được để trống"),
      password: Yup.string().required("Không được để trống"),
    }),
    onSubmit: (values) => handleLogin(values),
  });

  const { values, errors, handleChange } = formik;

  const handleToggle = useCallback(
    () => dispatch(showLoginModal(false)),
    [dispatch]
  );

  const handleShowPassword = () => setShowPass(!showPass);

  const handleLogin = async (value: User) => {
    dispatch(toggleLoadingPage());
    loginAction(value);
  };

  const handleShowRegisterModal = useCallback(() => {
    dispatch(showLoginModal(false));
    dispatch(showRegisterModal(true));
  }, [dispatch]);

  return (
    <ModalWrapper onToggle={handleToggle} styles={styles}>
      <article className="row">
        <S.ImageLogin className="d-none d-lg-block col position-relative">
          <Image
            src={"/images/login-image.png"}
            width={450}
            height={550}
            alt="image"
          />
        </S.ImageLogin>
        <div className="col px-5 pt-5 pe-lg-5 py-lg-4">
          <form onSubmit={formik.handleSubmit}>
            <S.Title>Login</S.Title>
            <S.Input className="position-relative mt-5">
              <label htmlFor="username">
                <UserInputIcon />
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="User Name"
                value={values.username}
                onChange={handleChange}
              />
              <S.Errors>{errors.username}</S.Errors>
            </S.Input>
            <S.Input className="position-relative mt-3">
              <label htmlFor="password" onClick={handleShowPassword}>
                <PasswordInputIcon />
              </label>
              <input
                type={showPass ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
              <S.Errors>{errors.password}</S.Errors>
            </S.Input>
            <div className="d-flex justify-content-between align-center my-4  ">
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div>Forgot password?</div>
            </div>
            <S.ButtonLogin type="submit">Login</S.ButtonLogin>
            <S.ButtonGuest className="mt-3" type="button">
              Guest Mail
            </S.ButtonGuest>
          </form>
          <div className="text-center mt-3">
            Don&apos;t have an username?
            <S.Register onClick={handleShowRegisterModal}>Register</S.Register>
          </div>
        </div>
      </article>
    </ModalWrapper>
  );
}

export default LoginModal;
