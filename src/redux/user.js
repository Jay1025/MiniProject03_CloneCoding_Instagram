import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { deleteCookie, setCookie } from "../components/shared/cookie";
import { apis } from "../components/shared/apis";

// ---- action type----
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

// ---- action creator ----
const setLogin = createAction(LOG_IN, (user) => ({ user }));
const logout = createAction(LOG_OUT, (user) => ({ user }));

// ---- initialState ----
const initialState = {
  email: "hello123@gmail.com",
  fullname: "Hanghae Kim",
  username: "Hanghae99",
  is_login: false, //로그인 확인
  response: null, //닉네임 중복 확인
};

//---- 회원가입 DB ----
export const signUpDB =
  (id, fullname, username, pwd) =>
  async ({ history }) => {
    try {
      await apis.signup(id, fullname, username, pwd);
      window.alert("회원가입이 완료되었습니다. 로그인 해주세요");
      history.push("/login");
    } catch (err) {
      console.log(`오류 발생!${err}`);
    }
  };

//---- 로그인 DB ----
export const loginDB =
  (id, pwd) =>
  async (dispatch, getState, { history }) => {
    try {
      const response = await apis.login(id, pwd);
      console.log(response);
      let username = response.data.username;
      console.log(username);
      setCookie("token", response.data.token, 7);
      console.log(setCookie("token", response.data.token, 7));
      localStorage.setItem("username", response.data[0].username);
      dispatch(setLogin(username));
      window.alert(`${username}님 환영합니다`);

      history.replace("/");
    } catch (err) {
      window.alert("없는 회원정보 입니다! 회원가입을 해주세요!");
      console.log(`오류 발생!${err}`);
    }
  };

// ---- 로그인 체크 DB ----
const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    const user_name = localStorage.getItem("username");
    const tokenCheck = document.cookie;
    if (tokenCheck) {
      dispatch(setLogin({ username: user_name }));
    } else {
      dispatch(logout());
    }
  };
};

// ---- 로그아웃 DB ----
const logoutDB = () => {
  return function (dispatch, getState, { history }) {
    dispatch(logout());
    history.replace("/");
    localStorage.removeItem("username");
  };
};

// ---- reducer ----
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.username = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("token");
        draft.email = null;
        draft.is_login = false;
      }),
  },
  initialState
);

const userCreators = {
  loginDB,
  signUpDB,
  loginCheckDB,
  logoutDB,
};

export { userCreators };
