import React from "react";
import { Switch, Route } from 'react-router-dom'

import { Main } from "./styles";

import Home from '../../views/Home'
import NotFound from '../../views/NotFound'
import UseState from '../../views/UseState'
import UseEffect from '../../views/UseEffect'
import UseRef from '../../views/UseRef'
import UseCallback from '../../views/UseCallback'
import UseMemo from '../../views/UseMemo'
import UseContext from '../../views/UseContext'
import UseReducer from '../../views/UseReducer'
import UseCustom from '../../views/UseCustom'

function Routes(props) {
  return (
    <Main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/useState">
          <UseState />
        </Route>
        <Route path="/useEffect">
          <UseEffect />
        </Route>
        <Route path="/useRef">
          <UseRef />
        </Route>
        <Route path="/useCallback">
          <UseCallback />
        </Route>
        <Route path="/useMemo">
          <UseMemo />
        </Route>
        <Route path="/useContext">
          <UseContext />
        </Route>
        <Route path="/useReducer">
          <UseReducer />
        </Route>
        <Route path="/useCustom">
          <UseCustom />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Main>
  );
}

export default Routes;
