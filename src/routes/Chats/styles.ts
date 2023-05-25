import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Centered = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 72px;
`;

export const Chat = styled(Link)`
  width: 100%;
  padding: 24px;
  text-decoration: none;
  color: fuchsia;
  border-bottom: 1px solid fuchsia;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ChatsContainer = styled.div`
  flex: 1;
`;
