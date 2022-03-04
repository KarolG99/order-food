import styled from "styled-components";

export const HeaderImagesWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  img {
    max-width: 100%;
  }
`;

export const HeaderText = styled.div`
  position: absolute;
  top: 30%;
  max-width: 75%;
  h1 {
    font-weight: 900;
    font-size: ${({ theme }) => theme.fontSize.header};
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.yellow};
  }

  @media screen and (max-width: 350px) {
    top: 15%;
  }
`;
