import React, { useReducer } from "react";

import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";
import { initialState, reducer } from "../store";
import {
  numberAdd2,
  numberMulti7,
  numberDiv25,
  numberInt,
  numberAddN,
  login,
} from "../store/actions";
import { Button, Container, DivCenter, Text, DivLine } from "./styles";

export default function UseReducer(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais."
      />
      <SectionTitle title="Exemplo #01" />
      <DivCenter>
        {state.user ? <Text>{state.user.name}</Text> : <Text>Sem Usuário</Text>}
        <Text>{state.number}</Text>
        <DivLine>
          <Button onClick={() => login(dispatch, "Jean Logan")}>Login</Button>
          <Button onClick={() => numberAdd2(dispatch)}>+2</Button>
          <Button onClick={() => numberMulti7(dispatch)}>*7</Button>
          <Button onClick={() => numberDiv25(dispatch)}>/25</Button>
          <Button onClick={() => numberInt(dispatch)}>Int</Button>
          <Button onClick={() => numberAddN(dispatch, -9)}>-9</Button>
        </DivLine>
      </DivCenter>
    </Container>
  );
}
