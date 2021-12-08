import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import apis from "@shared/apis";

// action type
const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

// action creator
const getComment = createAction(GET_COMMENT, (comments) => ({ comments }));
const addComment = createAction(ADD_COMMENT, (comment_id, comment, mode) => ({
  comment_id,
  comment,
  mode,
}));
const delComment = createAction(DELETE_COMMENT, (comment_id, mode) => ({
  comment_id,
  mode,
}));

// middleware
const getCommentDB = (article_id) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("getCommentDB try 시작!");
      const response = await apis.getComment(article_id);
      const comments = response.data.comments;
      console.log(comments);

      dispatch(getComment(comments));
    } catch (error) {
      console.log(error);
    }
  };
};

const addCommentDB = (article_id, comment_info) => {
  return async (dispatch, getState, { history }) => {
    const commentData = {
      comment,
    };

    try {
      const response = await apis.addComment(article_id, comment_info);
      const comments = response.data.comments;

      dispatch(addComment(comments));
    } catch (error) {
      console.log(error);
    }
  };
};

const deleteCommentDB = (boardId, commentId, mode) => {
  return async (dispatch, getState, { history }) => {
    try {
      if (mode === "game") {
        const response = await apis.deleteGameComment(boardId, commentId);
        const comment_id = parseInt(response.data.game_comment_id);
        dispatch(delComment(comment_id, mode));
      } else {
        const response = await apis.deleteComment(boardId, commentId);
        const comment_id = parseInt(response.data.comment_id);

        dispatch(delComment(comment_id, mode));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// initial state
const initialState = {
  list: [],

  comments: {
    comment_id: "",
    nickname: "nickname",
    comment: "comment",
    likeCommentCount: "likeCount",
    createDate: "",
  },
};

// reducer
export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.comments;
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        if (action.payload.mode === "game") {
          draft.list = state.list.filter((item) => {
            return item.game_comment_id !== action.payload.comment_id;
          });
        } else {
          draft.list = state.list.filter((item) => {
            return item.comment_id !== action.payload.comment_id;
          });
        }
      }),
    [EDIT_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        if (action.payload.mode === "game") {
          const commentIdx = state.list.findIndex((item) => {
            return item.game_comment_id === action.payload.comment_id;
          });
          const comment = { game_comment: action.payload.comment.comment };
          draft.list[commentIdx] = {
            ...state.list[commentIdx],
            ...comment,
          };
        } else {
          const commentIdx = state.list.findIndex((item) => {
            return item.comment_id === action.payload.comment_id;
          });
          draft.list[commentIdx] = {
            ...state.list[commentIdx],
            ...action.payload.comment,
          };
        }
      }),
  },
  initialState
);

export const commentActions = {
  getCommentDB,
  addCommentDB,
  deleteCommentDB,
};
