import React from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import "../assets/styles/styles.css";

class News extends React.Component {
  constructor(props) {
    super(props);
  }

  description = () => {
    let temp = this.props.news.map((value, index) => {
      var description = "";
      let b = 100;
      while (true) {
        if (value.description.slice(0, b) === "") {
          b++;
        } else {
          description = value.description.slice(0, b);
          break;
        }
      }
      return description;
    });
    return temp;
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.news.map((value, index) => {
          return (
            <div className="card mb-3 newsShadow myNews" key={index}>
              <img
                src={value.urlToImage}
                className="card-img-top"
                alt="..."
                //   style = {{width}}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a href={value.url}>{value.title}</a>
                </h5>
                <p className="card-text">{value.description}</p>
                <p className="card-text">
                  <small className="text-muted">
                    {value.publishedAt.slice(0, 10)}
                  </small>
                </p>
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 text-center">
                      <button type="button" className="btn btn-outline-primary">
                        Like <i className="icon-heart-empty" />
                      </button>
                      {/* <div className="col-md-1" /> */}
                      {/* </div> */}
                      {/* <div className="col-md-4 text-center"> */}
                      <button type="button" className="btn btn-outline-primary">
                        Comment <i className="icon-comments-alt" />
                      </button>
                      {/* <div className="col-md-1" /> */}
                      {/* </div> */}
                      {/* <div className="col-md-4 text-right"> */}
                      <button type="button" className="btn btn-outline-primary">
                        Share <i className="icon-share" />
                      </button>
                      {/* <div className="col-md-1" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(
  "news",
  actions
)(News);

// function JSalert() {
//   swal("Congrats!", ", Your account is created!", "success");
// }
