import React from "react";

import juve from "../assets/img/juve.png";
import arsenal from "../assets/img/arsenal.jpg";

function BetCard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3 text-center">
          <div className="card">
            <div className="card-header">
              <h3>Unibet</h3>
            </div>
            <div className="card-body">
              <div className="row border-bottom">
                <div className="col-4 text-center">
                  <img width="100%" src={juve} />
                </div>
                <div className="col-5">
                  <h2>2.31</h2>
                </div>
              </div>
              <br />
              <div className="row  border-bottom">
                <div className="col-4 text-center">
                  <h2>X</h2>
                </div>
                <div className="col-5">
                  <h2>2.31</h2>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-4 text-center">
                  <img width="100%" src={arsenal} />
                </div>
                <div className="col-5">
                  <h2>2.31</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BetCard;
