import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { connect } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { Modal, InputNumber } from "antd";
import NavBar from "../components/layout/NavBar";
import Jumbotron from "../components/layout/Jumbotron";
import Footer from "../components/layout/Footer";
import TimeAgo from "../components/layout/TimeAgo";
import "./Smartphones.css";

const style = {
  imgStyle: {
    height: "340px",
    width: "100%",
    display: "block",
    padding: "10px",
  },
};

class Smartphones extends Component {
  state = {
    items: [],
    addToCartModalVisible: false,
    quantity: 1,
    selectedItem: null,
    addToCartLoading: false,
  };

  componentDidMount() {
    const { getSmartphones } = this.props;
    getSmartphones();
  }

  showAddToCart = (item) => {
    this.setState({ addToCartModalVisible: true, selectedItem: item });
  };

  onCancelModal = () => {
    this.setState({ addToCartModalVisible: false, quantity: 1 });
  };

  onChangeQuantity = (quantity) => {
    this.setState({ quantity });
  };

  handleAddToCart = () => {
    const { addToCart } = this.props;
    const { quantity, selectedItem } = this.state;
    this.setState({ addToCartLoading: true });
    addToCart({ smartphoneId: selectedItem._id, qty: quantity })
      .then((res) => {
        this.setState({ addToCartLoading: false });
        if (res.success) {
          this.setState({ addToCartModalVisible: false });
        }
      })
      .catch((err) => {
        this.setState({ addToCartLoading: false });
        console.log(err);
      });
  };

  render() {
    const { smartphones } = this.props;
    const { addToCartModalVisible, quantity, addToCartLoading } = this.state;

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
                    <Fade>
                      <div
                        className="card mb-4 box-shadow"
                        style={{ height: "550px" }}
                      >
                        <img
                          className="card-img-top"
                          data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                          alt="Product"
                          style={style.imgStyle}
                          src={smartphone.imgUrl && smartphone.imgUrl}
                          data-holder-rendered="true"
                        />
                        <div className="card-body">
                          <h5
                            className="card-title"
                            title={smartphone.name && smartphone.name}
                          >
                            {smartphone.name && smartphone.name}
                          </h5>
                          <p className="card-text">
                            {smartphone.description && smartphone.description}
                          </p>
                          <span className="badge badge-pill badge-success">
                            {smartphone.color && smartphone.color}
                          </span>
                          <ReactStars
                            count={5}
                            value={smartphone.rating ? smartphone.rating : 0}
                            edit={false}
                            //onChange={() => {}}
                            size={24}
                            activeColor="#ffd700"
                          />
                          <h6 className="price">
                            {smartphone.currency && smartphone.currency}{" "}
                            {smartphone.price && smartphone.price.toFixed(2)}
                          </h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <div
                              className="btn-group"
                              style={{ position: "absolute", bottom: "20px" }}
                            >
                              <Link
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                                to={{
                                  pathname: `/product/${smartphone._id}`,
                                }}
                              >
                                View
                              </Link>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                                onClick={() => this.showAddToCart(smartphone)}
                              >
                                Add to Cart
                              </button>
                            </div>
                            {smartphone.createdAt && (
                              <TimeAgo
                                timestamp={smartphone.createdAt}
                                className="text-muted"
                                style={{
                                  position: "absolute",
                                  bottom: "20px",
                                  right: "20px",
                                  padding: "10px",
                                  color: "#6c757d",
                                  fontSize: "80%",
                                  fontWeight: "400",
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </main>
        {/* Add to cart modal */}
        <Modal
          title="Add to Cart"
          visible={addToCartModalVisible}
          onOk={this.handleAddToCart}
          onCancel={this.onCancelModal}
          okText="Add to Cart"
          width={350}
          confirmLoading={addToCartLoading}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span style={{ padding: "5px 10px" }}>Select Quantity : </span>
            <InputNumber
              min={1}
              max={1000}
              defaultValue={1}
              value={quantity}
              onChange={this.onChangeQuantity}
            />
          </div>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  smartphones: state.common.smartphones,
  error: state.member.error,
});

const mapDispatchToProps = (dispatch) => ({
  getSmartphones: dispatch.common.getSmartphones,
  addToCart: dispatch.cart.addToCart,
});

export default connect(mapStateToProps, mapDispatchToProps)(Smartphones);
