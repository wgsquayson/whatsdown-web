import { ChangeEvent, FormEvent, HTMLInputTypeAttribute } from "react";
import { Centered, FormContainer } from "./styles";
import { Button, Input } from "..";

export type Field = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
};

type FormProps = {
  fields: Field[];
  onSubmit: (event: FormEvent) => void;
  buttonText: string;
  loading?: boolean;
};

export const Form = ({ fields, onSubmit, buttonText, loading }: FormProps) => {
  return (
    <Centered>
      <FormContainer onSubmit={onSubmit}>
        {fields.map((field) => (
          <Input
            {...field}
            type={field.type ?? "text"}
            required={field.required ?? true}
          />
        ))}
        <Button loading={loading} type="submit">
          {buttonText}
        </Button>
      </FormContainer>
    </Centered>
  );
};
