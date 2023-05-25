import { css, styled } from "styled-components";
import { ButtonVariants } from ".";
import { Link } from "react-router-dom";

type Props = {
  disabled?: boolean;
  variant?: ButtonVariants;
};

export const Container = styled.button<Props>`
  cursor: pointer;
  border: 0;
  padding: 12px;
  background: fuchsia;

  font-size: 16px;
  font-weight: 600;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.7;
    `};

  ${(props) =>
    props.variant === "secondary" &&
    css`
      border: 1px solid fuchsia;
      background-color: #030f59;
      color: fuchsia;
    `};
`;

export const LinkContainer = styled(Link)<Props>`
  cursor: pointer;
  border: 0;
  padding: 12px;
  background: fuchsia;

  font-size: 16px;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: #030f59
    ${(props) =>
      props.disabled &&
      css`
        opacity: 0.7;
      `};

  ${(props) =>
    props.variant === "secondary" &&
    css`
      border: 1px solid fuchsia;
      background-color: #030f59;
      color: fuchsia;
    `};
`;
