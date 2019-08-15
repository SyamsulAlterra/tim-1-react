// import module
import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

//import store
import { Provider } from "unistore/react";
import { store } from "../store";

// import pages and component
import Betting from "../pages/Betting.js";

//temp
import BetCard from "../components/BetCard";

function MainRoutes() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <Switch>
            <Route exact path="/" component={Betting} />
            {/* <Route exact path="/" component={BetCard} /> */}
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default MainRoutes;
