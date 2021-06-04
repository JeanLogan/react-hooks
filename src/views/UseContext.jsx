import React, { useContext, useEffect } from "react";

import DataContext from "../contexts/DataContext";
import { AppContext } from "../contexts/Store";

import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";

import { Button, Container, DivCenter, Text, DivLine } from "./styles";

export default function UseContext(props) {
  const { state, setState } = useContext(DataContext);

  const { number, setNumber, text, setText} = useContext(AppContext);

  function addNumber(delta) {
    setState({
      ...state,
      number: state.number + delta,
    });
  }

  useEffect(
    function () {
      if (number > 1250) {
        setText("Texto alterado pelo useEffect");
      }
    },
    [number]
  );

  return (
    <Container>
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto."
      />
      <SectionTitle title="Exemplo #01" />
      <DivCenter>
        <Text>{state.text}</Text>
        <Text>{state.number}</Text>
        <DivLine>
          <Button onClick={() => addNumber(-1)}>-1</Button>
          <Button onClick={() => addNumber(+1)}>+1</Button>
        </DivLine>
      </DivCenter>

      <SectionTitle title="Exemplo #02" />
      <DivCenter>
        <Text>{text}</Text>
        <Text>{number}</Text>
        <DivLine>
          <Button onClick={() => setNumber(number - 1)}>-1</Button>
          <Button onClick={() => setNumber(number + 1)}>+1</Button>
        </DivLine>
      </DivCenter>
    </Container>
  );
}
