import React from "react";
import { actions } from "../store";
import { connect } from "unistore/react";

import juve from "../assets/img/juve.png";
import arsenal from "../assets/img/arsenal.jpg";

function BetCard(props) {
  return (
    <div className="col-3 text-center mb-4">
      <div className="card">
        <div className="card-header">
          <h3>{props.data.site_nice}</h3>
        </div>
        <div className="card-body">
          <div className="row border-bottom">
            <div className="col-4 text-center">
              <img width="100%" src={juve} />
            </div>
            <div className="col-5">
              <h3>{props.data.odds.h2h[0]}</h3>
            </div>
          </div>
          <br />
          <div className="row  border-bottom">
            <div className="col-4 text-center">
              <h2>X</h2>
            </div>
            <div className="col-5">
              <h3>{props.data.odds.h2h[1]}</h3>
            </div>
          </div>
          <br />
          <div className="row  border-bottom">
            <div className="col-4 text-center">
              <img width="100%" src={arsenal} />
            </div>
            <div className="col-5">
              <h3>{props.data.odds.h2h[2]}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-4 text-center">
              <h2>return</h2>
            </div>
            <div className="col-5">
              <h3>{props.formBet * props.data.odds.h2h[props.betOption]}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(
  "formBet, betOption",
  actions
)(BetCard);
