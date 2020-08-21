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
                        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1741059fbf9%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1741059fbf9%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.828125%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
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
