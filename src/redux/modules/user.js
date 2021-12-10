import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setToken } from "../../shared/token";
import apis from "../../shared/apis";

// actions
const SET_USER = "SET_USER";

// action creators
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

// middleware actions
const loginDB = (username, password) => {
  return function (dispatch, getState, { history }) {
    const data = {
      username: username,
      password: password,
    };
    apis
      .login(data)
      .then((response) => {
        window.alert("로그인 성공 🔥");
        history.replace("/main");
      })
      .catch((err) => {
        // console.log(err); // 참조
        // console.dir(err.response.data.errorMessage);
      });
  };
};

const signupDB = (username, nickname, password, password2) => {
  return function (dispatch, getState, { history }) {
    const data = {
      username: username,
      nickname: nickname,
      password: password,
      password2: password2,
    };
    apis
      .signup(data)
      .then((response) => {
        window.alert("회원가입 성공 🔥");
        history.replace("/main");
      })
      .catch((err) => {
        // console.log(err);
        // console.dir(err.response.data.errorMessage);
      });
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setToken(JSON.stringify(action.payload.token));
        sessionStorage.setItem("user", JSON.stringify(action.payload.user));
        draft.is_login = true;
        draft.user = action.payload.user;
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  setUser,
  loginDB,
  signupDB,
};

export { actionCreators };
