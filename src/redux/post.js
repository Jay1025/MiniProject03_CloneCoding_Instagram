import { handleActions, createAction } from "redux-actions";
import { apisMultipart, apis } from "../components/shared/apis";

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

// export const loadPostDB = () => {
//   async (dispatch, getState, {history}) => {
//     const { data } = await apis.getPost
//   }
// }

export const addPostDB = (formdata, formdata2) => {
  return function (dispatch, getState, { history }) {
    console.log(formdata);
    apisMultipart
      .addPost(formdata)
      .then((res) => {
        history.replace("/");
      })
      .catch((e) => alert(e));

    // dispatch(addPost(data));
  };
};

export const loadPostDB =
  () =>
  async (dispatch, getState, { history }) => {
    const data = await apis.getPost();
    console.log(data.data.post);
    dispatch(loadPost(data.data.post));
  };

// reducer
export default handleActions(
  {
    [LOAD]: (state, action) => {
      return {
        ...state,
        list: action.payload.postList,
      };
    },
    // [POST]
  },
  initialState
);
