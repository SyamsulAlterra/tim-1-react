import React from "react";
import { connect } from "unistore/react";
import { actions } from "../store";

class Tes extends React.Component {
  render() {
    let a = this.props.passedDate();
    console.log(a);
    console.log(this.props.syamsulDate);
    return (
      <div>
        <p>{this.props.matchDate}</p>
        <p>{this.props.apikeyBetting}</p>
        <p>{this.props.syamsulDate}</p>
      </div>
    );
  }
}

export default connect(
  "matchDate, apikeyBetting, syamsulDate",
  actions
)(Tes);
