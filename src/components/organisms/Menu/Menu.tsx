import React, { useContext } from "react";
import { HeaderH1 } from "../../atoms/Headers/HeaderH1.styles";
import { Wrapper } from "../../atoms/Wrapper/Wrapper.styles";
import { ButtonsWrapper, MenuItems, MenuWrapper } from "./Menu.styles";
import { MenuData } from "../../../data/MenuData/MenuData";
import { Button } from "../../atoms/Button/Button.styles";
import { MenuOrderContext } from "../../../Providers/MenuOrderProvider";

const Menu = () => {
  const { handleOrderMeals, handleSubtractMeal } = useContext(MenuOrderContext);

  return (
    <MenuWrapper>
      <HeaderH1 className="menu-header">Nasze Menu</HeaderH1>
      <MenuItems>
        {MenuData &&
          MenuData.map((menuItem) => (
            <Wrapper key={menuItem.foodName} className="menu-item">
              <img src={menuItem.image} alt="zdjęcie dania" />
              <h2>{menuItem.foodName}</h2>
              <p>{menuItem.foodDescription}</p>
              <h3>{menuItem.price} zł</h3>
              <ButtonsWrapper>
                <Button
                  className="menu-item-btn"
                  onClick={() => handleSubtractMeal(menuItem)}
                >
                  -
                </Button>
                {menuItem.quantity} szt.
                <Button
                  className="menu-item-btn"
                  onClick={() => handleOrderMeals(menuItem)}
                >
                  +
                </Button>
              </ButtonsWrapper>
            </Wrapper>
          ))}
      </MenuItems>
    </MenuWrapper>
  );
};

export default Menu;
