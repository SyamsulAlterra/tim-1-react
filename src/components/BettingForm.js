import React from "react";
import { connect } from "unistore/react";
import { actions } from "../store";

class BettingForm extends React.Component {
  constructor(props) {
    super(props);
    this.formOnChange = this.formOnChange.bind(this);
  }

  formOnChange(event) {
    this.props.setformBet(event.target.value);
  }
  dropdownOnChange(event) {
    this.props.setformBet(event.target.value);
  }

  handleOnWin = event => {
    this.props.setbetOption(0);
    this.props.setbetLabel(0);
  };
  handleOnDraw = event => {
    this.props.setbetOption(1);
    this.props.setbetLabel(1);
  };
  handleOnLost = event => {
    this.props.setbetOption(2);
    this.props.setbetLabel(2);
  };

  render() {
    return (
      <div className="row justify-content-center">
        <nav className="col-4 text-right">
          <form>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Your Bet"
                onChange={this.formOnChange}
                value={this.props.formBet}
              />
              <small id="emailHelp" className="form-text text-muted">
                Enter Your Bet
              </small>
            </div>
          </form>
        </nav>

        <div class="dropdown col-4 text-left">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.props.betLabel}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" onClick={this.handleOnWin}>
              Win
            </a>
            <a class="dropdown-item" onClick={this.handleOnDraw}>
              Draw
            </a>
            <a class="dropdown-item" onClick={this.handleOnLost}>
              Lost
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "formBet,betLabel",
  actions
)(BettingForm);
