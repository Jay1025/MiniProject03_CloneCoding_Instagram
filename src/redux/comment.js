import { apis } from "../components/shared/apis";
import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import alert from "sweetalert";
import { loadPostDB } from "./post";

// initialState
const initialState = {
  list: [],
};

// action
const LOAD = "comment/LOAD";
const COMMENT = "comment/COMMENT";
const DELETE = "comment/DELETE";

// action create
const addComment = createAction(COMMENT, (comment, store) => ({
  comment,
  store,
}));
const loadComment = createAction(LOAD, (comment) => ({ comment }));
const deleteComment = createAction(DELETE, (commentId) => ({ commentId }));

// thunk middleWare
export const addCommentDB =
  (postId, content) =>
  (dispatch, getState, { history }) => {
    const state = getState().post.list;
    apis
      .addComment(postId, content)
      .then((res) => {
        dispatch(loadPostDB()).then(console.log("코멘트추가, 로딩완료"));
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

export const deleteCommentDB =
  (postId, commentId) =>
  (dispatch, getState, { history }) => {
    console.log(postId, commentId);
    apis.deleteComment(postId, commentId).then((res) => {
      console.log(res);
      alert("댓글삭제");
      dispatch(loadCommentDB(postId));
      //   console.log(getState());
      deleteComment(commentId);
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
        draft.list.push(action.payload.comment);
        draft.list.push((action.payload.store.numOfComments += 1));
        console.log(draft.list);
      }),
    [DELETE]: (state, action) => {
      console.log(111);
      console.log(state, action);
      return {
        ...state,
        list: state.list.filter((list) => list.id !== action.payload.commentId),
      };
    },
  },
  initialState
);
