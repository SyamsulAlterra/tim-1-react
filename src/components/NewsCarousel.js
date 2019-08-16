import React from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import "../assets/styles/styles.css";

class NewsCarousel extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.newsIndex === this.props.newsIndex) {
      console.log("inipropssip", this.props);
      setTimeout(() => {
        this.props.setNewsIndex();
      }, 10000);
    }
  }

  render() {
    let newsNow = this.props.news[this.props.newsIndex];
    if (this.props.news.length !== 0) {
      return (
        <div>
          <div className="card mb-3 newsShadow myNews">
            <img
              src={newsNow.urlToImage}
              className="card-img-top"
              alt="..."
              //   style = {{width}}
            />
            <div className="card-body">
              <h5 className="card-title">
                <a href={newsNow.url}>{newsNow.title}</a>
              </h5>
              <p className="card-text">{newsNow.description}</p>
              <p className="card-text">
                <small className="text-muted">
                  {newsNow.publishedAt.slice(0, 10)}
                </small>
              </p>
              <div className="container">
                <div className="row">
                  <div className="col-md-8 text-center">
                    <button type="button" className="btn btn-outline-primary">
                      Like <i className="icon-heart-empty" />
                    </button>

                    <button type="button" className="btn btn-outline-primary">
                      Comment <i className="icon-comments-alt" />
                    </button>

                    <button type="button" className="btn btn-outline-primary">
                      Share <i className="icon-share" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={() => {
                        this.props.setNewsIndex();
                      }}
                    >
                      Share <i className="icon-share" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>halo</div>;
    }
  }
}

export default connect(
  "news, newsIndex",
  actions
)(NewsCarousel);

// function JSalert() {
//   swal("Congrats!", ", Your account is created!", "success");
// }
