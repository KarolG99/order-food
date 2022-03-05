import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ShoppingCart } from "../../../assets/icons/shoppingCart.svg";
import { MenuOrderContext } from "../../../Providers/MenuOrderProvider";

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

  &.not-empty {
    &::before {
      position: absolute;
      content: "";
      width: 10px;
      height: 10px;
      background-color: red;
      top: 10;
      left: 10;
    }
  }
`;

export const ShoppingCartButton = () => {
  const { ShoppingCartArray } = useContext(MenuOrderContext);
  const [isShoppingCartEmpty, setIsShoppingCartEmpty] = useState<boolean>(true);

  // const ShowPrice = (price: number, quantity: number) => {
  //   const sum = price * quantity;
  //   return sum;
  // };

  // const FinalPrice = (ShowPrice: {
  //   (price: number, quantity: number): number;
  // }) => {
  //   let finalPrice = 0;
  //   ShoppingCartArray.forEach((element) => {
  //     finalPrice += ShowPrice(element.price, element.quantity);
  //   });

  //   if (finalPrice > 0) {
  //     console.log(finalPrice);
  //     setIsShoppingCartEmpty(false);
  //   } else {
  //     setIsShoppingCartEmpty(true);
  //   }
  //   return finalPrice;
  // };


  return (
    <Link to="/shopping-cart">
      {isShoppingCartEmpty ? (
        <>
          <StyledShoppingCartButton>
            <ShoppingCartIcon />
          </StyledShoppingCartButton>
        </>
      ) : (
        <StyledShoppingCartButton className="not-empty">
          <ShoppingCartIcon />
        </StyledShoppingCartButton>
      )}
    </Link>
  );
};
