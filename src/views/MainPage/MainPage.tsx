import React from "react";
import { StyledMain } from "../App.styles";
import Menu from "../Menu/Menu";
import StepsToOrder from "../../components/organisms/StepsToOrder/StepsToOrder";
import Header from "../../components/organisms/Header/Header";
import { ShoppingCartButton } from "../../components/atoms/ShoppingCartButton/ShoppingCartButton";

const MainPage = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <StepsToOrder />
        <Menu />
      </StyledMain>
      <ShoppingCartButton />
    </>
  );
};

export default MainPage;
