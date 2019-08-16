import React from "react";
import { Link } from "react-router-dom";
import Ball from "../assets/img/Ball.png";

export default function Default() {
  return (
    <div className="container">
      <div className="row justify-content-center pt-1 Ball">
        <div className="col-md-8 text-center">
          <div className="animated infinite bounce delay-2s slower">
            {" "}
            <img
              src={Ball}
              alt=""
              width="200px"
              className="animated infinite bounce rotateIn delay-2s"
            />
          </div>

          <hr className="style7" />
          <br />
          <Link to="login" class="btn btn-info" role="button">
            Press me!
          </Link>
        </div>
      </div>
    </div>
  );
}
