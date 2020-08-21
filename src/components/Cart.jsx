import React, { Component } from "react";
import NavBar from "./layout/NavBar";
import Jumbotron from "./layout/Jumbotron";
import "./Cart.css";

class Cart extends Component {
  render() {
    return (
      <>
        <NavBar itemCount={0} />
        {/* <Jumbotron
          heading="Shopping Cart"
          subheading={"Checkout your picked items"}
        /> */}
        <div class="cart_section">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-10 offset-lg-1">
                <div class="cart_container">
                  <div class="cart_title">
                    Shopping Cart<small> (3 items in your cart) </small>
                  </div>

                  <table class="table table-hover shopping-cart-wrap">
                    <thead class="text-muted">
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col" width="120">
                          Quantity
                        </th>
                        <th scope="col" width="120">
                          Price
                        </th>
                        <th scope="col" width="200" class="text-right">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <figure class="media">
                            <div class="img-wrap">
                              <img
                                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg"
                                class="img-thumbnail img-sm"
                              />
                            </div>
                            <figcaption class="media-body">
                              <h6 class="title text-truncate">
                                iPhone 11 Pro Max
                              </h6>
                              <dl class="param param-inline small">
                                <dt>Model No: </dt>
                                <dd>XFERRSA</dd>
                              </dl>
                              <dl class="param param-inline small">
                                <dt>Color: </dt>
                                <dd>Gold</dd>
                              </dl>
                            </figcaption>
                          </figure>
                        </td>
                        <td>4</td>
                        <td>
                          <div class="price-wrap">
                            <var class="price">Rs.12000</var>
                            <small class="text-muted">(Rs.12000 each)</small>
                          </div>
                        </td>
                        <td class="text-right">
                          <a href="" class="btn btn-outline-danger">
                            Remove
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <figure class="media">
                            <div class="img-wrap">
                              <img
                                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg"
                                class="img-thumbnail img-sm"
                              />
                            </div>
                            <figcaption class="media-body">
                              <h6 class="title text-truncate">
                                Product name goes here{" "}
                              </h6>
                              <dl class="param param-inline small">
                                <dt>Model No: </dt>
                                <dd>RRRSXXL</dd>
                              </dl>
                              <dl class="param param-inline small">
                                <dt>Color: </dt>
                                <dd>Red</dd>
                              </dl>
                            </figcaption>
                          </figure>
                        </td>
                        <td>8</td>
                        <td>
                          <div class="price-wrap">
                            <var class="price">Rs.12000</var>
                            <small class="text-muted">(Rs.12000 each)</small>
                          </div>
                        </td>
                        <td class="text-right">
                          <a href="" class="btn btn-outline-danger btn-round">
                            Remove
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <figure class="media">
                            <div class="img-wrap">
                              <img
                                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg"
                                class="img-thumbnail img-sm"
                              />
                            </div>
                            <figcaption class="media-body">
                              <h6 class="title text-truncate">
                                Product name goes here{" "}
                              </h6>
                              <dl class="param param-inline small">
                                <dt>Model No: </dt>
                                <dd>XXLDES</dd>
                              </dl>
                              <dl class="param param-inline small">
                                <dt>Color: </dt>
                                <dd>Black</dd>
                              </dl>
                            </figcaption>
                          </figure>
                        </td>
                        <td>1</td>
                        <td>
                          <div class="price-wrap">
                            <var class="price">Rs.12000</var>
                            <small class="text-muted">(Rs.12000 each)</small>
                          </div>
                        </td>
                        <td class="text-right">
                          <a href="" class="btn btn-outline-danger btn-round">
                            Remove
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div class="order_total">
                    <div class="order_total_content text-md-right">
                      <div class="order_total_title">Cart Total:</div>
                      <div class="order_total_amount">Rs.22000</div>
                    </div>
                  </div>
                  <div class="cart_buttons">
                    <button type="button" class="button cart_button_clear">
                      Continue Shopping
                    </button>
                    <button type="button" class="button cart_button_checkout">
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

export default Cart;
