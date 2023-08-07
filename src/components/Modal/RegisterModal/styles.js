import styled from "styled-components";
import { TitleModal } from "@/styles/theme.config";

export const Wrapper = styled.section`
  padding: 1rem 3rem;
`;

export const Title = styled(TitleModal)`
  text-transform: uppercase;
  border-bottom: 1px solid var(--primary);
`;

export const ToLogin = styled.span`
  color: var(--primary);
  cursor: pointer;
`;
