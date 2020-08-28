import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavBar from "../components/layout/NavBar";
//import Jumbotron from "./layout/Jumbotron";
import "./Cart.css";

class Cart extends Component {
  render() {
    const { history } = this.props;

    return (
      <>
        <NavBar itemCount={0} />
        {/* <Jumbotron
          heading="Shopping Cart"
          subheading={"Checkout your picked items"}
        /> */}
        <div className="cart_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="cart_container">
                  <div className="cart_title">
                    Shopping Cart<small> (3 items in your cart) </small>
                  </div>

                  <table className="table table-hover shopping-cart-wrap">
                    <thead className="text-muted">
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col" width="120">
                          Quantity
                        </th>
                        <th scope="col" width="120">
                          Price
                        </th>
                        <th scope="col" width="200" className="text-right">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
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
                                iPhone 11 Pro Max
                              </h6>
                              <dl className="param param-inline small">
                                <dt>Model No: </dt>
                                <dd>XFERRSA</dd>
                              </dl>
                              <dl className="param param-inline small">
                                <dt>Color: </dt>
                                <dd>Gold</dd>
                              </dl>
                            </figcaption>
                          </figure>
                        </td>
                        <td>4</td>
                        <td>
                          <div className="price-wrap">
                            <var className="price">Rs.12000</var>
                            <small className="text-muted">
                              (Rs.12000 each)
                            </small>
                          </div>
                        </td>
                        <td className="text-right">
                          <button className="btn btn-outline-danger">
                            Remove
                          </button>
                        </td>
                      </tr>
                      <tr>
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
                                Product name goes here{" "}
                              </h6>
                              <dl className="param param-inline small">
                                <dt>Model No: </dt>
                                <dd>RRRSXXL</dd>
                              </dl>
                              <dl className="param param-inline small">
                                <dt>Color: </dt>
                                <dd>Red</dd>
                              </dl>
                            </figcaption>
                          </figure>
                        </td>
                        <td>8</td>
                        <td>
                          <div className="price-wrap">
                            <var className="price">Rs.12000</var>
                            <small className="text-muted">
                              (Rs.12000 each)
                            </small>
                          </div>
                        </td>
                        <td className="text-right">
                          <button className="btn btn-outline-danger btn-round">
                            Remove
                          </button>
                        </td>
                      </tr>
                      <tr>
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
                                Product name goes here{" "}
                              </h6>
                              <dl className="param param-inline small">
                                <dt>Model No: </dt>
                                <dd>XXLDES</dd>
                              </dl>
                              <dl className="param param-inline small">
                                <dt>Color: </dt>
                                <dd>Black</dd>
                              </dl>
                            </figcaption>
                          </figure>
                        </td>
                        <td>1</td>
                        <td>
                          <div className="price-wrap">
                            <var className="price">Rs.12000</var>
                            <small className="text-muted">
                              (Rs.12000 each)
                            </small>
                          </div>
                        </td>
                        <td className="text-right">
                          <button className="btn btn-outline-danger btn-round">
                            Remove
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="order_total">
                    <div className="order_total_content text-md-right">
                      <div className="order_total_title">Cart Total:</div>
                      <div className="order_total_amount">Rs.22000</div>
                    </div>
                  </div>
                  <div className="cart_buttons">
                    <button
                      type="button"
                      className="button cart_button_clear"
                      onClick={() => history.push("/smartphones")}
                    >
                      Continue Shopping
                    </button>
                    <button
                      type="button"
                      className="button cart_button_checkout"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Cart);
