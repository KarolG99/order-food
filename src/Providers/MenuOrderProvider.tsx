import React, { RefObject, useState } from "react";
import { MenuData } from "../data/MenuData/MenuData";

// interface <
interface menuInterface {
  image: string;
  foodName: string;
  foodDescription: string;
  price: number;
  quantity: number;
}

interface MenuOrderInterface {
  ShoppingCartArray: menuInterface[];
  orderedMeals: menuInterface[];
  handleOrderMeals: (values: menuInterface) => void;
  handleSubtractMeal: (values: menuInterface) => void;
  handleDeleteOrder: (LinkRef: RefObject<HTMLAnchorElement>) => void;
}

interface MenuOrderProviderProps {
  children: JSX.Element;
}
// /> interface

//  context <
export const MenuOrderContext = React.createContext<MenuOrderInterface>({
  ShoppingCartArray: [],
  orderedMeals: [],
  handleOrderMeals: () => {},
  handleSubtractMeal: () => {},
  handleDeleteOrder: () => {},
});
// /> context

const MenuOrderProvider = ({
  children,
}: MenuOrderProviderProps): JSX.Element => {
  const [orderedMeals, setOrderedMeals] = useState<menuInterface[]>([]);
  const ShoppingCartArray = MenuData;

  const handleOrderMeals = (values: menuInterface): void => {
    const newMeal = {
      image: values.image,
      foodName: values.foodName,
      foodDescription: values.foodDescription,
      price: values.price,
      quantity: (values.quantity += 1),
    };
    setOrderedMeals([newMeal, ...orderedMeals]);
    orderedMeals.forEach((element) => {
      if (!orderedMeals.includes(element)) {
        ShoppingCartArray.push(element);
      }
    });
  };

  const handleSubtractMeal = (values: menuInterface): void => {
    ShoppingCartArray.forEach((element) => {
      if (values.foodName === element.foodName && values.quantity > 0) {
        values.quantity -= 1;
        setOrderedMeals([values, ...orderedMeals]);
      }
    });
  };

  const handleDeleteOrder = (LinkRef: RefObject<HTMLAnchorElement>) => {
    // eslint-disable-next-line array-callback-return
    ShoppingCartArray.map((element): void => {
      if (element.quantity > 0) {
        element.quantity = 0;
      }
    });
    if (LinkRef.current) {
      LinkRef.current.click();
    }
  };

  return (
    <MenuOrderContext.Provider
      value={{
        ShoppingCartArray,
        orderedMeals,
        handleOrderMeals,
        handleSubtractMeal,
        handleDeleteOrder,
      }}
    >
      {children}
    </MenuOrderContext.Provider>
  );
};

export default MenuOrderProvider;
