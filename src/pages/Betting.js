import React from "react";
// import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

// import img

// import component
import UpcomingMatch from "../components/UpcomingMatch";

const hostBetting = "https://api.the-odds-api.com/v3/odds/?region=uk&mkt=h2h";
const key = "&apiKey=2c009f10b9bfec71f321bd21559=";
const league = "soccer_epl";

class Betting extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSearchChange(event) {
    this.setState(
      {
        search: { keyword: event.target.value }
      },
      () => {
        this.getData(this.state.search.keyword);
      }
    );
  }

  componentDidMount = async () => {
    await this.props.getDataBetting(league);
  };

  render() {
    // console.log(this.props.hostBetting);
    if (this.props.listMatch !== []) {
      return <UpcomingMatch data={this.props.listMatch.soccer_epl} />;
    } else {
      return <div>Kosong</div>;
    }
  }
}

// export default News;
export default connect(
  "listMatch, hostBetting, soccer_epl",
  actions
)(Betting);
