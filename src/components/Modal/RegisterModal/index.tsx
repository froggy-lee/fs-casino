"use client";
import React from "react";
import ModalWrapper from "../ModalWrapper";
import * as S from "./styles";
import UserInfor from "./UserInfo";
import BankInfo from "./BankInfo";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { showRegisterModal } from "@/store/slice/modal";

function RegisterModal() {
  const dispatch = useDispatch();
  const styles = {
    width: "1128px",
    height: "820px",
  };

  const formik = useFormik({
    initialValues: {
      account: "",
      password: "",
      confirmPassword: "",
      nickname: "",
      phone: "",
      domain_info: "", //testagent
      bank_name: "",
      bank_account: "",
      bank_number: "",
      voter_account: "",
      withdraw_pass: "",
    },
    validationSchema: Yup.object({
      account: Yup.string()
        .required("Không được để trống")
        .min(6, "Tối thiểu 6 kí tự"),
      password: Yup.string()
        .required("Không được để trống")
        .min(6, "Tối thiểu 6 kí tự"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], `password không trùng khớp`)
        .required("Không được để trống"),
      nickname: Yup.string()
        .required("Không được để trống")
        .min(6, "Tối thiểu 6 kí tự"),
      phone: Yup.number().required("Không được để trống"),
      bank_name: Yup.string().required("Không được để trống"),
      bank_number: Yup.string().required("Không được để trống"),
      bank_account: Yup.string().required("Không được để trống"),
    }),
    onSubmit: (values) => handleRegister(values),
  });

  const handleToggle = () => dispatch(showRegisterModal(false));

  const handleRegister = (values: any) => {
    console.log(values);
  };

  return (
    <ModalWrapper styles={styles} onToggle={handleToggle}>
      <S.Wrapper>
        <S.Title className="text-center pb-4">Register</S.Title>
        <form onSubmit={formik.handleSubmit}>
          <UserInfor formik={formik} />
          <BankInfo formik={formik} />
          <button className="primary-button-fluid mt-4" type="submit">
            Register Now
          </button>
        </form>
        <div className="text-center my-3">
          Already have an account? <S.ToLogin>To Login</S.ToLogin>
        </div>
      </S.Wrapper>
    </ModalWrapper>
  );
}

export default RegisterModal;
