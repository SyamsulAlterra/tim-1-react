import React from "react";
import { connect } from "unistore/react";
import { actions } from "../store";

class Button extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.value, this.props.homeTeam);
  };

  render() {
    return (
      <button className="btn btn-primary" onClick={this.handleClick}>
        See More
      </button>
    );
  }
}

export default connect(
  "",
  actions
)(Button);
