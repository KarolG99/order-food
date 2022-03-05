import React, { useState } from "react";

// interfaces<
interface formValuesInterface {
  fullname: string;
  town: string;
  zipCode: string;
  street: string;
  houseNumber: string;
  phoneNumber: string;
}

interface FormContextInterface {
  adress: formValuesInterface[];
  handleAddFormValues: (values: formValuesInterface) => void;
}

interface FormProviderPropsI {
  children: JSX.Element;
}
// />interfaces

// context<
export const FormContext = React.createContext<FormContextInterface>({
  adress: [],
  handleAddFormValues: () => {},
});
// />context

const FormProvider = ({ children }: FormProviderPropsI): JSX.Element => {
  const [adress, setAdress] = useState<formValuesInterface[]>([]);

  const handleAddFormValues = (values: formValuesInterface): void => {
    const newAdress = {
      fullname: values.fullname,
      town: values.town,
      zipCode: values.zipCode,
      street: values.street,
      houseNumber: values.houseNumber,
      phoneNumber: values.phoneNumber,
    };
    setAdress([newAdress]);
  };

  return (
    <FormContext.Provider value={{ adress, handleAddFormValues }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
