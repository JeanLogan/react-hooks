import React, { useState } from "react";

import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";
import Input from "../components/Input";

import {
  Container,
  DivCenter,
  Text,
  Button,
  DivLine,
} from "./styles";

export default function UseState(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Valor inicial...");

  return (
    <Container>
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais."
      />
      <SectionTitle title="Exemplo #01" />
      <DivCenter>
        <Text>{count}</Text>
        <DivLine>
          <Button onClick={() => setCount(count - 1)}>-1</Button>
          <Button onClick={() => setCount(count + 1)}>+1</Button>
        </DivLine>
      </DivCenter>
      <SectionTitle title="Exemplo #02" />
      <DivCenter>
        <Text>{name}</Text>
        <Input type="text" value={name} function={e => setName(e.target.value)} />        
      </DivCenter>
    </Container>
  );
}
