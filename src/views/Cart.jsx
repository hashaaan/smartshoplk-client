import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import "./Cart.css";

let cartItems = [
  {
    name: "iPhone 11 Pro Max",
    modelNo: "XFERRSA",
    color: "Gold",
    quantity: 3,
    unitPrice: 12000,
    currency: "LKR",
  },
  {
    name: "iPhone 7 Plus",
    modelNo: "XFERRSA",
    color: "Red",
    quantity: 5,
    unitPrice: 120000,
    currency: "LKR",
  },
  {
    name: "OnePlus 8 Pro",
    modelNo: "XFERRSA",
    color: "Black",
    quantity: 2,
    unitPrice: 145000,
    currency: "LKR",
  },
  {
    name: "OnePlus 8 Pro",
    modelNo: "XFERRSA",
    color: "Black",
    quantity: 8,
    unitPrice: 15000,
    currency: "LKR",
  },
];

const calcCartTotal = (items) => {
  let cartTotal = 0;
  items.map((item) => {
    cartTotal = cartTotal + item.unitPrice * item.quantity;
  });
  return cartTotal.toFixed(2);
};

const calcPrice = (unitPrice, quantity) => {
  let price = unitPrice * quantity;
  return price.toFixed(2);
};

class Cart extends Component {
  render() {
    const { history } = this.props;

    return (
      <>
        <NavBar itemCount={0} />
        <div className="cart_section mt-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Cart
                    </li>
                  </ol>
                </nav>

                <div className="cart_container">
                  <div className="cart_title">
                    Shopping Cart<small> (3 items) </small>
                  </div>
                  <Fade>
                    <table className="table table-hover shopping-cart-wrap">
                      <thead className="text-muted">
                        <tr>
                          <th scope="col">Product</th>
                          <th scope="col" width="120">
                            Quantity
                          </th>
                          <th scope="col" width="160">
                            Price
                          </th>
                          <th scope="col" width="180" className="text-right">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <figure className="media">
                                <div className="img-wrap">
                                  <img
                                    src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg"
                                    className="img-thumbnail img-sm"
                                    alt="..."
                                  />
                                </div>
                                <figcaption className="media-body">
                                  <h6 className="title text-truncate">
                                    {item.name}
                                  </h6>
                                  <dl className="param param-inline small">
                                    <dt>Model No: </dt>
                                    <dd>{item.modelNo}</dd>
                                  </dl>
                                  <dl className="param param-inline small">
                                    <dt>Color: </dt>
                                    <dd>{item.color}</dd>
                                  </dl>
                                </figcaption>
                              </figure>
                            </td>
                            <td>{item.quantity}</td>
                            <td>
                              <div className="price-wrap">
                                <var className="price">
                                  {item.currency}{" "}
                                  {calcPrice(item.unitPrice, item.quantity)}
                                </var>
                                <small className="text-muted">
                                  ({item.currency} {item.unitPrice.toFixed(2)}{" "}
                                  each)
                                </small>
                              </div>
                            </td>
                            <td className="text-right">
                              <button
                                className="btn btn-outline-danger"
                                title="Remove"
                              >
                                <FontAwesomeIcon icon={faTrashAlt} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Fade>
                  <Fade>
                    <div className="order_total">
                      <div className="order_total_content text-md-right">
                        <div className="order_total_title">Cart Total:</div>
                        <div className="order_total_amount">
                          {"LKR"} {calcCartTotal(cartItems)}
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <div className="cart_buttons">
                    <button
                      type="button"
                      className="btn btn-success mr-2"
                      onClick={() => history.push("/smartphones")}
                    >
                      <FontAwesomeIcon icon={faShoppingCart} /> Continue
                      Shopping
                    </button>
                    <button type="button" className="btn btn-info">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(Cart);
