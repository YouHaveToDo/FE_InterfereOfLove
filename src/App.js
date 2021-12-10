import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";

import Hello from "./pages/Hello";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Detail from "./pages/Detail";
import Write from "./pages/Write";
import Main from "./pages/Main";
import Edit from "./pages/Edit";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <MobileBox>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={Hello} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />

          <Route path="/main/:username" exact component={Main} />
          <Route path="/write" exact component={Write} />
          <Route path="/detail/:article_id/:user_id/:username" exact component={Detail} />
          <Route path="/edit/:article_id/:user_id" exact component={Edit} />
        </ConnectedRouter>
      </MobileBox>
    </React.Fragment>
  );
}

const MobileBox = styled.div`
  max-width: 414px;
  max-height: 896px;
  width: 98%;
  height: 98%;
  border-radius: 30px;
  border: 2px solid #efefef;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;

export default App;