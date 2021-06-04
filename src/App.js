import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import DataContext, { data } from "./contexts/DataContext";
import Store from "./contexts/Store";

import { AppContainer } from "./styles.js";

import Menu from "./components/Menu";
import Routes from "./components/Routes";

export default function App(props) {
  const [state, setState] = useState(data);
  return (
    <Store>
      <DataContext.Provider value={{ state, setState }}>
        <AppContainer>
          <Router>
            <Menu />
            <Routes />
          </Router>
        </AppContainer>
      </DataContext.Provider>
    </Store>
  );
}
