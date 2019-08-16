import React from "react";
import { connect } from "unistore/react";
import { actions } from "../store";

class Profil extends React.Component {
  render() {
    return (
      <div class="profil">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <img
                src="https://www.provoke-online.com/images/art_news/a35e4adffa4eb4891062bb42.jpg"
                alt=""
              />
              <h1>{this.props.nama}</h1>
              <h1>{this.props.email}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "nama, email",
  actions
)(Profil);
