import React, { useContext, useRef } from "react";
import { MenuOrderContext } from "../../../Providers/MenuOrderProvider";
import { Button } from "../../atoms/Button/Button.styles";
import { HeaderH1 } from "../../atoms/Headers/HeaderH1.styles";
import { StyledLink } from "../../atoms/StyledLink/StyledLink";
import { MenuWrapper } from "../Menu/Menu.styles";

const OrderNumber = () => {
  const { handleDeleteOrder } = useContext(MenuOrderContext);
  const LinkRef = useRef<HTMLAnchorElement>(null);

  return (
    <MenuWrapper>
      <HeaderH1>Twój numer zamówienia to</HeaderH1>
      <h2>120fe456sff</h2>

      <h1>Dziękujemy i zapraszamy ponownie!</h1>

      <StyledLink to="/" hidden ref={LinkRef}></StyledLink>
      <Button
        className="go-to-payment"
        onClick={() => handleDeleteOrder(LinkRef)}
      >
        Wróć
      </Button>
    </MenuWrapper>
  );
};

export default OrderNumber;
