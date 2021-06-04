import React from "react"

import { Container, Title } from "./styles"

function SectionTitle(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
    </Container>
  );
}

export default SectionTitle;
