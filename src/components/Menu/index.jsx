import React from "react";
import { Link } from 'react-router-dom';

import { MenuAside, Nav, Ul, Li } from "./styles";

function Menu(props) {
  return (
    <MenuAside>
      <Nav>
        <Ul>
          <Li>
            <Link to="/">Início</Link>
          </Li>
          <Li>
            <Link to="/useState">useState()</Link>
          </Li>
          <Li>
            <Link to="/useEffect">useEffect()</Link>
          </Li>
          <Li>
            <Link to="/useRef">useRef()</Link>
          </Li>
          <Li>
            <Link to="/useMemo">useMemo()</Link>
          </Li>
          <Li>
            <Link to="/useCallback">useCallback()</Link>
          </Li>
          <Li>
            <Link to="/useContext">useContext()</Link>
          </Li>
          <Li>
            <Link to="/useReducer">useReducer()</Link>
          </Li>
          <Li>
            <Link to="/useCustom">useCustomHook()</Link>
          </Li>
        </Ul>
      </Nav>
    </MenuAside>
  );
}

export default Menu;
