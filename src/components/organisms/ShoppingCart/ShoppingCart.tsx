import React, { useContext } from "react";
import { MenuOrderContext } from "../../../Providers/MenuOrderProvider";
import { ButtonsWrapper, MenuItems, MenuWrapper } from "../Menu/Menu.styles";
import { Button, StyledArrow } from "../../atoms/Button/Button.styles";
import { HeaderH1 } from "../../atoms/Headers/HeaderH1.styles";
import { StyledLink } from "../../atoms/StyledLink/StyledLink";
import { Wrapper } from "../../atoms/Wrapper/Wrapper.styles";
import { ShoppingCartWrapper, StyledFinalPrice } from "./ShoppingCart.styles";

const ShoppingCart = () => {
  const { ShoppingCartArray, handleSubtractMeal } =
    useContext(MenuOrderContext);

  const ShowPrice = (price: number, quantity: number): number => {
    const sum = price * quantity;
    return sum;
  };

  const FinalPrice = (ShowPrice: {
    (price: number, quantity: number): number;
  }) => {
    let finalPrice = 0;
    ShoppingCartArray.forEach((element) => {
      finalPrice += ShowPrice(element.price, element.quantity);
    });
    return finalPrice;
  };

  return (
    <ShoppingCartWrapper>
      <StyledLink to="/" className="back">
        <StyledArrow className="prev" />
      </StyledLink>

      <MenuWrapper>
        <HeaderH1 className="menu-header">Koszyk</HeaderH1>

        <MenuItems>
          {ShoppingCartArray.map((meal, index) => (
            <div key={index}>
              {meal.quantity > 0 && (
                <Wrapper className="menu-item">
                  <img src={meal.image} alt="zdjęcie zamówionego produktu" />
                  <h2>{meal.foodName}</h2>
                  <p>{meal.foodDescription}</p>
                  <h3>{ShowPrice(meal.price, meal.quantity)} zł</h3>
                  <ButtonsWrapper>
                    <Button
                      className="menu-item-btn"
                      onClick={() => handleSubtractMeal(meal)}
                    >
                      -
                    </Button>
                    <p>Ilość: {meal.quantity}</p>
                  </ButtonsWrapper>
                </Wrapper>
              )}
            </div>
          ))}
        </MenuItems>

        {FinalPrice(ShowPrice) > 0 ? (
          <>
            <StyledFinalPrice>
              Do zapłaty: <span>{FinalPrice(ShowPrice)}</span> zł
            </StyledFinalPrice>
            <StyledLink to="/adress-form">
              <Button className="go-to-payment">
                Płatność <StyledArrow />
              </Button>
            </StyledLink>
          </>
        ) : (
          <h1>Mhm Mhm... Nie jesteś głodny?</h1>
        )}
      </MenuWrapper>
    </ShoppingCartWrapper>
  );
};

export default ShoppingCart;
