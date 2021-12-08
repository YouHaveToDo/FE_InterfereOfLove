import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { checkCodeStatus } from "@shared/checkCodeStatus";
import apis from "../../shared/apis";

// action type
const GET_POST = "GET_POST";
const ADD_POST = "ADD_POST";
const UPDATE_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
const GET_DETAIL_POST = "GET_DETAIL_POST";

// action creator
const getPosts = createAction(GET_POST, (articles) => ({ articles }));
const addPost = createAction(ADD_POST, (article_info) => ({ article_info }));
const updatePost = createAction(UPDATE_POST, (article_id, article_info) => ({
  article_id,
  article_info,
}));
const getDetailPost = createAction(GET_DETAIL_POST, (articleOne) => ({
  articleOne,
}));
const deletePost = createAction(DELETE_POST, (delPost) => ({ delPost }));

// initial state
const initialState = {
  list: [],

  articles: {
    artice_id: "artice_id",
    type: "type",
    nickname: "nickname",
    title: "title",
    content: "content",
    createDate: "createDate",
    greenCount: 0,
    redCount: 0,
  },

  //   detailArticle: {
  //     artice_id: "artice_id",
  //     type: "type",
  //     nickname: "nickname",
  //     title: "title",
  //     content: "content",
  //     createDate: "createDate",
  //   },
};

// middleware
const getPostDB = () => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("getPostDB try!!");
      const response = await apis.getPost();
      
      const articles = response.data.articles;
      console.log(articles);
      
      dispatch(getPosts(articles));
    } catch (error) {
      console.log(error);

      checkCodeStatus(error.response.status, 403);
    }
  };
};

const addPostDB = (post_info) => {
  return async (dispatch, getState, { history }) => {
    const article_info = {
      post_type: post_info.type,
      post_title: post_info.title,
      post_content: post_info.content,
    };

    try {
      console.log("addPostDB try!!");
      const response = await apis.addPost(article_info);
      console.log(response);
    
      response && dispatch(addPost(article_info));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};

const updatePostDB = (article_id, article_info) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("updatePostDB try!!");
      const response = await apis.updatePost(article_id, article_info);
      console.log(response);

      response && dispatch(updatePost(article_info, article_info));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};

const deletePostDB = (article_id) => {
  return async (dispatch, getState, { history }) => {
    const postList = getState().post.list;
    const delPost = postList.filter((post) => post.article_id !== article_id);

    try {
      console.log("deletePostDB try!!");
      const response = await apis.deletePost(article_id);
      console.log(response);

      response && dispatch(deletePost(delPost));
    } catch (error) {
      console.log(error);
    }
  };
};

const getPostDetailDB = (article_id) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("getPostDetailDB try!!");
      const response = await apis.getPostDetail(article_id);
      const data = response.data;
      console.log(data);

      let articleOne = {
        artice_id: data.artice_id,
        nickname: data.nickname,
        type: data.type,
        title: data.title,
        content: data.content,
        createDate: data.createDate,
      };

      dispatch(getDetailPost(articleOne));
    } catch (error) {
      console.log(error);

      checkCodeStatus(error.response.status, 403);
    }
  };
};

// reducer
export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.articles;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.article_info);
      }),
    [UPDATE_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex(
          (post) => post.artice_id === action.payload.artice_id
        );
        draft.list[idx] = {
          ...draft.list[idx],
          ...action.payload.article_info,
        };
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.delPost;
      }),
    [GET_DETAIL_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.articles = action.payload.articleOne;
      }),
  },
  initialState
);

export const postActions = {
  getPostDB,
  addPostDB,
  deletePostDB,
  updatePostDB,
  getPostDetailDB,
};
