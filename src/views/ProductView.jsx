import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-regular-svg-icons";
import {
  faShoppingCart,
  faPlus,
  faMinus,
  faTruck,
  faCreditCard,
  faPhone,
  // faStar,
  // faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/layout/NavBar";
import "./ProductView.css";
import Footer from "../components/layout/Footer";
import {
  // Link,
  // useLocation,
  withRouter,
} from "react-router-dom";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import {getCurrencies,getRates} from "../utils/apis";

// function getReviewStars(amount) {
//   for (let i = 1; i <= amount; i++) {
//     return <FontAwesomeIcon icon={faStar} />;
//   }
// }

class ProductView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      currencies:[],
      newPrice: 0,
      newCurrency:"",
    };
  }
  componentDidMount() {
    this.fetchProduct(this.props.match.params.id);
    getCurrencies()
    .then(res => {
      if(res!=0){
        this.setState({
          currencies: res
        })   
      }
    });
  }

  handleChange(e) {
    let selectedCurrency = e.target.value;
    if(this.state.newCurrency!=selectedCurrency){
      if(selectedCurrency!=this.state.product.currency)
      {
        getRates(["LKR",selectedCurrency])
        .then(res=>{
          if(res!=0){
            this.setState({newCurrency: selectedCurrency});
            let lkrRate = res["LKR"];
            let newcRate = res[selectedCurrency];
            this.setState({newPrice :Math.round((this.state.product.price / lkrRate) * newcRate)});
          }
        });
      }
    }
  }

  fetchProduct = (id) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}smartphones/${id}`)
      .then((response) => {
        if (response.data && response.data.response) {
          this.setState({
            product: response.data.response,
          });
        }
      })
      .catch((err) => {
      });
  };
  render() {
    const { currencies } = this.state;

    let currenciesList = Object.keys(currencies).map((k) => {
      return (
        <option key={k} value={k}>{k}</option>
      )
    }, this);
    return (
      <>
        <NavBar />
        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  {/* <li className="breadcrumb-item">
                  <a href="category.html">Category</a>
                </li> */}
                  <li className="breadcrumb-item active" aria-current="page">
                    {this.state.product && this.state.product.name}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="card bg-light mb-3" style={{ height: "506px" }}>
                <div className="card-body">
                  <img
                    className="img-fluid"
                    style={{ width: "100%", height: "100%" }}
                    src={this.state.product && this.state.product.imgUrl}
                    alt="..."
                  />
                  {/* <p className="text-center">Zoom</p> */}
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 add_to_cart_block">
              <div className="card bg-light mb-3">
                <div className="card-body">
                  <p className="price">
                    {this.state.newPrice==0&&this.state.product && this.state.product.currency}{this.state.newPrice>0&&this.state.product&&this.state.newCurrency}.
                    {this.state.newPrice==0&&this.state.product && this.state.product.price}{this.state.newPrice>0&&this.state.product&&this.state.newPrice}
                  </p>
                  <select
                    className="custom-select d-block w-100"
                    id="currency"
                    onChange={this.handleChange.bind(this)} 
                    value={this.state.value}
                    clearable={this.state.clearable}o
                    searchable={this.state.searchable}
                  >
                    {currenciesList}
                  </select>
                  {/* <p className="price_discounted">149.90 $</p> */}
                  <form method="get" action="cart.html">
                    <p>
                      <label>Brand :</label>
                      {this.state.product && this.state.product.brand}
                    </p>
                    <p>
                      <label>Color :</label>
                      {this.state.product && this.state.product.color}
                    </p>
                    <p>
                      <label>ModelNo :</label>
                      {this.state.product && this.state.product.modelNo}
                    </p>
                    <p>
                      <label>Storage :</label>
                      {this.state.product && this.state.product.storage}
                    </p>

                    <div className="form-group">
                      {/* <select
                        className="custom-select"
                        id="colors"
                        onChange={() => {}}
                      >
                        <option defaultValue>Select</option>
                        <option value="1">Blue</option>
                        <option value="2">Red</option>
                        <option value="3">Green</option>
                      </select> */}
                    </div>
                    <div className="form-group">
                      <label>Quantity :</label>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <button
                            type="button"
                            className="quantity-left-minus btn btn-danger btn-number"
                            data-type="minus"
                            data-field=""
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="quantity"
                          name="quantity"
                          min="1"
                          max="100"
                          //value="1"
                          defaultValue="1"
                          onChange={() => {}}
                        />
                        <div className="input-group-append">
                          <button
                            type="button"
                            className="quantity-right-plus btn btn-success btn-number"
                            data-type="plus"
                            data-field=""
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <a
                      href="cart.html"
                      className="btn btn-success btn-lg btn-block text-uppercase"
                    >
                      <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
                    </a>
                  </form>
                  <div className="product_rassurance">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <i className="fa fa-truck fa-2x"></i>
                        <FontAwesomeIcon icon={faTruck} size="2x" />
                        <br />
                        Fast delivery
                      </li>
                      <li className="list-inline-item">
                        <FontAwesomeIcon icon={faCreditCard} size="2x" />
                        <br />
                        Secure payment
                      </li>
                      <li className="list-inline-item">
                        <FontAwesomeIcon icon={faPhone} size="2x" />
                        <br />
                        +94 7 67 58 28 23
                      </li>
                    </ul>
                  </div>
                  <div className="reviews_product p-3 mb-2 ">
                    {this.state.product && this.state.product.rating === 0
                      ? "No reviews"
                      : `${
                          this.state.product && this.state.product.rating
                        } reviews`}
                    {this.state.product ? (
                      <ReactStars
                        count={5}
                        value={
                          this.state.product.rating
                            ? this.state.product.rating
                            : 0
                        }
                        edit={false}
                        //onChange={() => {}}
                        size={24}
                        activeColor="#ffd700"
                      />
                    ) : null}
                    (
                    {this.state.product && this.state.product.rating === 0
                      ? 0
                      : this.state.product && this.state.product.rating}
                    /5)
                    <a className="pull-right" href="#reviews">
                      View all reviews
                    </a>
                  </div>
                  <div className="datasheet p-3 mb-2 bg-info text-white">
                    <div className="text-white">
                      <FontAwesomeIcon icon={faFileExcel} /> Download DataSheet
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card border-light mb-3">
                <div className="card-header bg-primary text-white text-uppercase">
                  <i className="fa fa-align-justify"></i> Description
                </div>
                <div className="card-body">
                  <p className="card-text">
                    {this.state.product && this.state.product.description}
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="col-12" id="reviews">
              <div className="card border-light mb-3">
                <div className="card-header bg-primary text-white text-uppercase">
                  <i className="fa fa-comment"></i> Reviews
                </div>
                <div className="card-body">
                  <div className="review">
                    <FontAwesomeIcon icon={faCalendar} /> January 01, 2018{" "}
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> by Paul Smith
                    <div className="blockquote">
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="review">
                    <FontAwesomeIcon icon={faCalendar} /> January 01, 2018{" "}
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> by Paul Smith
                    <div className="blockquote">
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <br />
        <Footer />
      </>
    );
  }
}

export default withRouter(ProductView);
