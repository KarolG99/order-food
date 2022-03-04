import { Link } from "react-router-dom";
import styled from "styled-components";

export const ShoppingCartWrapper = styled.article`
  width: 100vw;
  min-height: 100vh;
  padding-top: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: fit-content;
  margin-left: 20px;
  background-color: ${({ theme }) => theme.colors.yellow};
  padding: 10px 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  &::after {
    content: "";
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 10px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 4px;
    left: -4px;
  }
`;

export const StyledFinalPrice = styled.h1`
  /* border-bottom: 3px solid ${({ theme }) => theme.colors.yellow}; */
  /* border-left: 3px solid ${({ theme }) => theme.colors.yellow}; */
  position: relative;
  z-index: 3;

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
