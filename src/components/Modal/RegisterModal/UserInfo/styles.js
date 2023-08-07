import styled from "styled-components";
import { TitleModal } from "@/styles/theme.config";

export const TitleArticle = styled(TitleModal)`
  font-size: 20px;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 0.3rem;
`;

export const Form = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem 1rem;
  margin-top: 1rem;
  input {
    width: 100%;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;

export const Error = styled.div`
  color: #f44;
  font-size: 12px;
`;
