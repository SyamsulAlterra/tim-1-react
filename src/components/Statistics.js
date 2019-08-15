import React from "react";
import H2h from "./H2h";
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
      apikey: "5e0c95653cmsh4cd85871915e19ep1294ccjsndd303cb4ef96"
    };
  }

  getTeam = async () => {
    let date = "/2019-08-17";
    let code = "/" + this.state["epl"][0].toString();
    let url =
      "https://api-football-v1.p.rapidapi.com/v2/fixtures/league" + code + date;

    await axios
      .get(url, {
        headers: {
          "x-rapidapi-key": this.state.apikey
        }
      })
      .then(response => {
        let tim1 = response.data.api.fixtures[0].homeTeam;
        let tim2 = response.data.api.fixtures[0].awayTeam;
        this.setState({
          logo1: tim1.logo,
          logo2: tim2.logo,
          id1: tim1.team_id,
          id2: tim2.team_id
        });
      });
  };

  getH2h = async () => {
    let a = "/" + this.state.id1.toString();
    let b = "/" + this.state.id2.toString();
    let url = "https://api-football-v1.p.rapidapi.com/v2/fixtures/h2h" + a + b;

    await axios
      .get(url, {
        headers: {
          "x-rapidapi-key": this.state.apikey
        }
      })
      .then(response => {
        let data = response.data.api.fixtures.filter(m => {
          return m.status == "Match Finished";
        });

        if (data < 5) {
          this.setState(data);
        } else {
          this.setState({ h2h: data.slice(0, 5) });
        }
      });
  };

  getRecord1 = async () => {
    let code2 = "/" + this.state["epl"][1].toString();
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
    let code2 = "/" + this.state["epl"][1].toString();
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
    await this.getH2h();
    await this.getRecord1();
    await this.getRecord2();
  };

  render() {
    // console.log(this.state.h2h);
    // console.log(this.state.stat1);
    console.log(this.state.h2h);

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
                <h1 onClick={this.getData}>Head 2 Head</h1>
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

export default Statistics;
