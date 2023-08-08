"use client";

import React from "react";
import * as S from "./styles";
import { useSelector } from "react-redux";
import { selectIsLoadingpage } from "@/store/slice/loading";

function LoadingPage() {
  const toggle = useSelector(selectIsLoadingpage);

  return (
    <>
      {toggle && (
        <S.Wrapper className="d-flex flex-column justify-content-center align-items-center">
          <div className="spinner-border  text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className=" text-light">LOADING...</div>
        </S.Wrapper>
      )}
    </>
  );
}

export default LoadingPage;
