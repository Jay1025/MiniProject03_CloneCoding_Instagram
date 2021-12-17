import { apis } from "../components/shared/apis";
import { createAction, handleActions } from "redux-actions";
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
        dispatch(addComment(postId, content)).then(
          alert("댓글 등록!", "success")
        );
      })
      .catch((e) => console.log(e));
  };

export const loadCommentDB =
  () =>
  (dispatch, getState, { history }) => {
    apis.getComment();

    dispatch(loadComment());
  };

// reducer
export default handleActions(
  {
    [COMMENT]: (state, action) => {
      return {
        ...state,
        list: action.payload.comment,
      };
    },
    [LOAD]: (state, action) => {
      return {
        ...state,
        list: action.payload.comment,
      };
    },
  },
  initialState
);
