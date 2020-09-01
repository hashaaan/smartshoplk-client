import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { connect } from "react-redux";
import ReactStars from "react-rating-stars-component";
import NavBar from "../components/layout/NavBar";
import Jumbotron from "../components/layout/Jumbotron";
import Footer from "../components/layout/Footer";
import "./Smartphones.css";

const style = {
  imgStyle: {
    height: "340px",
    width: "100%",
    display: "block",
    padding: "10px 30px",
  },
};

class Smartphones extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const { getSmartphones } = this.props;
    getSmartphones();
  }

  addToCard = (item) => {
    let itemsArr = this.state.items;
    itemsArr.push(item);
    this.setState({ items: itemsArr });
  };

  render() {
    const { smartphones } = this.props;
    console.log("sm", smartphones);
    return (
      <>
        <NavBar itemCount={this.state.items.length} />
        <main role="main">
          <Jumbotron
            heading="Smartphone Collection"
            subheading="Pickup your dream choices from here!"
            showbuttons
          />
          <div className="album py-5">
            <div className="container">
              <div className="row">
                {smartphones.map((smartphone, index) => (
                  <div className="col-md-4" key={index}>
                    <Fade>
                      <div
                        className="card mb-4 box-shadow"
                        style={{ height: "550px" }}
                      >
                        <img
                          className="card-img-top"
                          data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                          alt="Thumbnail [100%x225]"
                          style={style.imgStyle}
                          src={smartphone.imgUrl && smartphone.imgUrl}
                          data-holder-rendered="true"
                        />
                        <div className="card-body">
                          <h5
                            className="card-title"
                            title={smartphone.name && smartphone.name}
                          >
                            {smartphone.name && smartphone.name}
                          </h5>
                          <p className="card-text">
                            {smartphone.description && smartphone.description}
                          </p>
                          <span class="badge badge-pill badge-success">
                            {smartphone.color && smartphone.color}
                          </span>
                          <ReactStars
                            count={5}
                            value={smartphone.rating ? smartphone.rating : 0}
                            edit={false}
                            //onChange={() => {}}
                            size={24}
                            activeColor="#ffd700"
                          />
                          <h6 className="price">
                            {smartphone.currency && smartphone.currency}{" "}
                            {smartphone.price && smartphone.price.toFixed(2)}
                          </h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <div
                              className="btn-group"
                              style={{ position: "absolute", bottom: "20px" }}
                            >
                              <Link
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                                to="/product"
                              >
                                View
                              </Link>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                                onClick={this.addToCard}
                              >
                                Add to Cart
                              </button>
                            </div>
                            <small
                              className="text-muted"
                              style={{
                                position: "absolute",
                                bottom: "20px",
                                right: "20px",
                                padding: "10px",
                              }}
                            >
                              9 mins ago
                            </small>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  smartphones: state.common.smartphones,
  error: state.member.error,
});

const mapDispatchToProps = (dispatch) => ({
  getSmartphones: dispatch.common.getSmartphones,
});

export default connect(mapStateToProps, mapDispatchToProps)(Smartphones);
