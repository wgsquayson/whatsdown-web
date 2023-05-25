import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  border: 1px solid fuchsia;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  border-bottom: 1px solid fuchsia;
  padding: 24px;
`;