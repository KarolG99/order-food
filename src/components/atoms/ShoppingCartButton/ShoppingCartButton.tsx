import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ShoppingCart } from "../../../assets/icons/shoppingCart.svg";

const ShoppingCartIcon = styled(ShoppingCart)``;

const StyledShoppingCartButton = styled.button`
  cursor: pointer;
  border: none;
  width: 65px;
  height: 65px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.yellow};
  position: fixed;
  bottom: 25px;
  right: 15px;
  -webkit-box-shadow: 0px 1px 26px -15px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 1px 26px -15px rgba(66, 68, 90, 1);
    box-shadow: 0px 1px 26px -15px rgba(66, 68, 90, 1);
`;

export const ShoppingCartButton = () => {
  return (
    <Link to="/shopping-cart">
      <StyledShoppingCartButton>
        <ShoppingCartIcon />
      </StyledShoppingCartButton>
    </Link>
  );
};
