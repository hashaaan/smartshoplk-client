import React from "react";
import { Link } from "react-router-dom";

const Jumbotron = ({ heading, subheading, showbuttons, ...props }) => {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">
          {heading ? heading : "Welcome to Smartshop.lk!"}
        </h1>
        <p className="lead text-muted">
          {subheading ? subheading : "Buy your desired smartphone!"}
        </p>
        {showbuttons && (
          <p>
            <Link to="/smartphones" className="btn btn-primary my-2 mx-1">
              View Collection
            </Link>
            <Link to="/accessories" className="btn btn-secondary my-2">
              View Accessories
            </Link>
          </p>
        )}
      </div>
    </section>
  );
};

export default Jumbotron;
