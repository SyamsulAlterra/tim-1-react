import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/styles.css";
// import Swal from "sweetalert2";
import { actions } from "../store";
import { connect } from "unistore/react";

// const handleSearch = e => {
//   Swal.fire("Good job!", "We will Show your wish!", "success");
// };

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  // getSearch = event => {
  //   console.log("ini", event.target.value);
  //   console.log("props", this.props.search);
  //   this.props.setSearch(event.target.value);
  // };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    this.props.setSearch(this.state.value);
    event.preventDefault();
  };

  render() {
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
                  <form class="form-inline" onSubmit={this.handleSubmit}>
                    <input
                      class="form-control mr-sm-2"
                      type="search"
                      placeholder="Find your wish"
                      aria-label="Search"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                    <button
                      class="btn btn-outline-info my-2 my-sm-0"
                      type="submit"
                      // onChange={this.getSearch}
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
                        <Link to="/home" class="nav-link">
                          Home <span class="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/profile" class="nav-link">
                          Profile
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/"
                          className="nav-link"
                          onClick={() => this.props.handleSignOut()}
                        >
                          Keluar <span className="sr-only">(current)</span>
                        </Link>
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
}

export default connect(
  "news, search",
  actions
)(Header);
