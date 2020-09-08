import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { InputNumber } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import "./Cart.css";
import axios from "axios";

const calcCartTotal = (items) => {
  let cartTotal = 0;
  items.map((item) => {
    cartTotal = cartTotal + item.smartphone.price * item.qty;
  });
  return cartTotal.toFixed(2);
};

const calcPrice = (unitPrice, quantity) => {
  let price = unitPrice * quantity;
  return price.toFixed(2);
};

class Cart extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    const { getCartItems } = this.props;

    getCartItems()
      .then((res) => {
        //console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  onChangeQuantity = (quantity, _id) => {
    this.setState({
      loading: true,
    });
    axios
      .put(
        `${process.env.REACT_APP_API_URL}cart/quantity/${_id}`,
        {
          qty: quantity,
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: localStorage.access_token,
            "Content-type": "application/json",
          },
        }
      )
      .then((r) => {
        this.setState({ loading: false });
        if (r.status === 201) {
          const { getCartItems } = this.props;
          getCartItems();
        }
      })
      .catch((e) => {
        this.setState({ loading: false });
        console.log(e);
      });
  };

  render() {
    const { history, items } = this.props;

    console.log(items);

    return (
      <div className="bg-light">
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
                    Shopping Cart
                    <small> ({items ? items.length : 0} items) </small>
                  </div>
                  <Fade>
                    <table className="table table-hover shopping-cart-wrap">
                      <thead className="text-muted">
                        <tr>
                          <th scope="col">Product</th>
                          <th scope="col" width="120">
                            Quantity
                          </th>
                          <th scope="col" width="180">
                            Total Price
                          </th>
                          <th scope="col" width="180" className="text-right">
                            Cart Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.length > 0 ? (
                          items.map((item, index) => (
                            <tr key={index}>
                              <td>
                                <figure className="media">
                                  <div className="img-wrap">
                                    <img
                                      src={
                                        item.smartphone.imgUrl &&
                                        item.smartphone.imgUrl
                                      }
                                      className="img-thumbnail img-sm"
                                      alt="Product Image"
                                    />
                                  </div>
                                  <figcaption className="media-body">
                                    <h6 className="title text-truncate">
                                      {item.smartphone.name
                                        ? item.smartphone.name.toUpperCase()
                                        : "Unspecified"}
                                    </h6>
                                    <dl className="param param-inline small">
                                      <dt>Model No: </dt>
                                      <dd>
                                        {item.smartphone.modelNo
                                          ? item.smartphone.modelNo
                                          : "Unspecified"}
                                      </dd>
                                    </dl>
                                    <dl className="param param-inline small">
                                      <dt>Color: </dt>
                                      <dd>
                                        {item.smartphone.color
                                          ? item.smartphone.color.toUpperCase()
                                          : "Unspecified"}
                                      </dd>
                                    </dl>
                                  </figcaption>
                                </figure>
                              </td>
                              <td>
                                {item.qty ? (
                                  <InputNumber
                                    min={1}
                                    max={1000}
                                    defaultValue={item.qty}
                                    //value={1} // No need to set value by force
                                    onChange={(quantity) =>
                                      this.onChangeQuantity(quantity, item._id)
                                    }
                                    disabled={this.state.loading}
                                  />
                                ) : (
                                  "Unspecified"
                                )}
                              </td>
                              <td>
                                <div className="price-wrap">
                                  <var className="price">
                                    {item.smartphone.currency
                                      ? item.smartphone.currency
                                      : "LKR"}
                                    {". "}
                                    {calcPrice(item.smartphone.price, item.qty)}
                                  </var>
                                  <small className="text-muted">
                                    (
                                    {item.smartphone.currency
                                      ? item.smartphone.currency
                                      : "LKR"}
                                    {". "}
                                    {item.smartphone.price
                                      ? item.smartphone.price.toFixed(2)
                                      : 0}{" "}
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
                          ))
                        ) : (
                          <tr>
                            <td colSpan="4">
                              <h4
                                style={{ textAlign: "center", padding: "40px" }}
                              >
                                No Cart Items Available..!
                              </h4>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </Fade>
                  {items.length > 0 && (
                    <Fade>
                      <div className="order_total">
                        <div className="order_total_content text-md-right">
                          <div className="order_total_title">Cart Total:</div>
                          <div className="order_total_amount">
                            {"LKR."} {calcCartTotal(items)}
                          </div>
                        </div>
                      </div>
                    </Fade>
                  )}
                  <div className="cart_buttons">
                    <button
                      type="button"
                      className="btn btn-success mr-2"
                      onClick={() => history.push("/smartphones")}
                    >
                      <FontAwesomeIcon icon={faShoppingCart} /> Continue
                      Shopping
                    </button>
                    <button
                      type="button"
                      className="btn btn-info"
                      disabled={items.length > 0 ? false : true}
                      onClick={() => history.push("/checkout")}
                    >
                      Checkout
                    </button>
                  </div>
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
  //error: state.member.error,
});

const mapDispatchToProps = (dispatch) => ({
  getCartItems: dispatch.cart.getCartItems,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
