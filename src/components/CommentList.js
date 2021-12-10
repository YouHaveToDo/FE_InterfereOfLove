import React from "react";
import styled from "styled-components";
import ImageB from "../elements/ImageB";
import { useSelector, useDispatch } from "react-redux";
import Grid from "../elements/Grid_03";
import Text from "../elements/Text_03";
import { commentActions } from "../redux/modules/comment";
import { ContactSupportOutlined } from "@material-ui/icons";
//import { useDispatch, useSelector } from "react-redux";
//import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentList = (props) => {
  const dispatch = useDispatch();
  const comment = React.useRef();
  console.log(comment);
  // const comment_id = comment;
  // console.log(comment_id);
  const deleteComment = (e) => {
    console.log(e.target.id);
    dispatch(commentActions.deleteCommentDB());
  };
  const a = props.comment;
  console.log(a);
  return (
    <React.Fragment>
      <CommentBox>
        {props.comment.map((i, index) => {
          return (
            <CommentItem key={index} id={i.comment_id}>
              댓글 : {i.comment}
              <ImageB float={"right"} _onClick={deleteComment} />
            </CommentItem>
          );
        })}
      </CommentBox>
    </React.Fragment>
  );
};

CommentList.defaultProps = {
  post_id: null,
};

const CommentBox = styled.div`
  background-color: #f1f1fa;
  padding: 15px;
  height: auto;
  margin-top: 10px;
`;
const CommentItem = styled.div`
  width: 100%;
  padding-bottom: 5px;
  border-bottom: 1px solid #333;
  margin-bottom: 10px;
`;

export default CommentList;

// const CommentItem = (props) => {
//   const { user_name, user_id, post_id, contents, insert_dt } = props;
//   return (
//     <Grid is_flex margin="10px 0px" padding="10px 0px" bg="#ffffff">
//       <Text bold>댓글 : {contents}</Text>
//       <Text margin="0px">{user_name}</Text>
//     </Grid>
//   );
// };

// CommentItem.defaultProps = {
//   user_name: "썸남",
//   user_id: "",
//   post_id: 1,
//   contents: "썸이네요!",
//   insert_dt: "2021-01-01 19:00:00",
// };
