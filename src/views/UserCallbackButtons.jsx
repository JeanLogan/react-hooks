import React from "react";

import { DivLine, Button } from "./styles";

const UseCallbackButtons = (props) => {
  console.log("Componente filho renderizou...");
  return (
    <DivLine>
      <Button onClick={() => props.inc(6)}>+6</Button>
      <Button onClick={() => props.inc(12)}>+12</Button>
      <Button onClick={() => props.inc(18)}>+18</Button>
    </DivLine>
  );
};

export default React.memo(UseCallbackButtons);
