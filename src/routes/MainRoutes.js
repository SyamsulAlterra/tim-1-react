// import module
import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header";
import Body from "../pages/Body";
import Swal from "sweetalert2";
import { actions } from "../store";
import { connect } from "unistore/react";

//import store
import { Provider } from "unistore/react";
import { store } from "../store";

// import pages and component

class MainRoutes extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSearch = () => {
    Swal.fire({
      position: "top-end",
      type: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  };

  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <Header
              handleSearch={this.handleSearch}
              handleDefault={this.props.getSearch}
            />
            <Switch>
              <Route exact path="/:endpoint" component={Body} />
              <Route exact path="/" component={Body} />
            </Switch>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default connect(
  "news, search",
  actions
)(MainRoutes);
