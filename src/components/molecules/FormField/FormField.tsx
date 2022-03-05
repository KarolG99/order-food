import React, { ChangeEventHandler } from "react";
import { FormFieldWrapper } from "./FormField.styles";

interface FormFieldProps {
  label?: string;
  id: string;
  name: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const FormField = ({
  label,
  id,
  name,
  placeholder,
  type,
  value,
  onChange,
}: FormFieldProps): JSX.Element => {
  return (
    <FormFieldWrapper>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </FormFieldWrapper>
  );
};

export default FormField;
