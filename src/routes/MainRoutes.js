// import module
import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header";
import Body from "../pages/Body";
import Swal from "sweetalert2";
import Default from "../pages/Default";

//import store
import { Provider } from "unistore/react";
import { store } from "../store";
import Statistics from "../components/Statistics";

// import pages and component
import Betting from "../pages/Betting.js";

//temp
import BetCard from "../components/BetCard";
import LoginForm from "../components/LoginForm";

import Tes from "../components/Tes";

function MainRoutes() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <Switch>
            <Route exact path="/betting" component={Betting} />
            {/* <Route exact path="/" component={BetCard} /> */}

            <Route exact path="/" component={Default} />
            <Route exact path="/signout" component={Default} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/body" component={Body} />

            <Route exact path="/Statistic" component={Statistics} />

            <Route exact path="/tes" component={Tes} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default MainRoutes;
