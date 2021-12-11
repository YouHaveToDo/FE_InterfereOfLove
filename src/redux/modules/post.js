import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
//import { checkCodeStatus } from "../../shared/checkCodeStatus";
import apis from "../../shared/apis";

// action type
const GET_POST = "GET_POST";
const GET_DETAIL_POST = "GET_DETAIL_POST";

// action creator
const getPosts = createAction(GET_POST, (articles) => ({ articles }));
const getDetailPost = createAction(GET_DETAIL_POST, (articleOne) => ({
  articleOne,
}));

// initial state
const initialState = {
  list: [],

  articles: {
    article_id: "artice_id",
    username: "username",
    type: "type",
    nickname: "nickname",
    title: "title",
    createDate: "createDate",
  },

  articleOne: {
    article_id: "artice_id",
    type: "type",
    nickname: "nickname",
    title: "지금 관계.. 썸이 맞을까요?",
    content: "좋아하는 후배가 있습니다.",
    createDate: "2021-12-10 10:00",
    greenCount: 10,
    redCount: 5,
  },
};

// middleware
const getPostDB = () => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("getPostDB try!!");

      const response = await apis.getPost();
      console.log(response);

      const articles = response.data;
      console.log(articles);

      dispatch(getPosts(articles));
    } catch (error) {
      console.log(error);

      //checkCodeStatus(error.response.status, 403);
    }
  };
};

const addPostDB = (post_info, user_name) => {
  return async (dispatch, getState, { history }) => {
    const username = getState().user.username;
    console.log(username);

    console.log(post_info);
    const article_info = {
      type: post_info.type,
      title: post_info.title,
      content: post_info.content,
    };

    try {
      console.log("addPostDB try!!");

      const response = await apis.addPost(article_info);
      console.log(response);
      console.log(user_name);
       history.push(`/main/${user_name}`);
    } catch (error) {
      console.log(error);
    }
  };
};

const updatePostDB = (article_id, article_infos) => {
  return async (dispatch, getState, { history }) => {
    const username = getState().user.username;
    try {
      console.log("updatePostDB try!!");

      const response = await apis.updatePost(article_id, article_infos);
      console.log(response);

      history.push(`/main/${username}`);
    } catch (error) {
      console.log(error);
    }
  };
};

const deletePostDB = (article_id) => {
  return async (dispatch, getState, { history }) => {
    const username = getState().user.username;
    try {
      console.log("deletePostDB try!!");

      const response = await apis.deletePost(article_id);
      console.log(response);

      history.push(`/main/${username}`);
    } catch (error) {
      console.log(error);
    }
  };
};

const getPostDetailDB = (article_id) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log(article_id);
      console.log("getPostDetailDB try!!");

      const response = await apis.getPostDetail(article_id);
      console.log(response);

      const data = response.data;
      console.log(data);

      let articleOne = {
        artice_id: data.artice_id,
        nickname: data.nickname,
        type: data.type,
        title: data.title,
        content: data.content,
        createDate: data.createDate,
        greenCount: data.greenCount,
        redCount: data.redCount,
      };
     
      dispatch(getDetailPost(articleOne));
    } catch (error) {
      console.log(error);

      //checkCodeStatus(error.response.status, 403);
    }
  };
};

// reducer
export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        //draft.list = action.payload.articles; -> [[{}]]
        draft.list.push(...action.payload.articles); //[{}]
      }),

    [GET_DETAIL_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.articleOne = {
          ...action.payload.articleOne,
        };
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
