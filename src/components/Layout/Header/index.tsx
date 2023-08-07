import React from "react";
import Auth from "./Auth";
import Notice from "./Notice";
import Language from "./Language";
import * as S from "./styles";
import NavBar from "../Navbar";
import NavMobile from "../Navbar/NavMobile";

function Header() {
  return (
    <section className="py-2">
      <S.TopHeader className="container">
        <Notice />
        <div className="d-none col-7 d-lg-flex justify-content-between align-items-center">
          <Language />
          <Auth />
        </div>
      </S.TopHeader>
      <NavBar />
      <NavMobile />
    </section>
  );
}

export default Header;
