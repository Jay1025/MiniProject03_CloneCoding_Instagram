import { handleActions, createAction } from "redux-actions";
import { apisMultipart } from "../components/shared/apis";

// initialState
const initialState = {
  list: [],
};

// action
const LOAD = "post/LOAD";
const POST = "post/POST";

// action creater
export const loadPost = createAction(LOAD, (postList) => ({ postList }));
export const addPost = createAction(POST, (postData) => ({ postData }));

// thunk
export const addPostDB = (formdata) => {
  return function (dispatch, getState, { history }) {
    apisMultipart
      .addPost(formdata)
      .then((res) => {
        history.replace("/");
      })
      .catch((e) => alert(e));

    dispatch();
  };
};
// reducer
export default handleActions({}, initialState);
