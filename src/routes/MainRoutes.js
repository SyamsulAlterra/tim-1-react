// import module
import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header";
import Body from "../pages/Body";

//import store
import { Provider } from "unistore/react";
import { store } from "../store";
import Statistics from "../components/Statistics";

// import pages and component

function MainRoutes() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Body} />

            <Route exact path="/Statistic" component={Statistics} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default MainRoutes;
