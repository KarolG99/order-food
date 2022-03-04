import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/icons/stepsIcons/arrowIcon.svg";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow};
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &.slider-btn {
    margin: 0 70px;
  }

  &.menu-item-btn {
    border-radius: 10px;
    font-weight: 700;
    font-size: 28px;
    padding: 25px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const StyledArrow = styled(Arrow)`
  &.prev {
    transform: rotate(180deg);
  }


`;
