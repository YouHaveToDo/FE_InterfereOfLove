import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import Hello from "./pages/Hello";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { history } from "./redux/configureStore";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import styled from "styled-components";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <MobileBox>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={Hello} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </ConnectedRouter>
      </MobileBox>
    </React.Fragment>
  );
}

const MobileBox = styled.div`
  max-width: 414px;
  max-height: 896px;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  border: 1px solid #efefef;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;

export default App;
