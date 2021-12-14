import "./App.css";
import GlobalStyles from "./components/shared/globalStyles";
import Grid from "./components/atoms/Grid";

import { Switch, Route } from "react-router-dom";

import Main from "./components/pages/Main";
import Navigation from "./components/organisms/Navigation";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Modal from "react-modal";

function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
      {/* <Navigation /> */}
    </>
  );
}

Modal.setAppElement("#root");
export default App;
