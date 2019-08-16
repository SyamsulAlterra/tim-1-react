import React from "react";
import { Link } from "react-router-dom";
import Ball from "../assets/img/Ball.png";
import "../assets/styles/styles.css";
import { actions } from "../store";
import { connect } from "unistore/react";
import axios from "axios";
import { withRouter } from "react-router-dom";
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { Email: "", password: "" };

  changeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  postLogin = () => {
    const { username, password } = this.state;
    const mydata = {
      username: username,
      password: password
    };

    axios
      .post("https://point.free.beeceptor.com/sign", mydata)
      .then(response => {
        console.log(response.data);
        console.log(this.props.is_login);
        if (response.data.hasOwnProperty("status")) {
          this.props.setLogin(true);
          this.props.setEmail(this.state.Email);
          this.props.setName(this.state.password);
          this.props.history.push("/news");
        }
      })
      .catch(error => {
        console.log("ini Error", error);
      });
  };
  render() {
    return (
      <div class="container justify-content-center">
        <div class="row text-center">
          <div class="col-md-12">
            <img
              className="border edit"
              src="https://i.pinimg.com/originals/d3/83/95/d38395508b4f2eb38cfd2005a6d2b84d.jpg"
              alt=""
            />
            <div class="login-popup-wrap new_login_popup">
              <div class="login-popup-heading text-center">
                <h4>
                  <i class="fa fa-lock" aria-hidden="true" /> Login{" "}
                </h4>
              </div>

              <form id="loginMember" role="form" action="" method="post">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="user_id"
                    placeholder="e-mail / Mobile no"
                    name="user_id"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <Link to="/body">
                  {" "}
                  <button
                    type="submit"
                    class="btn btn-default login-popup-btn"
                    name="submit"
                    value="1"
                  >
                    Login
                  </button>
                </Link>
              </form>
              <div class="form-group text-center">
                <a
                  class="pwd-forget"
                  href="javascript:void(0)"
                  id="open_forgotPassword"
                >
                  Forget Password
                </a>
              </div>
              <div class="text-center">
                Not registered yet?
                <a href="http://192.168.50.34/abcc/membership-application">
                  click here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "news, search",
  actions
)(withRouter(LoginForm));
