import React, { InputHTMLAttributes } from "react";

import { AccountField, InputField } from "./formStyles";

type FormInputProps = InputHTMLAttributes<HTMLInputElement>;

const FormInput: React.FC<FormInputProps> = (props) => {
  return (
    <React.Fragment>
      <AccountField>{props.name}</AccountField>
      <InputField {...props} />
    </React.Fragment>
  );
};

export default FormInput;
