import styled from "styled-components";

interface NavProps {
  $toggle?: boolean;
}

export const BackDrop = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 8;
`;
export const NavMobile = styled.div<NavProps>`
  position: fixed;
  width: 240px;
  height: 100%;
  top: 0;
  overflow-y: auto;
  left: ${(props) => (props.$toggle ? "0" : "-250px")};
  transition: all 0.1s linear;
  background: white;
  z-index: 9;
  padding: 1rem;
`;

export const Bottom = styled.div`
  border-top: 1px solid #000;
`;

export const RegisterButton = styled.button`
  color: var(--primary);
  border-left: 2px solid #000;
`;
