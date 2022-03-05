import styled from "styled-components";

export const H1rderSummary = styled.h1`
  position: relative;
  font-size: 22px;

  &::after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.yellow};
    width: 110%;
    height: 70%;
    bottom: 0;
    left: -2px;
    z-index: -1;
  }
`;
