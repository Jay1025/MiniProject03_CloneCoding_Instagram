import { handleActions, createAction } from "redux-actions";
import { apis } from "../components/shared/apis";
import produce from "immer";

// initialState
const initialState = {
  list: [],
};

// action
const LOAD = "post/LOAD";
const POST = "post/POST";

// action creater
export const loadPost = createAction(LOAD, (postList) => ({ postList }));
export const pushPost = createAction(POST, (postData) => ({ postData }));

// thunk

// export const loadPostDB = () => {
//   async (dispatch, getState, {history}) => {
//     const { data } = await apis.getPost
//   }
// }

export const addPostDB = (data) => {
  return function (dispatch, getState, { history }) {
    console.log(data);
    dispatch(pushPost(data));
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
    [POST]: (state, action) =>
      produce(state, (draft) => {
        console.log(draft);
        draft.list.unshift(action.payload.postData);
      }),
  },
  initialState
);
