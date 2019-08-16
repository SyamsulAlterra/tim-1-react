import React from "react";
import Header from "../components/Header";
import Category from "../components/Category";
import axios from "axios";
import { actions } from "../store";
import { connect } from "unistore/react";
import News from "../components/Listnews";
import NewsCarousel from "../components/NewsCarousel";
import Betting from "./Betting";
import { Redirect } from "react-router-dom";

import "../assets/styles/styles.css";
// import { get } from "http";

class Body extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  handleDefault = () => {
    if (this.props.match.params.endpoint === "home") {
      this.props.setDefaultSearch("");
    }
  };

  componentWillMount = () => {
    this.props.getData();
  };

  handleSignOut = () => {
    this.props.setLogin(false);
    console.log("ini login", this.props.isLogin);
    this.props.history.replace("/");
  };

  render() {
    console.log("ini search", this.props.search);
    console.log("ini news", this.props.news);

    if (this.props.isLogin === false) {
      return <Redirect to={{ pathname: "/masuk" }} />;
    } else {
      if (this.props.search !== "") {
        return (
          <div className="module" id="module">
            <Header handleSignOut={this.handleSignOut} />
            <div className="container-fluid">
              <div className="row mt-4">
                <div className="col-md-6">
                  <News />
                  {/* <NewsCarousel /> */}
                </div>
                <div className="col-md-6">
                  <Betting />
                </div>
                <div>
                  <canvas id="myChart" width="400" height="400" />
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="module" id="module">
            <Header handleSignout={this.handleSignOut} />
            <div className="container-fluid">
              <div className="row mt-4">
                <div className="col-md-6">
                  {/* <News /> */}
                  <NewsCarousel />
                </div>
                <div className="col-md-6">
                  <Betting />
                </div>
                <div>
                  <canvas id="myChart" width="400" height="400" />
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  }
}

export default connect(
  "news, search",
  actions
)(Body);
