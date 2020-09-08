import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import "./Cart.css";

const currency = "LKR";

const calcPrice = (unitPrice, quantity) => {
  let price = unitPrice * quantity;
  return price.toFixed(2);
};

const getDate = (timestamp) => {
  return moment(timestamp).format("DD/MM/YYYY - HH:mm a");
};

class Orders extends Component {
  async componentDidMount() {
    const { getOrderItems } = this.props;
    await getOrderItems()
      .then((res) => {})
      .catch((err) => {});
  }
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
                      Orders
                    </li>
                  </ol>
                </nav>

                <div className="cart_container">
                  <div className="cart_title">
                    Orders<small> ({items ? items.length : 0}) </small>
                  </div>
                  <Fade>
                    {items.length > 0 &&
                      items.map((order, index) => (
                        <table key={index} className="table table-hover">
                          <tbody>
                            <tr>
                              <td
                                scope="col"
                                width="180"
                                style={{ verticalAlign: "unset" }}
                              >
                                <div
                                  style={{
                                    fontWeight: "bold",
                                    fontSize: "14px",
                                  }}
                                >
                                  {getDate(order.createdAt)}
                                </div>
                              </td>
                              <td scope="col" width="800">
                                <table className="table table-hover shopping-cart-wrap">
                                  <thead className="text-muted">
                                    <tr>
                                      <th scope="col">Product</th>
                                      <th scope="col" width="120">
                                        Quantity
                                      </th>
                                      <th scope="col" width="160">
                                        Order Amount
                                      </th>
                                      <th
                                        scope="col"
                                        width="180"
                                        className="text-right"
                                      >
                                        Order Action
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {order.items.map((item, index) => (
                                      <tr key={index}>
                                        <td>
                                          <figure className="media">
                                            <div className="img-wrap">
                                              <img
                                                src={item.smartphone.imgUrl}
                                                className="img-thumbnail img-sm"
                                                alt="..."
                                              />
                                            </div>
                                            <figcaption className="media-body">
                                              <h6 className="title text-truncate">
                                                {item.smartphone.name}
                                              </h6>
                                              <dl className="param param-inline small">
                                                <dt>Model No: </dt>
                                                <dd>
                                                  {item.smartphone.modelNo}
                                                </dd>
                                              </dl>
                                              <dl className="param param-inline small">
                                                <dt>Color: </dt>
                                                <dd>
                                                  {item.smartphone.color
                                                    ? item.smartphone.color
                                                    : "Unspecified"}
                                                </dd>
                                              </dl>
                                            </figcaption>
                                          </figure>
                                        </td>
                                        <td>
                                          {item.qty ? item.qty : "Unspecifed"}
                                        </td>
                                        <td>
                                          <div className="price-wrap">
                                            <var
                                              className="price"
                                              style={{ fontSize: "16px" }}
                                            >
                                              {currency}{" "}
                                              {calcPrice(
                                                item.smartphone.price,
                                                item.qty
                                              )}
                                            </var>
                                            <small className="text-muted">
                                              ({currency}{" "}
                                              {item.smartphone.price.toFixed(2)}{" "}
                                              each)
                                            </small>
                                          </div>
                                        </td>
                                        <td className="text-right">
                                          <button className="btn btn-sm btn-outline-success">
                                            Confirm Received
                                          </button>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      ))}
                  </Fade>
                  <div className="cart_buttons">
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => history.push("/smartphones")}
                    >
                      <FontAwesomeIcon icon={faShoppingCart} /> Continue
                      Shopping
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
  items: state.order.items,
  //error: state.member.error,
});

const mapDispatchToProps = (dispatch) => ({
  getOrderItems: dispatch.order.getOrderItems,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Orders));
