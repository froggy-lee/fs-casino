import styled from "styled-components";

export const Title = styled.div`
  padding: 0.5rem 0;
  border-bottom: 1px solid #ccc;
`;
export const NoticeItem = styled.div`
  display: grid;
  grid-template-columns: 30% 50% 20%;
  font-size: 14px;
  @media (max-width: 768px) {
    grid-template-columns: 40% 60%;
  }
`;

export const Subject = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
`;
export const SeeMore = styled.button`
  color: #d23449;
  @media (max-width: 768px) {
    display: none;
  }
`;
