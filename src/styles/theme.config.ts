"use client";

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
    ol,ul {
    list-style:none;
    padding: 0;
    margin: 0;
  }
  :root{
      font-size: 16px;
      @media(max-width: 768px) {
        font-size: 14px;
      }
  }
`;

export const PrimaryButton = styled.button`
  border-radius: 20px;
  background: var(--primary);
  color: #fff;
  padding: 10px;
  font-weight: 600;
`;

export const TitleModal = styled.div`
  color: var(--pink);
  font-size: 32px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
