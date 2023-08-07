"use client";

import React, { useState } from "react";
import * as S from "./styles";
import { MoreIcon, LogoutIcon } from "../../../../../public/svg/icons";
import Image from "next/image";
import { menu } from "../data";

function NavMobile() {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleToggle = () => setToggleNav(!toggleNav);

  const handleIsLogin = () => setIsLogin(!isLogin);

  return (
    <>
      {toggleNav && <S.BackDrop onClick={handleToggle} />}
      <div className="px-3 my-3 d-flex justify-content-between align-center d-lg-none">
        <button onClick={handleToggle}>
          <MoreIcon />
        </button>
        <div>
          <Image
            src={"/images/logo-mobile.png"}
            alt="logo"
            width={130}
            height={30}
          />
        </div>
        <div></div>
      </div>
      <div className="d-lg-none">
        <S.NavMobile $toggle={toggleNav}>
          <button className="btn-close" onClick={handleToggle}></button>
          <div>
            <div>IlikeCasino</div>
            <div>
              <div>Total Balance</div>
              <div>3000000</div>
            </div>
            <div>Betting history</div>
          </div>
          <div>
            {menu.map((menuItem) => {
              return (
                menuItem.key && (
                  <div
                    key={menuItem.key}
                    className="mt-4 d-flex align-items-center"
                  >
                    {menuItem.icon}
                    <span className="ms-2">{menuItem.name}</span>
                  </div>
                )
              );
            })}
          </div>
          <S.Bottom className="mt-4">
            {!isLogin ? (
              <div className="mt-4">
                <button className="px-3 py-1" onClick={handleIsLogin}>
                  Login
                </button>
                <S.RegisterButton className="px-3 py-1">
                  Register
                </S.RegisterButton>
              </div>
            ) : (
              <button className="mt-4" onClick={handleIsLogin}>
                <LogoutIcon />
                <span className="ms-2">Log out</span>
              </button>
            )}
          </S.Bottom>
        </S.NavMobile>
      </div>
    </>
  );
}

export default NavMobile;
