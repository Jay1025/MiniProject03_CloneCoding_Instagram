import { handleActions, createAction } from "redux-actions";
import { apis } from "../components/shared/apis";
import produce from "immer";

// initialState
const initialState = {
  list: [],
  likedPostList: [],
};

// action
const LOAD = "post/LOAD";
const POST = "post/POST";

// action creater
export const loadPost = createAction(LOAD, (postList, liked) => ({
  postList,
  liked,
}));
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
    console.log(data.data);
    dispatch(loadPost(data.data.post, data.data.likedPostList));
  };

// reducer
export default handleActions(
  {
    [LOAD]: (state, action) => {
      return {
        ...state,
        list: action.payload.postList,
        likedPostList: action.payload.liked,
      };
    },
    [POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.postData);
      }),
  },
  initialState
);
