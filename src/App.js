import logo from "./logo.svg";
import "./App.css";
import GlobalStyles from "./components/shared/globalStyles";
import Grid from "./components/atoms/Grid";
import { Switch, Route } from "react-router-dom";

import Main from "./components/pages/Main";
import Navigation from "./components/organisms/Navigation";
import Login from "./components/pages/Login";

function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
      </Switch>
      {/* <Navigation /> */}
    </>
  );
}

export default App;
