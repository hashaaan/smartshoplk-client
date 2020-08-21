import React from "react";

const Jumbotron = () => {
  return (
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">Welcome to Smartshop.lk!</h1>
        <p class="lead text-muted">Buy your desired smartphone!</p>
        <p>
          <a href="#" class="btn btn-primary my-2 mx-2">
            View Collection
          </a>
          <a href="#" class="btn btn-secondary my-2">
            View Accessories
          </a>
        </p>
      </div>
    </section>
  );
};

export default Jumbotron;
