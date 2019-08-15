import React from "react";

class H2h extends React.Component {
  render() {
    return (
      <table class="h2h table table-borderless">
        <tbody>
          <tr>
            <td>
              <img src={this.props.match.homeTeam.logo} alt="" />
            </td>
            <td>{this.props.match.goalsHomeTeam}</td>
            <td>:</td>
            <td>{this.props.match.goalsAwayTeam}</td>
            <td>
              <img src={this.props.match.awayTeam.logo} alt="" />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default H2h;
