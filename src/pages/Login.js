// import React from "react";
// import axios from "axios";
// import { Redirect } from "react-router-dom";
// import { withRouter } from "react-router";
// import LoginForm from "../components/LoginForm";
// import { Provider, connect } from "unistore/react";
// import { actions } from "../store";

// //import image
// import logo from "../assets/img/logo.svg";

// const hostLogin = "https://api-todofancy.herokuapp.com/api/auth";

// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       login: { username: "", password: "" }
//     };
//     this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
//     this.handleLoginUsernameChange = this.handleLoginUsernameChange.bind(this);
//     this.handleLoginPasswordChange = this.handleLoginPasswordChange.bind(this);
//   }

//   componentDidMount() {
//     this.renderRedirect();
//   }

//   handleLoginUsernameChange(event) {
//     this.setState({ login: { username: event.target.value } });
//   }

//   handleLoginPasswordChange(event) {
//     this.setState({ login: { password: event.target.value } });
//   }

//   handleLoginSubmit(event) {
//     let data = {
//       name: this.state.login.username,
//       password: this.state.login.password
//     };
//     this.postLogin(data);
//     event.preventDefault();
//   }

//   postLogin = async data => {
//     const self = this;
//     await axios.post(hostLogin, data).then(function(response) {
//       console.log(response);
//       self.props.setNama(response.data.user_data.username);
//       self.props.setEmail(response.data.user_data.email);
//       self.props.setAvatar(response.data.user_data.avatar);
//       self.props.login();
//       console.log("store.nama", self.props.nama);
//       self.props.history.push("/profile");
//     });
//   };

//   renderRedirect = () => {
//     if (this.props.isLogin === 1) {
//       return <Redirect to="/" />;
//     }
//   };

//   render() {
//     if (this.props.isLogin === 1) {
//       return <Redirect to="/" />;
//     } else {
//       return (
//         <div>
//           {this.renderRedirect()}
//           <div className="container">
//             <br />
//             <br />
//             <div className="row justify-content-center">
//               <div className="col-5 border">
//                 <div className="row justify-content-center">
//                   <div className="col-12">
//                     <img src={logo} />
//                   </div>

//                   <LoginForm
//                     onPasswordChange={this.handleLoginPasswordChange}
//                     onUsernameChange={this.handleLoginUsernameChange}
//                     onSubmit={this.handleLoginSubmit}
//                     data={this.state.login}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
// }

// // export default Login;
// export default connect(
//   "nama, email, isLogin   ",
//   actions
// )(Login);
