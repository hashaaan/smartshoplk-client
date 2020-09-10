import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import "./Checkout.css";
import {getCountries} from '../utils/apis.js';

const calcCartTotal = (items) => {
  let cartTotal = 0;
  items.map((item) => {
    cartTotal = cartTotal + item.smartphone.price * item.qty;
  });
  return cartTotal.toFixed(2);
};

const currency = "LKR";

class Checkout extends Component {
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       clearable: true,
  //       countries: [],
  //    } 
  //  }
  
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    street: "",
    unit: "",
    country: "",
    state: "",
    zip: "",
    paymentMethod: "",
    countries : [],
  };


  componentDidMount() {
    getCountries()
        .then(res => {
            this.setState({
                countries: res
            })
        })
   }

   handleChange(selectedOption) {
    this.setState({selectedOption});
   }



  onFormSubmit = (e) => {
    e.preventDefault();
    const { items, createOrder } = this.props;
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      street,
      unit,
      country,
      state,
      zip,
      paymentMethod,
    } = this.state;

    // calc total
    const total = calcCartTotal(items);

    // data object
    const dataObj = {
      firstName,
      lastName,
      phoneNumber,
      email,
      paymentMethod,
      address: {
        street,
        unit,
        country,
        state,
        zip,
      },
      total,
      currency,
    };

    createOrder(dataObj)
      .then((res) => {
        const { history } = this.props;
        if (res.success) {
          history.push("/orders");
        }
      })
      .catch((err) => {
        //
      });
  };

  render() {
    const { items, error } = this.props;
    return (
      <div className="bg-light">
        <NavBar />
        <div className="mb-5 mt-5">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/cart">Cart</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Checkout
                </li>
              </ol>
            </nav>
            <div className="mt-5 mb-4">
              <div className="row">
                <div className="col-md-4 order-md-2">
                  <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Your Cart</span>
                    <span className="badge badge-secondary badge-pill">
                      {items ? items.length : 0}
                    </span>
                  </h4>
                  <ul className="list-group mb-3">
                    {items &&
                      items.length > 0 &&
                      items.map((item, index) => (
                        <li
                          key={index}
                          className="list-group-item d-flex justify-content-between lh-condensed"
                        >
                          <div>
                            <h6 className="my-0 item-title">
                              {item.smartphone.name}
                            </h6>
                            {item.smartphone.description ? (
                              <div className="text-muted item-description">
                                {item.smartphone.description}
                              </div>
                            ) : (
                              <small className="text-muted item-description">
                                Unspecified
                              </small>
                            )}
                          </div>
                          <span className="text-muted item-price">
                            {currency}
                            {". "}
                            {item.smartphone.price &&
                              item.smartphone.price.toFixed(2)}
                          </span>
                        </li>
                      ))}
                    <li className="list-group-item d-flex justify-content-between">
                      <strong>Total</strong>
                      <strong>
                        ({currency}.) {calcCartTotal(items)}
                      </strong>
                    </li>
                  </ul>
                </div>
                <div className="col-md-8 order-md-1">
                  <h4 className="mb-3">Checkout Details</h4>
                  <form
                    className="needs-validation"
                    onSubmit={this.onFormSubmit}
                  >
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">First Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          onChange={(e) =>
                            this.setState({ firstName: e.target.value })
                          }
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Last Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          onChange={(e) =>
                            this.setState({ lastName: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="phoneNumber">Phone Number *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        onChange={(e) =>
                          this.setState({ phoneNumber: e.target.value })
                        }
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="you@example.com"
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                      />
                    </div>

                    <hr className="mb-4" />

                    <h4 className="mb-3">Address</h4>

                    <div className="mb-3">
                      <label htmlFor="street">Street</label>
                      <input
                        type="text"
                        className="form-control"
                        id="street"
                        placeholder="1234 Main St"
                        onChange={(e) =>
                          this.setState({ street: e.target.value })
                        }

                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="unit">
                        Unit <span className="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="unit"
                        placeholder="Unit"
                        onChange={(e) =>
                          this.setState({ unit: e.target.value })
                        }
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-5 mb-3">
                        <label htmlFor="country">Country</label>
                        <select
                          className="custom-select d-block w-100"
                          id="country"
                          onChange={(e) =>
                            this.setState({ country: e.target.value })
                          } 
                          value={this.state.value}
                          clearable={this.state.clearable}o
                          searchable={this.state.searchable}
                        >
                          {this.state.countries&&this.state.countries.length>0&&this.state.countries.map(country => <option>{country.name}</option>)}
                        </select>
                         
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="state">State</label>
                        <select
                          className="custom-select d-block w-100"
                          id="state"
                          onChange={(e) =>
                            this.setState({ state: e.target.value })
                          }
                        >
                          <option value="">Choose...</option>
                          <option value="Matara">Matara</option>
                          <option value="Galle">Galle</option>
                          <option value="Colombo">Colombo</option>
                          <option value="California">California</option>
                        </select>
                      </div>
                      <div className="col-md-3 mb-3">
                        <label htmlFor="zip">Zip *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          onChange={(e) =>
                            this.setState({ zip: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <hr className="mb-4" />

                    <h4 className="mb-3">Payment</h4>

                    <div className="d-block my-3">
                      <div className="custom-control custom-radio">
                        <input
                          id="credit"
                          name="paymentMethod"
                          type="radio"
                          className="custom-control-input"
                          onChange={(e) =>
                            this.setState({ paymentMethod: "credit" })
                          }
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="credit"
                        >
                          Credit card
                        </label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input
                          id="debit"
                          name="paymentMethod"
                          type="radio"
                          className="custom-control-input"
                          onChange={(e) =>
                            this.setState({ paymentMethod: "debit" })
                          }
                        />
                        <label className="custom-control-label" htmlFor="debit">
                          Debit card
                        </label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input
                          id="paypal"
                          name="paymentMethod"
                          type="radio"
                          className="custom-control-input"
                          onChange={(e) =>
                            this.setState({ paymentMethod: "paypal" })
                          }
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="paypal"
                        >
                          Paypal
                        </label>
                      </div>
                    </div>
                    <hr className="mb-4" />
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginBottom: "10px",
                        textAlign: "center",
                      }}
                    >
                      {error && error}
                    </div>
                    <button className="btn btn-primary btn-block" type="submit">
                      Place Order
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.cart.items,
  error: state.order.error,
});

const mapDispatchToProps = (dispatch) => ({
  getCartItems: dispatch.cart.getCartItems,
  createOrder: dispatch.order.createOrder,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Checkout)
);
