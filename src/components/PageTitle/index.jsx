import React from "react";

import { Container, Title, Subtitle } from './styles';

function PageTitle(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Container>
  );
}

export default PageTitle;
