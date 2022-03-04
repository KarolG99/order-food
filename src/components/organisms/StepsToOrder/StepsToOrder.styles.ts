import styled from "styled-components";

export const StepNumber = styled.div`
  background-color: ${({ theme }) => theme.colors.yellow};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: auto;
  margin-bottom: 10px;
`;

export const SlickWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
