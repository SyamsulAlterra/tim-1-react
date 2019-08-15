import React from "react";
import { connect } from "unistore/react";
import { actions } from "../store";

class Tes extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.matchDate}</p>
        <p>{this.props.apikeyBetting}</p>
      </div>
    );
  }
}

export default connect(
  "matchDate, apikeyBetting",
  actions
)(Tes);
