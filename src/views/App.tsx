import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import { theme } from "../assets/styles/theme";
import { Wrapper } from "./App.styles";
import MenuOrderProvider from "../Providers/MenuOrderProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import ShoppingCart from "../components/organisms/ShoppingCart/ShoppingCart";

function App() {
  return (
    <BrowserRouter>
      <MenuOrderProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Wrapper>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/shopping-cart" element={<ShoppingCart />} />
            </Routes>
          </Wrapper>
        </ThemeProvider>
      </MenuOrderProvider>
    </BrowserRouter>
  );
}

export default App;
