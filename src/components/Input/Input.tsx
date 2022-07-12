import React from "react";
import { InputDefault } from "./InputStyle";

interface InputProps {
  label: string;
  name: string;
  type: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, name, type, required, onChange }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <InputDefault
        name={name}
        required={required}
        onChange={onChange}
        type={type}
      />
    </>
  );
};

export default Input;
