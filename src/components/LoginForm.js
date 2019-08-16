import React from "react";
import { Link } from "react-router-dom";
import Ball from "../assets/img/Ball.png";
import "../assets/styles/styles.css";
import { actions } from "../store";
import { connect } from "unistore/react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { Email: "", password: "" };

  changeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  postLogin = () => {
    Swal.fire("Good job!", "You Have Sign In!", "success");
    const { username, password } = this.state;
    const mydata = {
      username: username,
      password: password
    };

    axios
      .post("https://project.free.beeceptor.com/sign", mydata)
      .then(response => {
        console.log(response.data);
        console.log(this.props.is_login);
        if (response.data.hasOwnProperty("status")) {
          this.props.setLogin(true);
          this.props.setEmail(this.state.Email);
          this.props.setName(this.state.password);
          this.props.history.push("/body");
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
            <div className="col-md-4">
              <form onSubmit={e => e.preventDefault()}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    required
                    type="email"
                    class="form-control"
                    name="Email"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={e => this.changeInput(e)}
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={e => this.changeInput(e)}
                  />
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <Link to="/body">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={() => this.postLogin()}
                  >
                    Submit
                  </button>
                </Link>
              </form>
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
