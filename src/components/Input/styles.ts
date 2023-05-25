import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  input {
    padding: 12px;
    background-color: transparent;
    border: 1px solid fuchsia;
    width: 100%;

    color: fuchsia;
    font-size: 16px;
  }

  input::placeholder {
    color: fuchsia;
    opacity: 0.6;
  }
`;
