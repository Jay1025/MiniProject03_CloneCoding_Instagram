import { apis } from "../components/shared/apis";
import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import alert from "sweetalert";

// initialState
const initialState = {
  list: [],
};

// action
const LOAD = "comment/LOAD";
const COMMENT = "comment/COMMENT";

// action create
const addComment = createAction(COMMENT, (comment, store) => ({
  comment,
  store,
}));
const loadComment = createAction(LOAD, (comment) => ({ comment }));

// thunk middleWare
export const addCommentDB =
  (postId, content) =>
  (dispatch, getState, { history }) => {
    const state = getState().post.list;
    apis
      .addComment(postId, content)
      .then((res) => {
        let index;
        for (let i = 0; i < state.length; i++) {
          if (state[i].id === postId) {
            index = i;
          }
        }
        dispatch(addComment(res.data, state[index]));
        alert("댓글 등록!", " ", "success");
      })
      .catch((e) => console.log(e));
  };

export const loadCommentDB =
  (postId) =>
  (dispatch, getState, { history }) => {
    console.log("댓글로딩중");
    apis.getComment(postId).then((res) => {
      console.log("댓글로딩완료");
      dispatch(loadComment(res.data));
    });
  };

// reducer
export default handleActions(
  {
    [LOAD]: (state, action) => {
      return {
        ...state,
        list: action.payload.comment,
      };
    },
    [COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.store);
        console.log(draft.list);
        draft.list.push((action.payload.store.numOfComments += 1));
        draft.list.push(action.payload.comment);
      }),
  },
  initialState
);
