import React, { useEffect, useState } from "react";

import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";
import Input from "../components/Input";

import { Container, DivCenter, Text, DivLine, TextRed } from "./styles";

function calcFactorial(num) {
  if (num === "" || num === null) return 'X';
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFactorial(n - 1) * n;
}

export default function UseEffect(props) {
  //Exemplo #01

  const [number, setNumber] = useState(0);
  const [factorial, setFactorial] = useState(0);

  useEffect(
    function () {
      setFactorial(calcFactorial(number));
    },
    [number]
  );

  //Exemplo #02
  const [status, setStatus] = useState("Ímpar");

  useEffect(
    function () {
      setStatus(number % 2 === 0 ? "Par" : "Ímpar");
    },
    [number]
  );

  return (
    <Container>
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais."
      />
      <SectionTitle title="Exemplo #01" />
      <DivCenter>
        <DivLine>
          <Text>Fatorial:</Text>
          <TextRed>{factorial === -1 ? "X" : factorial}</TextRed>
        </DivLine>
        <Input
          type="number"
          value={number}
          function={(e) => setNumber(e.target.value)}
        />
      </DivCenter>
      <SectionTitle title="Exemplo #02" />
      <DivCenter>
        <DivLine>
          <Text>Status:</Text>
          <TextRed>{status}</TextRed>
        </DivLine>
      </DivCenter>
    </Container>
  );
}
