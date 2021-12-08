import React from "react";
import styled from "styled-components";

import Grid from "../elements/Grid";
import Text from "../elements/Text";

//import { useDispatch, useSelector } from "react-redux";
//import { actionCreators as commentActions } from "../redux/modules/comment";

const c_list = [
  {user_name: "썸남", contents: "썸이네요!"},
  {user_name: "썸남", contents: "썸이네요!"},
  {user_name: "썸남", contents: "썸이네요!"},
  {user_name: "썸남", contents: "썸이네요!"},
  {user_name: "썸남", contents: "썸이네요!"},
  {user_name: "썸남", contents: "썸이네요!"},
  {user_name: "썸남", contents: "썸이네요!"},
  {user_name: "썸남", contents: "썸이네요!"},
  {user_name: "썸남", contents: "썸이네요!"},
  {user_name: "썸남", contents: "썸이네요!"},
  {user_name: "썸남", contents: "썸이네요!"}
]

const CommentList = (props) => {
  return (
    <React.Fragment>
      <CommentBox>
        {c_list.map((i, index)=>{
          return <CommentItem key={index} {...i}/>
        })}
      </CommentBox>
    </React.Fragment>
  );
};

CommentList.defaultProps = {
  post_id: null,
};

const CommentBox = styled.div`
  background-color : #F1F1FA;
  padding : 15px;
  height : auto;
  border-radius : 30px;
`;

export default CommentList;

const CommentItem = (props) => {
  const { user_name, user_id, post_id, contents, insert_dt } = props;
  return (
        <Grid is_flex margin="10px 0px" padding="10px 0px" bg="#ffffff" >
          <Text bold>댓글 : {contents}</Text>
          <Text margin="0px">{user_name}</Text>
        </Grid>
  );
};

CommentItem.defaultProps = {
  user_name: "썸남",
  user_id: "",
  post_id: 1,
  contents: "썸이네요!",
  insert_dt: "2021-01-01 19:00:00",
};
