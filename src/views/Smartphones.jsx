import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/layout/NavBar";
import Jumbotron from "../components/layout/Jumbotron";
import Footer from "../components/layout/Footer";
import "./Smartphones.css";

const style = {
  imgStyle: {
    height: "225px",
    width: "100%",
    display: "block",
  },
};

const smartphones = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

class Smartphones extends Component {
  state = {
    items: [],
  };

  addToCard = (item) => {
    let itemsArr = this.state.items;
    itemsArr.push(item);
    this.setState({ items: itemsArr });
  };

  render() {
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
                    <div className="card mb-4 box-shadow">
                      <img
                        className="card-img-top"
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                        alt="Thumbnail [100%x225]"
                        style={style.imgStyle}
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg"
                        data-holder-rendered="true"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
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
                          <small className="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
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

export default Smartphones;
