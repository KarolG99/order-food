import styled from "styled-components";

export const HeaderH1 = styled.h1`
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSize.h1};
  margin-bottom: 50px;

  &.menu-header {
    border-bottom: 5px solid ${({ theme }) => theme.colors.yellow};
  }

  &.steps-header {
    border-bottom: 5px solid ${({ theme }) => theme.colors.yellow};
  }
`;
