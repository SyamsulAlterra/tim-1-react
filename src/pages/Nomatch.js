import React from "react";
import Emoji from "../assets/img/Emoji.png";

export default function NoMatch({ location }) {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <img
              className="emoji animated infinite bounce delay-2s"
              src={Emoji}
              alt=""
            />
            <h3>
              No match for <code>{location.pathname}</code>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
