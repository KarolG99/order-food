import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/icons/stepsIcons/arrowIcon.svg";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow};
  border: none;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &.slider-btn {
    border-radius: 50%;
    margin: 0 70px;
  }

  &.menu-item-btn {
    border-radius: 10px;
    font-weight: 700;
    font-size: 28px;
    padding: 25px;
    color: ${({ theme }) => theme.colors.black};
  }

  &.go-to-payment {
    width: fit-content;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.black};
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;

export const StyledArrow = styled(Arrow)`
  &.prev {
    transform: rotate(180deg);
  }
`;
