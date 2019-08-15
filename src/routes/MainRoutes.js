// import module
import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

//import store
import { Provider } from "unistore/react";
import { store } from "../store";
import Statistic from "../components/Statistic";

// import pages and component

function MainRoutes() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <Switch>
            <Route exact path="/" component={Statistic} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default MainRoutes;
