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
const addComment = createAction(COMMENT, (comment) => ({ comment }));
const loadComment = createAction(LOAD, (comment) => ({ comment }));

// thunk middleWare
export const addCommentDB =
  (postId, content) =>
  (dispatch, getState, { history }) => {
    apis
      .addComment(postId, content)
      .then((res) => {
        dispatch(addComment(postId, content));
        alert("댓글 등록!", "댓글 보기를 눌러보세요!", "success");
      })
      .catch((e) => console.log(e));
  };

export const loadCommentDB =
  (postId) =>
  (dispatch, getState, { history }) => {
    console.log("댓글로딩중");
    apis.getComment(postId).then((res) => {
      console.log(res.data);
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
        console.log(draft);
        draft.list.push(action.payload.comment);
      }),
  },
  initialState
);
