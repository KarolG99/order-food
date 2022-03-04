import React from "react";
import headerImg480 from "../../../assets/images/HeaderImages/header-img-480.jpg";
import headerImg760 from "../../../assets/images/HeaderImages/header-img-760.jpg";
import headerImg1024 from "../../../assets/images/HeaderImages/header-img-1024.jpg";
import headerImg1280 from "../../../assets/images/HeaderImages/header-img-1280.jpg";
import headerImg1920 from "../../../assets/images/HeaderImages/header-img-1920.jpg";
import { HeaderImagesWrapper, HeaderText } from "./HeaderImages.styles";

const HeaderImages = () => {
  const img480 = headerImg480;
  const img760 = headerImg760;
  const img1024 = headerImg1024;
  const img1280 = headerImg1280;
  const img1920 = headerImg1920;

  return (
    <HeaderImagesWrapper>
      <HeaderText>
        <h1>Zamów online!</h1>
      </HeaderText>
      <picture>
        <source media="(max-width: 480px)" srcSet={img480} />
        <source media="(max-width: 760px)" srcSet={img760} />
        <source media="(max-width: 1024px)" srcSet={img1024} />
        <source media="(max-width: 1280px)" srcSet={img1280} />
        <source media="(max-width: 1920px)" srcSet={img1920} />
        <img src={img1280} alt="osoba trzymająca talerz z burgerem" />
      </picture>
    </HeaderImagesWrapper>
  );
};

export default HeaderImages;
