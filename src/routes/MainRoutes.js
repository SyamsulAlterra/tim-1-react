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
import Betting from "../pages/Betting.js";
import Login from "../pages/Login";
import MatchDetail from "../pages/MatchDetail";
//temp
import BetCard from "../components/BetCard";

import Tes from "../components/Tes";

import Profil from "../pages/Profile";

function MainRoutes() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <Switch>
            <Route exact path="/betting" component={Betting} />
            {/* <Route exact path="/" component={BetCard} /> */}

            <Route exact path="/" component={Body} />

            <Route exact path="/Statistic" component={Statistics} />

            <Route exact path="/login" component={Login} />
            <Route exact path="/matchdetail" component={MatchDetail} />

            <Route exact path="/tes" component={Tes} />

            <Route exact path="/profile" component={Profil} />

          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default MainRoutes;
