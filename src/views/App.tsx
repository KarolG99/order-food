import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import { theme } from "../assets/styles/theme";
import { Wrapper } from "./App.styles";
import MenuOrderProvider from "../Providers/MenuOrderProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import ShoppingCart from "../components/organisms/ShoppingCart/ShoppingCart";
import AdressForm from "../components/organisms/AdressForm/AdressForm";
import FormProvider from "../Providers/FormProvider";
import OrderSummary from "../components/organisms/OrderSummary/OrderSummary";
import OrderNumber from "../components/organisms/OrderNumber/OrderNumber";

function App() {
  return (
    <BrowserRouter>
      <MenuOrderProvider>
        <FormProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Wrapper>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
                <Route path="/adress-form" element={<AdressForm />} />
                <Route path="/order-summary" element={<OrderSummary />} />
                <Route path="/order-number" element={<OrderNumber />} />
              </Routes>
            </Wrapper>
          </ThemeProvider>
        </FormProvider>
      </MenuOrderProvider>
    </BrowserRouter>
  );
}

export default App;
