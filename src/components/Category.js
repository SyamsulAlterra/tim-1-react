import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/styles.css";
import Premier from "../assets/img/PremierLeague.png";

export default function Category() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row bg-transparent justify-content-center">
          <div className="col-md-4 ">
            <nav class="navbar text-right navbar-light">
              <Link to="premier_league" class="navbar-brand">
                <img
                  src={Premier}
                  width="30"
                  height="30"
                  // class="align-top"
                  alt=""
                />
                <p class="font-italic">Premier League</p>
              </Link>
            </nav>
          </div>
          <div className="col-md-4 text-center">
            <nav class="navbar navbar-light">
              <Link to="premier_league" class="navbar-brand">
                <img
                  src={Premier}
                  width="30"
                  height="30"
                  class="d-inline-block align-top"
                  alt=""
                />
                <p class="font-italic">Premier League</p>
              </Link>
            </nav>
          </div>
          <div className="col-md-4 text-center">
            <nav class="navbar navbar-light">
              <Link to="premier_league" class="navbar-brand">
                <img
                  src={Premier}
                  width="30"
                  height="30"
                  class="d-inline-block align-top"
                  alt=""
                />
                <p class="font-italic">Premier League</p>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

// https://banner2.kisspng.com/20180204/uve/kisspng-2016u201317-premier-league-1999u20132000-fa-premie-premier-league-png-file-5a7741335e4066.3495622315177649153861.jpg
