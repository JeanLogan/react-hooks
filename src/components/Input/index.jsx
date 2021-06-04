import React from "react";

import { InputStyle } from "./styles";

function Input(props) {
  return (
    <div>
      <InputStyle ref={props.reference} type={props.type} value={props.value} onChange={props.function}/>
    </div>
  );
}

export default Input;
