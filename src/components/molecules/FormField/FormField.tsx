import React, { ChangeEventHandler } from "react";
import { FormFieldWrapper } from "./FormField.styles";
import PropTypes from "prop-types";

interface FormFieldProps {
  label?: string;
  id: string;
  name: string;
  placeholder: string;
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
        required
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

FormField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
