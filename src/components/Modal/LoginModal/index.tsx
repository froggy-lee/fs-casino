import React, { useState } from "react";
import Image from "next/image";
import * as S from "./styles";
import { PasswordInputIcon, UserInputIcon } from "../../../../public/svg/icons";
import ModalWrapper from "../ModalWrapper";
import { useDispatch } from "react-redux";
import { showLoginModal } from "@/store/slice/modal";
import { useFormik } from "formik";
import * as Yup from "yup";

interface User {
  username: string;
  password: string;
}

function LoginModal() {
  const [showPass, setShowPass] = useState<boolean>(false);
  const dispatch = useDispatch();
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

  const handleToggle = () => dispatch(showLoginModal(false));

  const handleShowPassword = () => setShowPass(!showPass);

  const handleLogin = async (value: User) => {
    console.log(value);
  };

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
            Don&apos;t have an account?<S.Register>Register</S.Register>
          </div>
        </div>
      </article>
    </ModalWrapper>
  );
}

export default LoginModal;
