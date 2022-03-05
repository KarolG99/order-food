import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 20px;
`;

export const FormFieldWrapper = styled.div`
  margin: 15px 0;

  input {
    width: 300px;
    margin: 10px;
    padding: 4px 2px;
    border: none;
    border-bottom: 3px solid ${({ theme }) => theme.colors.yellow};
    outline: none;
    border-radius: 0;
    font-weight: 600;
    font-size: 16px;
  }
`;
