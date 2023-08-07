"use client";
import styled from "styled-components";

export const Navbar = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  align-items: center;
  @media (max-width: 992px) {
    display: none;
  }
`;
export const MenuItem = styled.div`
  border-bottom: 2px solid var(--white);
  &:hover {
    border-bottom: 2px solid var(--primary);
    cursor: pointer;
    svg {
      path {
        fill: var(--primary);
      }
    }
  }
  &:nth-child(5),
  &:last-child {
    border-bottom: 1px solid var(--white);
  }
`;
