import styled from "styled-components";
import { PrimaryButton } from "@/styles/theme.config";

export const ButtonLogin = styled(PrimaryButton)`
  width: 100%;
`;
export const ButtonGuest = styled(ButtonLogin)`
  border: 1px solid var(--primary);
  color: var(--primary);
  background: #fff;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: var(--pink);
  text-align: center;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--pink);
`;

export const Input = styled.div`
  label {
    position: absolute;
    top: 0px;
    left: 5px;
    padding: 0.5rem;
  }
  input {
    width: 100%;
    border-radius: 20px;
    border: 1px solid var(--black-500, #a6a6a6);
    background: #fff;
    padding: 0.5rem;
    padding-left: 2.5rem;
  }
  input:focus {
    border: 1px solid var(--pink) !important;
    outline: 1px solid var(--pink);
  }
`;

export const Register = styled.span`
  color: var(--primary);
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

export const Errors = styled.div`
  font-size: 12px;
  color: red;
`;

export const ImageLogin = styled.div``;
