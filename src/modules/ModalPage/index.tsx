"use client";
import React from "react";
import LoginModal from "@/components/Modal/LoginModal";
import RegisterModal from "@/components/Modal/RegisterModal";
import { useSelector } from "react-redux";
import { selectShowLogin, selectShowRegister } from "@/store/slice/modal";

function ModalPage() {
  const showModalLogin = useSelector(selectShowLogin);
  const showModalRegister = useSelector(selectShowRegister);
  return (
    <>
      {!!showModalLogin && <LoginModal />}
      {!!showModalRegister && <RegisterModal />}
    </>
  );
}

export default ModalPage;
