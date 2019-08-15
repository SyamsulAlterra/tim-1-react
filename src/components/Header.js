import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/styles.css";

export default function Header(props) {
  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="row bg-light shadow">
            <div className="col-md-3">
              <nav className="navbar navbar-light bg-light">
                <Link to="/" class="navbar-brand" href="#">
                  <img
                    src="https://abeon-hosting.com/images/ball-football-png-4.jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt=""
                  />
                  Sport
                </Link>
              </nav>
            </div>
            <div className="col-md-3">
              <nav class="navbar navbar-light bg-light">
                <form class="form-inline">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Find your wish"
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-outline-info my-2 my-sm-0"
                    type="submit"
                    // onSubmit = {props.handleChange}
                  >
                    <i class="icon-search" />
                  </button>
                </form>
              </nav>
            </div>
            <div className="col-md-3" />
            <div className="col-md-3">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">
                        Home <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Profile
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Sign Out
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

// animated infinite rotateIn delay-2s
