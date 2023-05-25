import styled, { css } from "styled-components";

export const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  height: 100%;

  overflow: auto;
`;

export const Message = styled.div<{ isFromCurrentUser: boolean }>`
  width: fit-content;
  max-width: 70%;
  background-color: ${(props) =>
    props.isFromCurrentUser ? "fuchsia" : "#030f59"};

  ${(props) =>
    props.isFromCurrentUser &&
    css`
      align-self: flex-end;
      border-bottom-right-radius: 0;
    `}

  padding: 12px;
  border-radius: 8px;

  display: flex;
  word-break: break-all;

  border: ${(props) =>
    props.isFromCurrentUser ? "none" : "1px solid fuchsia"};

  ${(props) =>
    !props.isFromCurrentUser &&
    css`
      border-bottom-left-radius: 0;
    `}

  p {
    color: ${(props) => (props.isFromCurrentUser ? "#030f59" : "fuchsia")};
  }
`;

export const MessageInputContainer = styled.footer`
  border-top: 1px solid fuchsia;
  padding: 24px;

  display: flex;
  align-items: center;
  gap: 12px;

  input {
    padding: 12px;
    background-color: transparent;
    border: 1px solid fuchsia;
    flex: 1;

    color: fuchsia;
    font-size: 16px;
  }

  input::placeholder {
    color: fuchsia;
    opacity: 0.6;
  }

  button {
    cursor: pointer;
    border: 0;
    padding: 12px;
    background: fuchsia;

    span {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export const Centered = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 72px;
`;
