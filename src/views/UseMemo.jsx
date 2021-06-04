import React, { useState, useMemo } from "react";

import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";
import Input from "../components/Input";

import { Container, DivCenter, Text } from "./styles";

function sum(a, b) {
  const future = Date.now() + 2000;
  while (Date.now() < future) {
    // espera 2s...
  }
  return a + b;
}

export default function UseMemo(props) {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  const result = useMemo(() => sum(n1, n2), [n1, n2]);

  return (
    <Container>
      <PageTitle title="Hook UseMemo" subtitle="Retorna um valor memorizado." />
      <SectionTitle title="Exemplo #01" />
      <DivCenter>
        <Input
          type="number"
          value={n1}
          function={(e) => setN1(parseInt(e.target.value))}
        />
        <Input
          type="number"
          value={n2}
          function={(e) => setN2(parseInt(e.target.value))}
        />
        <Input
          type="number"
          value={n3}
          function={(e) => setN3(parseInt(e.target.value))}
        />
        <Text>{result}</Text>
      </DivCenter>
    </Container>
  );
}
