"use client";

import React, { useState } from "react";
import * as S from "./styles";
import {
  LogoutIcon,
  TotalIcon,
  BettingIcon,
  UserHeaderIcon,
} from "../../../../../public/svg/icons";
import { useSelector, useDispatch } from "react-redux";
import { showRegisterModal, showLoginModal } from "@/store/slice/modal";

function Auth() {
  const [auth, setAuth] = useState(false);
  const handleAuth = () => setAuth(!auth);

  const dispatch = useDispatch();

  const HandleShowLoginModal = () => {
    dispatch(showLoginModal(true));
  };

  const handleShowRegisterModal = () => dispatch(showRegisterModal(true));

  return (
    <>
      {!auth ? (
        <article className="row">
          <S.Button className="col px-4" onClick={HandleShowLoginModal}>
            Login
          </S.Button>
          <S.Button className="col px-4" onClick={handleShowRegisterModal}>
            Register
          </S.Button>
        </article>
      ) : (
        <article className="text-center d-flex justify-content-between align-items-center">
          <div className="pe-2">
            <div className="d-flex align-items-center">
              <TotalIcon /> Total Balance
            </div>
            <S.Money> 300000 won</S.Money>
          </div>
          <S.Betting className="px-2 d-flex align-items-center">
            <BettingIcon />
            Betting history
          </S.Betting>
          <div className="px-2 d-flex align-items-center">
            <UserHeaderIcon />
            User Name
          </div>
          <div onClick={handleAuth} className="ms-2">
            <LogoutIcon />
          </div>
        </article>
      )}
    </>
  );
}

export default Auth;
