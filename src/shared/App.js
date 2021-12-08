import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";

import GlobalStyles from "../components/GlobalStyles";
import CommentList from "../components/CommentList";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <MobileBox>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/write" exact component={PostWrite} />
          <Route path="/write/:id" exact component={PostWrite} />
          <Route path="/post/:id" exact component={PostDetail} />
        </ConnectedRouter>
        <CommentList />
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
`;

export default App;
