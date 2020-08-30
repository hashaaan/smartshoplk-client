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
  faStar,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/layout/NavBar";
import "./ProductView.css";
import Footer from "../components/layout/Footer";

const ProductView = () => {
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
                  Product
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
                  src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg"
                  alt="..."
                />
                {/* <p className="text-center">Zoom</p> */}
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 add_to_cart_block">
            <div className="card bg-light mb-3">
              <div className="card-body">
                <p className="price">LKR. 1050099.00</p>
                {/* <p className="price_discounted">149.90 $</p> */}
                <form method="get" action="cart.html">
                  <div className="form-group">
                    <label htmlFor="colors">Color :</label>
                    <select
                      className="custom-select"
                      id="colors"
                      onChange={() => {}}
                    >
                      <option defaultValue>Select</option>
                      <option value="1">Blue</option>
                      <option value="2">Red</option>
                      <option value="3">Green</option>
                    </select>
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
                  3 reviews
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  (4/5)
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
                  Le Lorem Ipsum est simplement du faux texte employé dans la
                  composition et la mise en page avant impression. Le Lorem
                  Ipsum est le faux texte standard de l'imprimerie depuis les
                  années 1500, quand un peintre anonyme assembla ensemble des
                  morceaux de texte pour réaliser un livre spécimen de polices
                  de texte. Il n'a pas fait que survivre cinq siècles, mais
                  s'est aussi adapté à la bureautique informatique, sans que son
                  contenu n'en soit modifié. Il a été popularisé dans les années
                  1960 grâce à la vente de feuilles Letraset contenant des
                  passages du Lorem Ipsum, et, plus récemment, par son inclusion
                  dans des applications de mise en page de texte, comme Aldus
                  PageMaker.
                </p>
                <p className="card-text">
                  Contrairement à une opinion répandue, le Lorem Ipsum n'est pas
                  simplement du texte aléatoire. Il trouve ses racines dans une
                  oeuvre de la littérature latine classNameique datant de 45 av.
                  J.-C., le rendant vieux de 2000 ans. Un professeur du
                  Hampden-Sydney College, en Virginie, s'est intéressé à un des
                  mots latins les plus obscurs, consectetur, extrait d'un
                  passage du Lorem Ipsum, et en étudiant tous les usages de ce
                  mot dans la littérature classNameique, découvrit la source
                  incontestable du Lorem Ipsum. Il provient en fait des sections
                  1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des
                  Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage,
                  très populaire pendant la Renaissance, est un traité sur la
                  théorie de l'éthique. Les premières lignes du Lorem Ipsum,
                  "Lorem ipsum dolor sit amet...", proviennent de la section
                  1.10.32.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12" id="reviews">
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
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default ProductView;
