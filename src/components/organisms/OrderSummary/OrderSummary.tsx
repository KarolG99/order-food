import React, { useContext } from "react";
import { FormContext } from "../../../Providers/FormProvider";
import { MenuOrderContext } from "../../../Providers/MenuOrderProvider";
import { Button, StyledArrow } from "../../atoms/Button/Button.styles";
import { HeaderH1 } from "../../atoms/Headers/HeaderH1.styles";
import { StyledLink } from "../../atoms/StyledLink/StyledLink";
import { Wrapper } from "../../atoms/Wrapper/Wrapper.styles";
import { MenuItems, MenuWrapper } from "../Menu/Menu.styles";
import {
  ShoppingCartWrapper,
  StyledFinalPrice,
} from "../ShoppingCart/ShoppingCart.styles";
import { H1rderSummary } from "./OrderSummary.styles";

const OrderSummary = () => {
  const { ShoppingCartArray } = useContext(MenuOrderContext);
  const { adress } = useContext(FormContext);

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
      <StyledLink to="/adress-form" className="back">
        <StyledArrow className="prev" />
      </StyledLink>

      <MenuWrapper>
        <HeaderH1>Podsumowanie zamówienia</HeaderH1>

        <H1rderSummary>Adres dostawy</H1rderSummary>
        {adress &&
          adress.map((user) => (
            <Wrapper key={user.fullname}>
              <p>
                <b>Imię i nazwisko:</b> {user.fullname}
              </p>
              <p>
                <b>Miejscowość: </b>
                {user.town}
              </p>
              <p>
                <b>Kod pocztowy:</b> {user.zipCode}
              </p>
              <p>
                <b>Ulica: </b>
                {user.street}
              </p>
              <p>
                <b>Numer domu:</b> {user.houseNumber}
              </p>
              <p>
                <b>Numer telefonu:</b> {user.phoneNumber}
              </p>
            </Wrapper>
          ))}

        <H1rderSummary>Twoje zamówienie</H1rderSummary>

        <MenuItems>
          {ShoppingCartArray.map((meal, index) => (
            <div key={index}>
              {meal.quantity > 0 && (
                <Wrapper className="menu-item">
                  <img src={meal.image} alt="zdjęcie zamówionego produktu" />
                  <h2>{meal.foodName}</h2>
                  <p>{meal.foodDescription}</p>
                  <h3>{ShowPrice(meal.price, meal.quantity)} zł</h3>
                  <b>Ilość: {meal.quantity}</b>
                </Wrapper>
              )}
            </div>
          ))}
        </MenuItems>

        {FinalPrice(ShowPrice) > 0 && (
          <>
            <StyledFinalPrice>
              Do zapłaty: <span>{FinalPrice(ShowPrice)}</span> zł
            </StyledFinalPrice>
            <StyledLink to="/order-number">
              <Button
                className="go-to-payment"
              >
                Zamawiam i płace
              </Button>
            </StyledLink>
          </>
        )}
      </MenuWrapper>
    </ShoppingCartWrapper>
  );
};

export default OrderSummary;
