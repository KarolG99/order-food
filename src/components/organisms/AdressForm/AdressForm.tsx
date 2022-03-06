import React, { useContext, useRef, useState } from "react";
import { FormContext } from "../../../Providers/FormProvider";
import { MenuWrapper } from "../Menu/Menu.styles";
import { Button, StyledArrow } from "../../atoms/Button/Button.styles";
import { HeaderH1 } from "../../atoms/Headers/HeaderH1.styles";
import { StyledLink } from "../../atoms/StyledLink/StyledLink";
import FormField from "../../molecules/FormField/FormField";
import { Form } from "../../molecules/FormField/FormField.styles";
import { AdressFormWrapper } from "./AdressForm.styles";

interface initialFormStateInterface {
  fullname: string;
  town: string;
  zipCode: string;
  street: string;
  houseNumber: string;
  phoneNumber: string;
}

const initialFormState: initialFormStateInterface = {
  fullname: "",
  town: "",
  zipCode: "",
  street: "",
  houseNumber: "",
  phoneNumber: "",
};

const AdressForm = () => {
  const [formValues, setFormValues] =
    useState<initialFormStateInterface>(initialFormState);
  const { handleAddFormValues } = useContext(FormContext);
  const LinkRef = useRef<HTMLAnchorElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitAdress = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (
      formValues.fullname &&
      formValues.houseNumber &&
      formValues.town &&
      formValues.zipCode
    ) {
      handleAddFormValues(formValues);
      setFormValues(initialFormState);
      if (LinkRef.current) {
        LinkRef.current.click();
      }
    }
  };

  return (
    <AdressFormWrapper>
      <StyledLink to="/shopping-cart" className="back">
        <StyledArrow className="prev" />
      </StyledLink>

      <MenuWrapper>
        <HeaderH1 className="menu-header">Dane do zamówienia</HeaderH1>

        <Form>
          <FormField
            id="fullname"
            name="fullname"
            onChange={handleInputChange}
            value={formValues.fullname}
            placeholder="Imię i nazwisko *"
          />
          <FormField
            id="town"
            name="town"
            onChange={handleInputChange}
            value={formValues.town}
            placeholder="Miejscowość *"
          />
          <FormField
            id="zipCode"
            name="zipCode"
            onChange={handleInputChange}
            value={formValues.zipCode}
            placeholder="Kod pocztowy *"
          />
          <FormField
            id="street"
            name="street"
            onChange={handleInputChange}
            value={formValues.street}
            placeholder="Ulica"
          />
          <FormField
            id="houseNumber"
            name="houseNumber"
            onChange={handleInputChange}
            value={formValues.houseNumber}
            placeholder="Numer domu *"
          />
          <FormField
            id="phoneNumber"
            name="phoneNumber"
            onChange={handleInputChange}
            value={formValues.phoneNumber}
            placeholder="Numer telefonu"
          />
          {!(formValues.fullname &&
            formValues.houseNumber &&
            formValues.town &&
            formValues.zipCode) && (
              <i>Wypełnij obowiązkowe pola *</i>
            )}

          <StyledLink to="/order-summary" ref={LinkRef}>
            <Button
              type="submit"
              className="go-to-payment"
              onClick={handleSubmitAdress}
            >
              Dalej
            </Button>
          </StyledLink>
        </Form>
      </MenuWrapper>
    </AdressFormWrapper>
  );
};

export default AdressForm;
