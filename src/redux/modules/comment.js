import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import apis from "@shared/apis";

// action type
const GET_COMMENT = "GET_COMMENT";
//const ADD_COMMENT = "ADD_COMMENT";
//const DELETE_COMMENT = "DELETE_COMMENT";

// action creator
const getComment = createAction(GET_COMMENT, (comments) => ({ comments }));
// const addComment = createAction(ADD_COMMENT, (comment_id, comment, mode) => ({
//   comment_id,
//   comment,
//   mode,
// }));
// const delComment = createAction(DELETE_COMMENT, (comment_id, mode) => ({
//   comment_id,
//   mode,
// }));

// middleware
const getCommentDB = (article_id) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("getCommentDB try 시작!");
      const response = await apis.getComment(article_id);
      console.log(response);

      const comments = response.data;
      console.log(comments);

      dispatch(getComment(comments));
    } catch (error) {
      console.log(error);
    }
  };
};

const addCommentDB = (article_id, comment_info) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("addCommentDB try 시작!");
      const response = await apis.addComment(article_id, comment_info);
      console.log(response);

      const comments = response.data;
      console.log(comments);
    } catch (error) {
      console.log(error);
    }
  };
};

const deleteCommentDB = (comment_id) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("deleteCommentDB try 시작!");
      const response = await apis.deleteComment(comment_id);
      console.log(response);

      const comments = response.data;
      console.log(comments);
    } catch (error) {
      console.log(error);
    }
  };
};

// initial state
const initialState = {
  list: [],

  comments: {
    comment_id: "comment_id",
    nickname: "nickname",
    comment: "comment",
    likeCommentCount: 0,
    createDate: "createDate",
  },
};

// reducer
export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        //draft.list = action.payload.comments; -> [[{}]]
        draft.list.push(...action.payload.articles); //[{}]
      }),
  },
  initialState
);

export const commentActions = {
  getCommentDB,
  addCommentDB,
  deleteCommentDB,
};
