import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";
import Detail from "./pages/Detail";
import Write from "./pages/Write";
import Main from "./pages/Main";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
// import { history } from "../redux/configureStore";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <MobileBox>
        <BrowserRouter>
          <Route path="/" exact component={Main} />
          <Route path="/write" exact component={Write} />
          <Route path="/detail" exact component={Detail} />
        </BrowserRouter>
      </MobileBox>
    </React.Fragment>
  );
}

const MobileBox = styled.div`
  max-width: 414px;
  width: 414px;
  height: 896px;
  background-color: #fa4a0c;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
`;

export default App;
