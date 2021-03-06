import React from "react";
import { actions } from "../store";
import { connect } from "unistore/react";

class BetCard extends React.Component {
  render() {
    console.log(this.props.tim_1);
    console.log(this.props.tim_2);

    return (
      <div className="col-3 text-center mb-4">
        <div className="card">
          <div className="card-header">
            <h3>{this.props.data.site_nice}</h3>
          </div>
          <div className="card-body">
            <div className="row border-bottom">
              <div className="col-4 text-center">
                <img width="100%" src={this.props.tim_1} />
              </div>
              <div className="col-5">
                <h3>{this.props.data.odds.h2h[0]}</h3>
              </div>
            </div>
            <br />
            <div className="row  border-bottom">
              <div className="col-4 text-center">
                <h2>X</h2>
              </div>
              <div className="col-5">
                <h3>{this.props.data.odds.h2h[1]}</h3>
              </div>
            </div>
          </div>
          <br />
          <div className="row  border-bottom">
            <div className="col-4 text-center">
              <img width="100%" src={this.props.tim_2} />
            </div>
            <div className="col-5">
              <h3>{this.props.data.odds.h2h[2]}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-4 text-center">
              <p>return</p>
            </div>
            <div className="col-5">
              <p>
                {Math.floor(
                  this.props.formBet *
                    this.props.data.odds.h2h[this.props.betOption]
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "formBet, betOption, tim_1, tim_2",
  actions
)(BetCard);
