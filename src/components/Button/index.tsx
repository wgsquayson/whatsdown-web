import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { Container, LinkContainer } from "./styles";

export type ButtonVariants = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren & {
    loading?: boolean;
    variant?: ButtonVariants;
    linksTo?: string;
  };

export const Button = ({
  children,
  variant = "primary",
  loading,
  linksTo,
  ...props
}: ButtonProps) => {
  if (linksTo) {
    return (
      <LinkContainer
        to={linksTo}
        variant={variant}
        disabled={props.disabled || loading}
      >
        {loading ? "wait..." : children}
      </LinkContainer>
    );
  }

  return (
    <Container
      {...props}
      variant={variant}
      disabled={props.disabled || loading}
    >
      {loading ? "wait..." : children}
    </Container>
  );
};
