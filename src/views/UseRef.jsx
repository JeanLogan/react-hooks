import React, { useState, useRef, useEffect } from "react";

import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";
import Input from "../components/Input";

import { Container, DivCenter, Text, TextRed, DivLine } from "./styles";

const merge = function (s1, s2) {
  return [...s1].map((e, i) => `${e}${s2[i] || ""}`).join("");
};

export default function UseRef(props) {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  useEffect(
    function () {
      count.current++;
      myInput2.current.focus();
    },
    [value1]
  );

  useEffect(
    function () {
      count.current++;
      myInput1.current.focus();
    },
    [value2]
  );

  return (
    <Container>
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current."
      />
      <SectionTitle title="Exemplo #01" />
      <DivCenter>
        <DivLine>
          <Text>Contador:</Text>
          <TextRed>{count.current}</TextRed>
        </DivLine>
        <Text>{merge(value1, value2)}</Text>
        <Input
          type="text"
          value={value1}
          reference={myInput1}
          function={(e) => setValue1(e.target.value)}
        />
      </DivCenter>
      <SectionTitle title="Exemplo #02" />
      <DivCenter>
        <Input
          type="text"
          value={value2}
          reference={myInput2}
          function={(e) => setValue2(e.target.value)}
        />
      </DivCenter>
    </Container>
  );
}
