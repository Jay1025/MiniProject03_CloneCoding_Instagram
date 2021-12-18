import { handleActions, createAction } from "redux-actions";
import { apis } from "../components/shared/apis";
import produce from "immer";
import alert from "sweetalert";

// initialState
const initialState = {
  list: [],
  likedPostList: [],
};

// action
const LOAD = "post/LOAD";
const POST = "post/POST";
const DELETE = "post/DELETE";

// action creater
export const loadPost = createAction(LOAD, (postList, liked) => ({
  postList,
  liked,
}));
export const pushPost = createAction(POST, (postData) => ({ postData }));
export const deletePost = createAction(DELETE, (postId) => ({ postId }));
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
    console.log(data.data.posts);
    dispatch(loadPost(data.data.posts, data.data.likedPostList));
  };

export const deletePostDB =
  (postId) =>
  (dispatch, getState, { history }) => {
    apis.deletePost(postId).then((res) => {
      alert("삭제 완료!", "", "success");
      dispatch(deletePost(postId));
    });
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
    [DELETE]: (state, action) => {
      return {
        ...state,
        list: state.list.filter((list) => list.id !== action.payload.postId),
      };
    },
  },
  initialState
);
