import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 30px;

  &.back {
    width: fit-content;
    margin-left: 20px;
    background-color: ${({ theme }) => theme.colors.yellow};
    padding: 10px 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    &::after {
      content: "";
      border: 1px solid ${({ theme }) => theme.colors.black};
      border-radius: 10px;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 4px;
      left: -4px;
    }

    &:hover {
      &::after {
        transition: 0.3s ease;
        top: -4px;
        left: 4px;
      }
    }
  }
`;
