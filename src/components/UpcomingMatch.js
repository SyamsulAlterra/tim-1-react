import React from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import Button from "./Button";
import { withRouter } from "react-router-dom";

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

    let s = new Date(timestamp * 1000).toLocaleDateString("en-US", options);
    // this.props.addDateList(s);
    return s;
  }
  //   onMouseEnter, onMouseLeave

  handleClick = async value => {
    await this.props.setMatchDate(value);
    console.log(this.props.matchDate);
    this.props.history.push("/tes");
  };

  render() {
    console.log(this.props.matchDate);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 border">
              <h3>Upcoming Match</h3>
            </div>
          </div>
          {this.props.data.map((value, index) => {
            return (
              <div className="row border hvr-fade" id="upcom-match" key={index}>
                <div className="col-3 text-right pt-2">{value.teams[0]}</div>
                <div className="col-1 text-center pt-2">VS</div>
                <div className="col-3 text-left pt-2">{value.teams[1]}</div>
                <div className="col-3 text-left pt-2">
                  {this.changeTimeStamp(value.commence_time)}{" "}
                </div>
                <div className="col-2 text-left">
                  <Button
                    value={this.changeTimeStamp(value.commence_time)}
                    onClick={this.handleClick}
                  />
                  {/* <button className="btn btn-primary" value={this.props.dateLis[this.props.dateList.length-1]}>
                    See More
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(
  "matchDate",
  actions
)(withRouter(UpcomingMatch));
