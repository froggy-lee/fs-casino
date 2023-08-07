import styled from "styled-components";

export const Button = styled.button`
  font-weight: 600;
  &:hover {
    color: var(--primary);
  }
  &:last-child {
    border-left: 2px solid #000;
    color: var(--primary);
  }
`;

export const Betting = styled.div`
  border-left: 2px solid #000;
  border-right: 2px solid #000;
`;

export const Money = styled.div`
  font-weight: 600;
  color: var(--primary);
`;
