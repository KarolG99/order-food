import styled from "styled-components";

export const ShoppingCartWrapper = styled.article`
  width: 100vw;
  min-height: 100vh;
  padding-top: 10px;
`;

export const StyledFinalPrice = styled.h1`
  position: relative;
  z-index: 3;
  font-weight: 600;

  span {
    font-size: 24px;
    font-weight: 800;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.yellow};
    width: 110%;
    height: 70%;
    bottom: 0;
    left: -2px;
    z-index: -1;
  }
`;
