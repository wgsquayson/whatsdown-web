import { PropsWithChildren } from "react"
import { Container, Header, Wrapper } from "./styles";

type LayoutProps = PropsWithChildren & {
  title?: string;
}

export const Layout = ({ title = "whatsdown", children }: LayoutProps) => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <h1>{title}</h1>
        </Header>
        {children}
      </Wrapper>
    </Container>
  )
}