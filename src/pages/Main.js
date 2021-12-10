import React from "react";
import styled from "styled-components";
import Grid from "../elements/Grid_01";
import Text from "../elements/Text_01";
import Circle from "../elements/Circle";
import Input from "../elements/Input_01";
import ImageA from "../elements/ImageA";
import ImageB from "../elements/ImageB";
import Button from "../elements/Button_01";
import List from "../components/List";
import { MailRounded } from "@material-ui/icons";
import ImageC from "../elements/ImageC";
import BtnImg from "../images/Btn.png";

import { history } from "../redux/configureStore";
import {postActions} from "../redux/modules/post";
import { useSelector, useDispatch } from "react-redux";

const Main = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state)=> state.post.list);
  console.log(post_list);
  
  React.useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  return (
    <div>

      <ImageC />
      <Grid padding="0 0 0 30px">
        <SubTitle>역시 남의 연애가 개꿀잼😆</SubTitle>
        <Title>연애의 참견</Title>
      </Grid>
      <List post_list={post_list}></List>
      <Btn
        onClick={() => {
          history.push('/Write');
        }}
      >
        +
      </Btn>

    </div>
  );
};

Main.defaultProps = {
  children: null,
};

const SubTitle = styled.p`
  position: absolute;
  top: 20vh;
  color: #fff;
  padding-left: 4px;
  font-size: 20px;
`;
const Title = styled.p`
  position: absolute;
  top: 24vh;
  font-size: 48px;
  color: #fff;
`;
const Btn = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  position: absolute;
  background-color: #FF4B3A;
  bottom: 39px;
  right: 25px;
  color: #fff;
  font-size: 50px;
  text-align: center;
  line-height: 80px;
  box-shadow: 0px 5px 10px rgba(255, 75, 58, 0.5);
`;

export default Main;
