import styled, { keyframes } from "styled-components";

export const Scale = keyframes`
  0% {
    transform: scale(0.7);
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;

  &.step-wrapper {
    flex-direction: row;

    &.anim {
      animation: ${Scale} 0.3s ease-in-out;
    }
  }

  &.btn-wrapper {
    flex-direction: row;
    margin-bottom: 50px;
  }

  &.menu-item {
    -webkit-box-shadow: 0px 1px 26px -15px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 1px 26px -15px rgba(66, 68, 90, 1);
    box-shadow: 0px 1px 26px -15px rgba(66, 68, 90, 1);
    max-width: 290px;
    padding: 0 10px 10px 10px;
    border-radius: 15px;
    align-items: flex-start;
    justify-content: space-between;
    margin: 20px;
    margin-bottom: 35px;

    & img {
      align-self: center;
      width: 290px;
      border-radius: 10px 15px 0 0;
      height: 194px;
      object-fit: cover;
    }

    & h2 {
      margin: 10px 0;
    }

    & p {
      margin: 5px;
      color: ${({ theme }) => theme.colors.grey};
      font-size: 14px;
    }

    & h3 {
      margin: 10px 0;
    }
  }
`;
