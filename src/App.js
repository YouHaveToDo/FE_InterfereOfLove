import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";
import Detail from "./pages/Detail";
import Write from "./pages/Write";
import Main from "./pages/Main";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <MobileBox>
        <ConnectedRouter history={history}>
          <Route path="/main" exact component={Main} />
          <Route path="/write" exact component={Write} />
          <Route path="/detail" exact component={Detail} />
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
