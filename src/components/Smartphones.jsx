import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./layout/NavBar";
import Jumbotron from "./layout/Jumbotron";
import Footer from "./layout/Footer";
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
          <div class="album py-5 bg-light">
            <div class="container">
              <div class="row">
                {smartphones.map((smartphone, index) => (
                  <div class="col-md-4" key={index}>
                    <div class="card mb-4 box-shadow">
                      <img
                        class="card-img-top"
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                        alt="Thumbnail [100%x225]"
                        style={style.imgStyle}
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg"
                        data-holder-rendered="true"
                      />
                      <div class="card-body">
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <Link
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                              to="/smartphones/iPhone7"
                            >
                              View
                            </Link>
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                              onClick={this.addToCard}
                            >
                              Add to Cart
                            </button>
                          </div>
                          <small class="text-muted">9 mins</small>
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
