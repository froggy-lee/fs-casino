"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import * as S from "./styles";

function BannerSection() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <section>
        <Slider {...settings}>
          <S.Slide className="position-relative">
            <Image src={"/images/banner.png"} alt="banner" fill />
          </S.Slide>
          <S.Slide className="position-relative">
            <Image src={"/images/banner2.png"} alt="banner" fill />
          </S.Slide>
          <S.Slide className="position-relative">
            <Image src={"/images/banner3.png"} alt="banner" fill />
          </S.Slide>
        </Slider>
      </section>
    </>
  );
}
export default BannerSection;
