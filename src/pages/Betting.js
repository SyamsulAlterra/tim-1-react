import React from "react";
// import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

// import img

// import component
import UpcomingMatch from "../components/UpcomingMatch";

const league = "soccer_epl";

class Betting extends React.Component {
  constructor(props) {
    super(props);
  }

  // handleSearchChange(event) {
  //   this.setState(
  //     {
  //       search: { keyword: event.target.value }
  //     },
  //     () => {
  //       this.getData(this.state.search.keyword);
  //     }
  //   );
  // }

  handleOnClickEPL = event => {
    this.props.setNews(this.props.soccer_epl);
    this.props.setLeague("epl");
  };
  handleOnSerieA = event => {
    this.props.setNews(this.props.soccer_italy_serie_a);
    this.props.setLeague("serieA");
  };
  handleOnLaliga = event => {
    this.props.setNews(this.props.soccer_spain_la_liga);
    this.props.setLeague("laLiga");
  };

  componentWillMount = async () => {
    await this.props.getDataBetting("soccer_epl");
    console.log(this.props.soccer_epl);

    console.log(this.props.upcomingMatch);
    await this.props.setNews(this.props.soccer_epl);
    this.props.getDataBetting("soccer_italy_serie_a");
    this.props.getDataBetting("soccer_spain_la_liga");
  };

  render() {
    // console.log(this.props.hostBetting);
    return (
      <div>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <div
              className="nav-item nav-link btn active"
              id="nav-home-tab"
              onClick={this.handleOnClickEPL}
            >
              EPL
            </div>
            <div
              className="nav-item nav-link btn active"
              id="nav-profile-tab"
              onClick={this.handleOnSerieA}
            >
              Serie A
            </div>
            <div
              className="nav-item nav-link btn active"
              id="nav-contact-tab"
              onClick={this.handleOnLaliga}
            >
              La liga
            </div>
          </div>
        </nav>
        <div>
          <div>
            <UpcomingMatch />
          </div>
          {/* <div className="tab-pane fade" id="nav-profile">
            <UpcomingMatch leagueChoice="soccer_italy_serie_a" />
          </div>
          <div className="tab-pane fade" id="nav-contact">
            <UpcomingMatch leagueChoice="soccer_spain_la_liga" />
          </div> */}
        </div>
      </div>
    );
  }
}

// export default News;
export default connect(
  "hostBetting,soccer_epl,soccer_italy_serie_a,soccer_spain_la_liga,news ,upcomingMatch",
  actions
)(Betting);
