import React from "react";
import Header from "../components/Header";
import Category from "../components/Category";
import axios from "axios";
import { actions } from "../store";
import { connect } from "unistore/react";
import News from "../components/Listnews";
import "../assets/styles/styles.css";
// import { get } from "http";

class Body extends React.Component {
  constructor(props) {
    super(props);
  }
  handleDefault = () => {
    if (this.props.match.params.endpoint === "home") {
      this.props.setDefaultSearch();
    }
  };

  componentWillMount = () => {
    this.props.getData();
  };

  render() {
    return (
      <div className="module" id="module">
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col-md-5">
              <News />
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

export default connect(
  "news",
  actions
)(Body);
