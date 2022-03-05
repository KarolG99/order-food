import styled from "styled-components";

export const HeaderH1 = styled.h1`
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSize.h1};
  margin: 30px 20px 50px 20px;
  border-bottom: 5px solid ${({ theme }) => theme.colors.yellow};
`;
