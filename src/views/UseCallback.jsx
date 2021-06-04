import React, { useState, useCallback } from "react";

import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";
import UseCallbackButtons from "./UserCallbackButtons";

import { Container, DivCenter, Text } from "./styles";

export default function UseCallback(props) {
  const [count, setCount] = useState(0);

  const inc = useCallback(
    function inc(delta) {
      setCount((current) => current + delta);
    },
    [setCount]
  );

  return (
    <Container>
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memorizada."
      />
      <SectionTitle title="Exemplo #01" />
      <DivCenter>
        <Text>{count}</Text>
        <UseCallbackButtons inc={inc} />
      </DivCenter>
    </Container>
  );
}
