import { createAction, handleActions } from "redux-actions";
import produce from "immer";

//actions
const LOG_IN = "user/LOG_IN";
const LOG_OUT = "user/LOG_OUT";

//action creators
const logIn = (user) => ({ type: LOG_IN, user });
const logOut = (user) => ({ type: LOG_OUT, user });

const initialState = {
  nickname: null,
  isLogin: false,
};

//middleware

//회원가입
const signUpUser = (username, nickname, password, passwordCheck) => {
  return function (dispatch, getState, { navigate }) {
    apis
      .signup(username, nickname, password, passwordCheck)
      .then((res) => {
        console.log(res);
        if (res.data === "login") {
          alert("회원 가입이 완료되었습니다!");
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//아이디 중복 체크
//닉네임 중복 체크

//로그인
const logInUser = (username, password) => {
  return function (dispatch, getState, { navigate }) {
    apis
      .login(username, password)
      .then((res) => {
        console.log(res);
        if (res.headers.authorization) {
          localStorage.setItem("token", res.headers.authorization);
        }
        dispatch(logIn({ username: username }));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//로그아웃
const logOutUser = () => {
  return function (dispatch, getState, { navigate }) {
    apis.logout(res.headers.authorization).then((res) => {
      console.log(res);
      localStorage.removeItem("token", res.headers.authorization);
      dispatch(logOut());
    });
  };
};

//reducer
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        console.log(action);
        draft.user = action.payload.user;
        draft.isLogin = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.isLogin = false;
      }),
  },
  initialState
);

const actionCreators = {
  logIn,
  logOut,
  logInUser,
  signUpUser,
  logOutUser,
};

export { actionCreators };
