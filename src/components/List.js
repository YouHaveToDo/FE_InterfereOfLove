import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {history} from "../redux/configureStore";

import styled from "styled-components";
import Text from "../elements/Text_01";
import Grid from "../elements/Grid_01";
import Items from "./Item";
const List = (props) => {
  console.log(props.post_list);
  
  const post_list = props.post_list;

  return (
    <Ellist>
      <Grid padding="20px">
        <Text margin="5px 0 0 5px" color="#FF4B3A">
          오늘의 참견 리스트 👀
        </Text>
        {post_list.map((p, idx) => {
          return (
          <Items 
            key={p.article_id}
            post_list={p} 
            _onClick={()=>{
              history.push(`/detail/${p.article_id}/${p.username}`)
            }}
           />);
        })}
      </Grid>
    </Ellist>
  );
};
// 주석
const Ellist = styled.div`
  width: 100%;
  background-color: #fff;
  height: 66.5%;
  border-radius: 30px;
  position: absolute;
  bottom: 0;
  overflow-y: scroll;
`;

export default List;
