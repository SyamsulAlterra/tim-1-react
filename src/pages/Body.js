import React from "react";
import Header from "../components/Header";
import Category from "../components/Category";
import axios from "axios";
import { actions } from "../store";
import { connect } from "unistore/react";
import News from "../components/Listnews";
import NewsCarousel from "../components/NewsCarousel";
import Betting from "./Betting";

import "../assets/styles/styles.css";
// import { get } from "http";

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    this.props.getData();
  };

  render() {
    return (
      <div className="module" id="module">
        <Header />
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col-md-6">
              {/* <News /> */}
              <NewsCarousel />
            </div>
            <div className="col-md-6">
              <Betting />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(Body);
