import React from "react"

import PageTitle from "../components/PageTitle"
import { Container } from "./styles"

export default function Home(props) {
  return (
    <Container>
      <PageTitle
        title="React Hooks"
        subtitle="Hooks foi implementado inicialmente no React 16.8."
      />
    </Container>
  );
}
