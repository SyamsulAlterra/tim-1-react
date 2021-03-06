import React from "react";
// import axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

// import component
import Statistics from "../components/Statistics";
import Header from "../components/Header";
import BetCard from "../components/BetCard";
import BettingForm from "../components/BettingForm";

class MatchDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let filtered_bet = this.props.upcomingMatch.filter(value => {
      return value.commence_time === this.props.commenceTimeNow;
    });
    console.log(filtered_bet);
    return (
      <div>
        <Header />
        <div className="row" />
        <Statistics />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <BettingForm />
            </div>
          </div>
          <div className="row">
            {filtered_bet[0].sites.map(value => {
              return <BetCard data={value} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "upcomingMatch,commenceTimeNow",
  actions
)(withRouter(MatchDetail));
