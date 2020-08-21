import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./layout/NavBar";

const Smartphones = () => {
  return (
    <>
      <NavBar />
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Welcome to Smartshop.lk!</h1>
          <p class="lead text-muted">Buy your desired smartphone!</p>
          <p>
            <Link to="/smartphones" class="btn btn-primary my-2 mx-2">
              View Collection
            </Link>
            <Link to="/accessories" class="btn btn-secondary my-2">
              View Accessories
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Smartphones;
