import React from "react";

import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

import { Container, DivCenter, Text, Button, DivLine, List } from "./styles";

export default function UseRef(props) {
  const [count, inc, desc] = useCounter();
  const url = "http://files.cod3r.com.br/curso-react/estados.json";
  const response = useFetch(url);

  function showStates(states) {
    return states.map((state) => (
      <li key={state.nome}>
        {state.nome} - {state.sigla}
      </li>
    ));
  }

  return (
    <Container>
      <PageTitle
        title="Custom Hook"
        subtitle="É possivel criar seu próprio Hook."
      />
      <SectionTitle title="Exemplo #01" />
      <DivCenter>
        <Text>{count}</Text>
        <DivLine>
          <Button onClick={() => inc()}>+1</Button>
          <Button onClick={() => desc()}>-1</Button>
        </DivLine>
      </DivCenter>
      <SectionTitle title="Exemplo #02" />
      <DivCenter>
        <List>{!response.loading ? showStates(response.data) : false}</List>
      </DivCenter>
    </Container>
  );
}
