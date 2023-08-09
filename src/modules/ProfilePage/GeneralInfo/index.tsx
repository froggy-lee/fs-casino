"use client";

import React from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "@/store/slice/user";
import * as S from "./styles";

function GeneralInfo() {
  const user = useSelector(selectUserInfo);

  return (
    <div>
      <S.Title>General Infor</S.Title>
      <S.Infor>
        <div>
          <S.Name>User Name</S.Name>
          <div>{user?.username}</div>
        </div>
        <div>
          <S.Name>Email</S.Name>
          <div>{user?.email}</div>
        </div>
        <div>
          <S.Name>First Name</S.Name>
          <div>{user?.firstName}</div>
        </div>
        <div>
          <S.Name>Last Name</S.Name>
          <div>{user?.lastName}</div>
        </div>
        <div>
          <S.Name>Phone Number</S.Name>
          <div>{user.phone}</div>
        </div>
      </S.Infor>
    </div>
  );
}

export default GeneralInfo;
