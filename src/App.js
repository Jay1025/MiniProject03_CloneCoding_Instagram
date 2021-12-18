import "./App.css";
import GlobalStyles from "./components/shared/globalStyles";
import React from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Main from "./components/pages/Main";
import Signup from "./components/pages/Signup";
import Mypage from "./components/pages/Mypage";
import Explore from "./components/pages/Explore";
import Direct from "./components/pages/Direct";

import { userCreators as userActions } from "./redux/user";
import { loadPostDB } from "./redux/post";

function App() {
  const dispatch = useDispatch();
  const is_local = localStorage.getItem("username");

  React.useEffect(() => {
    if (is_local) {
      dispatch(userActions.loginCheckDB());
      dispatch(loadPostDB()).then(console.log("포스트로딩완료"));
    }
  }, [dispatch, is_local]);

  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path="/direct" component={Direct} />
        <Route path="/explore" component={Explore} />
        <Route path="/signup" component={Signup} />
        <Route path="/mypage" component={Mypage} />
        <Route path="/" exact component={Main} />
      </Switch>
    </>
  );
}

export default App;
