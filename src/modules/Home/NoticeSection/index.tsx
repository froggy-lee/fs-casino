import React from "react";
import ListNotice from "./ListNotice";
import Image from "next/image";
import * as S from "./styles";

function NoticeSection() {
  return (
    <section className="container row mt-5">
      <S.Article className="col-12 px-0 position-relative col-lg-5">
        <Image
          src={"/images/notice-section.png"}
          fill
          alt="Notice"
          sizes="100"
        />
      </S.Article>
      <article className="col-12 px-0 col-lg-7 px-lg-2">
        <ListNotice />
      </article>
    </section>
  );
}

export default NoticeSection;
