"use client";

import React from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "@/store/slice/user";
import * as S from "../GeneralInfo/styles";

function BankAccount() {
  const user = useSelector(selectUserInfo);

  return (
    <div>
      <S.Title>Bank Account Infor</S.Title>
      <S.Infor>
        <div>
          <S.Name>Bank Name</S.Name>
          <div>{user?.bankName}</div>
        </div>
        <div>
          <S.Name>Bank Account</S.Name>
          <div>{user?.bankAccount}</div>
        </div>
        <div>
          <S.Name>Bank Number</S.Name>
          <div>{user?.bankNumber}</div>
        </div>
        <div>
          <S.Name>Total Balance</S.Name>
          <div>{user?.money}</div>
        </div>
      </S.Infor>
    </div>
  );
}

export default BankAccount;
