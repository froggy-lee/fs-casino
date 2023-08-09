"use client";

import React, { useEffect, useCallback } from "react";
import * as S from "./styles";
import {
  LogoutIcon,
  TotalIcon,
  BettingIcon,
  UserHeaderIcon,
} from "../../../../../public/svg/icons";
import { useSelector, useDispatch } from "react-redux";
import { showRegisterModal, showLoginModal } from "@/store/slice/modal";
import { selectUserInfo, handleUpdateUser } from "@/store/slice/user";
import { selectIsAuth, handleAuth } from "@/store/slice/auth";
import { toggleLoadingPage } from "@/store/slice/loading";
import { getMeRequest } from "@/api/User/request";
import { LocalStorage } from "@/utils/localStorage";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

function Auth() {
  const auth = useSelector(selectIsAuth);
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleShowModal = (key: string) => {
    key === "login"
      ? dispatch(showLoginModal(true))
      : dispatch(showRegisterModal(true));
  };

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

  const handleLogout = useCallback(() => {
    LocalStorage.clear();
    router.push("/");
    window.location.reload();
  }, [router]);

  useEffect(() => {
    const userID = LocalStorage.get("userId");
    const userToken = LocalStorage.get("userToken");
    const checkAuth = LocalStorage.get("auth");
    checkAuth && dispatch(handleAuth(true));
    if (userID && userToken) {
      dispatch(toggleLoadingPage());

      getMeAction();
    }
  }, [dispatch, getMeAction]);

  return (
    <>
      {!auth ? (
        <article className="row">
          <S.Button
            className="col px-4"
            onClick={() => handleShowModal("login")}
          >
            Login
          </S.Button>
          <S.Button
            className="col px-4"
            onClick={() => handleShowModal("register")}
          >
            Register
          </S.Button>
        </article>
      ) : (
        <article className="text-center d-flex justify-content-between align-items-center">
          <div className="pe-2">
            <div className="d-flex align-items-center">
              <TotalIcon /> Total Balance
            </div>
            <S.Money> {userInfo?.money} won</S.Money>
          </div>
          <S.Betting className="px-2 d-flex align-items-center">
            <BettingIcon />
            Betting history
          </S.Betting>
          <div className="px-2 d-flex align-items-center">
            <UserHeaderIcon />
            {userInfo?.username}
          </div>
          <div className="ms-2" onClick={handleLogout}>
            <LogoutIcon />
          </div>
        </article>
      )}
    </>
  );
}

export default Auth;
