import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { deleteCookie, setCookie } from "../components/shared/cookie";
import { apis } from "../components/shared/apis";
import alert from "sweetalert";

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
  async (dispatch, getState, { history }) => {
    await apis.signup(id, fullname, username, pwd);
    alert("회원가입이 완료되었습니다. 로그인 해주세요.");
    //이상하게 이동이 안됨...
    history.push("/");
    //  catch (err) {
    // console.log(`오류 발생!${err}`);
  };

//---- 로그인 DB ----
export const loginDB =
  (id, pwd) =>
  async (dispatch, getState, { history }) => {
    try {
      const response = await apis.login(id, pwd);
      //서버로부터 받아온 데이터
      let username = response.data.username;
      let fullname = response.data.fullname;
      let userId = response.data.userId;
      //쿠키, 로컬 스토리지에 저장
      setCookie("token", response.data.token, 7);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("fullname", response.data.fullname);
      localStorage.setItem("userId", response.data.userId);
      //리듀서에 저장
      dispatch(setLogin(username, fullname, userId));
      alert(`${username}님 환영합니다`);

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
    deleteCookie("token");
    localStorage.removeItem("username");
    localStorage.removeItem("fullname");
    localStorage.removeItem("userId");
    dispatch(logout());
    history.replace("/");
  };
};

// ---- reducer ----
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.username = action.payload.user;
        draft.fullname = action.payload.fullname;
        draft.userId = action.payload.userId;
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
