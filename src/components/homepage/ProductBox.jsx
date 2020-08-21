import React from "react";
import { Link } from "react-router-dom";

const ProductBox = () => {
  return (
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 font-weight-normal">
          Welcome to Smartshop.lk!
        </h1>
        <p className="lead font-weight-normal">Buy your desired smartphone!</p>
        <Link className="btn btn-outline-secondary" to="/smartphones">
          Go to Collection
        </Link>
      </div>
      <div className="product-device box-shadow d-none d-md-block"></div>
      <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </div>
  );
};

export default ProductBox;
