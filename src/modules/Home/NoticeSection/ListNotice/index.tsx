"use client";
import { listNotice } from "@/const";
import * as S from "./styles";
import { NoticeIcon } from "../../../../../public/svg/icons";

import React from "react";

function ListNotice() {
  return (
    <>
      <S.Title className="title-section">
        <NoticeIcon />
        Notice
      </S.Title>
      {listNotice.slice(0, 4).map((notice) => {
        return (
          <S.NoticeItem key={notice.no_idx} className="py-2">
            <div>{notice.no_created}</div>
            <S.Subject>{notice.no_subject}</S.Subject>
            <S.SeeMore>See more</S.SeeMore>
          </S.NoticeItem>
        );
      })}
    </>
  );
}

export default ListNotice;
