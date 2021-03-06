import React from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import Button from "./Button";
import { withRouter } from "react-router-dom";

import loading from "../assets/img/placeyourbet.jpg";

class UpcomingMatch extends React.Component {
  constructor(props) {
    super(props);
  }

  changeTimeStamp(timestamp) {
    let options = {
      year: "numeric",
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Jakarta"
    };

    let s = new Date(timestamp * 1000 - 7 * 3600).toLocaleDateString(
      "en-US",
      options
    );
    return s;
  }

  handleClick = async (value, home) => {
    let statDate = this.changeTimeStamp(value);
    await this.props.setcommenceTimeNow(value);
    await this.props.setMatchDate(statDate);
    await this.props.setHomeTeam(home);
    await this.props.passedDate();
    this.props.history.push("/matchdetail");
  };

  render() {
    console.log(this.props.upcomingMatch);
    if (this.props.upcomingMatch.length == 0) {
      return <img width="100%" src={loading} />;
    } else {
      return (
        <div>
          <div className="container upcoming">
            <div className="row">
              <div className="col-12 border">
                <h3>Upcoming Match</h3>
              </div>
            </div>
            <div>
              {this.props.upcomingMatch.map((value, index) => {
                return (
                  <div
                    className="row border hvr-fade"
                    id="upcom-match"
                    key={index}
                  >
                    <div className="col-3 text-right pt-2">
                      {value.teams[0]}
                    </div>
                    <div className="col-1 text-center pt-2">VS</div>
                    <div className="col-3 text-left pt-2">{value.teams[1]}</div>
                    <div className="col-3 text-left pt-2">
                      {this.changeTimeStamp(value.commence_time)}{" "}
                    </div>
                    <div className="col-2 text-left">
                      <Button
                        value={value.commence_time}
                        homeTeam={value.home_team}
                        onClick={this.handleClick}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(
  "matchDate,upcomingMatch",
  actions
)(withRouter(UpcomingMatch));
