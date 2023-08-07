import styled from "styled-components";
import { TitleModal } from "@/styles/theme.config";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 4;
`;

export const Dialog = styled.div`
  width: 1128px;
  height: 700px;
  overflow: hidden;
  background: #fff;
  margin: auto;
  margin-top: 5%;
  z-index: 9;
  border-radius: 10px;
  position: relative;
  max-height: 90%;
  max-width: 95%;
  @media (max-width: 992px) {
    max-width: 90% !important;
    max-height: 80% !important;
  }
`;

export const Main = styled.div`
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ButtonClose = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
export const Title = styled(TitleModal)`
  padding: 2rem 0 1rem 2rem;
`;
