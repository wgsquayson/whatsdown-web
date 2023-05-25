import { InputHTMLAttributes } from "react";
import { Container } from "./styles";

type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <Container>
      {label && <label>{label}</label>}
      <input {...props} />
    </Container>
  );
};
