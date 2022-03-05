import React, { useState } from "react";
import { HeaderH1 } from "../../atoms/Headers/HeaderH1.styles";
import { Wrapper } from "../../atoms/Wrapper/Wrapper.styles";
import { ReactComponent as Step1Icon } from "../../../assets/images/StepsImages/Step1Icon.svg";
import { ReactComponent as Step2Icon } from "../../../assets/images/StepsImages/Step2Icon.svg";
import { ReactComponent as Step3Icon } from "../../../assets/images/StepsImages/Step3Icon.svg";
import { ReactComponent as Step4Icon } from "../../../assets/images/StepsImages/Step4Icon.svg";
import { Button, StyledArrow } from "../../atoms/Button/Button.styles";

const StepsToOrder = () => {
  const [currentImg, setCurrentImg] = useState(1);
  const [animationActive, setAnimationActive] = useState<boolean>(false);

  const setPrevSlide = (): void => {
    setAnimationActive(true);
    setCurrentImg((prev) => prev - 1);
    if (currentImg <= 1) setCurrentImg(4);
  };

  const setNextSlide = (): void => {
    setAnimationActive(true);
    setCurrentImg((prev) => prev + 1);
    if (currentImg >= 4) setCurrentImg(1);
  };

  // className="step-wrapper"

  return (
    <Wrapper>
      <HeaderH1 className="steps-header">Jak to działa?</HeaderH1>
      <Wrapper className={animationActive ? 'step-wrapper anim' : 'step-wrapper'} onAnimationEnd={() => setAnimationActive(false)}>
        {currentImg === 1 && <Step1Icon />}
        {currentImg === 2 && <Step2Icon />}
        {currentImg === 3 && <Step3Icon />}
        {currentImg === 4 && <Step4Icon />}
      </Wrapper>

      <Wrapper className="btn-wrapper">
        <Button className="slider-btn" onClick={setPrevSlide}>
          <StyledArrow className="prev" />
        </Button>

        <Button className="slider-btn" onClick={setNextSlide}>
          <StyledArrow />
        </Button>
      </Wrapper>
    </Wrapper>
  );
};

export default StepsToOrder;
