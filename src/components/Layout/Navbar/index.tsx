"use client";

import React from "react";
import { menu } from "./data";
import Image from "next/image";
import * as S from "./styles";
import { useRouter } from "next/navigation";

function NavBar() {
  const router = useRouter();

  const handleClickMenuItem = (url: string) => {
    url && router.push(url);
  };
  return (
    <>
      <S.Navbar className="container">
        {menu.map((menuItem, index) => {
          return (
            <S.MenuItem
              key={index}
              className="text-center py-3"
              onClick={() => handleClickMenuItem(menuItem.router)}
            >
              <div>{menuItem.icon}</div>
              <div>{menuItem.name}</div>
              {menuItem.url && (
                <Image
                  src={menuItem.url}
                  width={180}
                  height={110}
                  alt="picture"
                  priority={true}
                />
              )}
            </S.MenuItem>
          );
        })}
      </S.Navbar>
    </>
  );
}

export default NavBar;
