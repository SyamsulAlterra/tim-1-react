import React from "react";
import H2h from "./H2h";
import { connect } from "unistore/react";
import { actions } from "../store";
import { withRouter } from "react-router-dom";
const axios = require("axios");

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serieA: [891, 94],
      epl: [524, 2],
      laLiga: [775, 87],
      ligue1: 525,
      logo1: "",
      logo2: "",
      id1: 0,
      id2: 0,
      h2h: [],
      stat1: {
        matchs: {
          wins: { total: 0 },
          draws: { total: 0 },
          loses: { total: 0 }
        },
        goals: {
          goalsFor: { total: 0 },
          goalsAgainst: { total: 0 }
        }
      },
      stat2: {
        matchs: {
          wins: { total: 0 },
          draws: { total: 0 },
          loses: { total: 0 }
        },
        goals: {
          goalsFor: { total: 0 },
          goalsAgainst: { total: 0 }
        }
      },
      apikey: "5e0c95653cmsh4cd85871915e19ep1294ccjsndd303cb4ef96",
      target: {}
    };
  }

  // filterMatch = data => {
  //   let filteredData = data.filter(team => {
  //     console.log([team.homeTeam, team.awayTeam]);
  //     return (
  //       team.homeTeam.team_name == this.props.homeTeam ||
  //       team.awayTeam.team_name == this.props.homeTeam
  //     );
  //   });
  //   this.setState({ target: filteredData });
  // };
  getTeam = async () => {
    console.log(1);
    let date = "/" + this.props.syamsulDate;
    let code = "/" + this.state[this.props.currentLeague][0].toString();
    let url =
      "https://api-football-v1.p.rapidapi.com/v2/fixtures/league" + code + date;
    let data;
    let filteredData;

    await axios
      .get(url, {
        headers: {
          "x-rapidapi-key": this.state.apikey
        }
      })
      .then(async response => {
        data = response.data.api.fixtures;
        filteredData = data.filter(team => {
          console.log(team);
          return (
            team.homeTeam.team_name.split(" ")[0] ==
              this.props.homeTeam.split(" ")[0] ||
            team.awayTeam.team_name.split(" ")[0] ==
              this.props.homeTeam.split(" ")[0]
          );
        });
        console.log(filteredData);

        await this.props.setTeam1(filteredData[0].homeTeam.logo);
        await this.props.setTeam2(filteredData[0].awayTeam.logo);

        this.setState({
          logo1: filteredData[0].homeTeam.logo,
          logo2: filteredData[0].awayTeam.logo,
          id1: filteredData[0].homeTeam.team_id,
          id2: filteredData[0].awayTeam.team_id
        });
      });
  };

  getH2h = async () => {
    console.log(2);
    let a = "/" + this.state.id1.toString();
    let b = "/" + this.state.id2.toString();
    let url = "https://api-football-v1.p.rapidapi.com/v2/fixtures/h2h" + a + b;
    let data;

    await axios
      .get(url, {
        headers: {
          "x-rapidapi-key": this.state.apikey
        }
      })
      .then(response => {
        data = response.data.api.fixtures.filter(m => {
          return m.status == "Match Finished";
        });
      });
    if (data < 5) {
      this.setState({ h2h: data });
    } else {
      this.setState({ h2h: data.slice(0, 5) });
    }
  };

  getRecord1 = async () => {
    console.log(3);
    let code2 = "/" + this.state[this.props.currentLeague][1].toString();
    let url =
      "https://api-football-v1.p.rapidapi.com/v2/statistics" +
      code2 +
      "/" +
      this.state.id1.toString();

    await axios
      .get(url, {
        headers: {
          "x-rapidapi-key": this.state.apikey
        }
      })
      .then(response => {
        this.setState({ stat1: response.data.api.statistics });
      });
  };

  getRecord2 = async () => {
    console.log(4);
    let code2 = "/" + this.state[this.props.currentLeague][1].toString();
    let b = "/" + this.state.id2.toString();
    let url =
      "https://api-football-v1.p.rapidapi.com/v2/statistics" + code2 + b;

    await axios
      .get(url, {
        headers: {
          "x-rapidapi-key": this.state.apikey
        }
      })
      .then(response => {
        this.setState({ stat2: response.data.api.statistics });
      });
  };

  getData = async () => {
    await this.getTeam();
    this.getH2h();
    this.getRecord1();
    this.getRecord2();
  };

  componentWillMount = () => {
    this.getData();
  };

  render() {
    console.log(this.props.homeTeam);
    console.log(this.props.syamsulDate);
    return (
      <div class="statistic border">
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td>
                <img src={this.state.logo1} alt="" />
                <p>2018 Performance</p>
                <p>Wins: {this.state.stat1.matchs.wins.total}</p>
                <p>Loses: {this.state.stat1.matchs.loses.total}</p>
                <p>Draws: {this.state.stat1.matchs.draws.total}</p>
                <p>Goals Scored: {this.state.stat1.goals.goalsFor.total}</p>
                <p>
                  Goals Conceded: {this.state.stat1.goals.goalsAgainst.total}
                </p>
              </td>
              <td>
                <h1>Recent Matches</h1>
                {this.state.h2h.map(match => {
                  return <H2h match={match} />;
                })}
              </td>
              <td>
                <img src={this.state.logo2} alt="" />
                <p>2018 Performance</p>
                <p>Wins: {this.state.stat2.matchs.wins.total}</p>
                <p>Loses: {this.state.stat2.matchs.loses.total}</p>
                <p>Draws: {this.state.stat2.matchs.draws.total}</p>
                <p>Goals Scored: {this.state.stat2.goals.goalsFor.total}</p>
                <p>
                  Goals Conceded: {this.state.stat2.goals.goalsAgainst.total}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  "currentLeague, syamsulDate, homeTeam",
  actions
)(withRouter(Statistics));
