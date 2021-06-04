import React from "react"

import PageTitle from "../components/PageTitle"
import { Container } from "./styles"

export default function NotFound(props) {
  return (
    <Container>
      <PageTitle error
            title="404"
            subtitle="Opss... Página Não Encontrada!" />
    </Container>
  );
}
