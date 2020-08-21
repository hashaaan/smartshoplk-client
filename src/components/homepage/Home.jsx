import React from "react";
import "./Home.css";
// import Jumbotron from "./Jumbotron";
import NavBar from "../layout/NavBar";
import ProductBox from "./ProductBox";

function Home() {
  return (
    <>
      <NavBar />
      <ProductBox />
      {/* <main role="main">
        <Jumbotron />
      </main> */}
    </>
  );
}

export default Home;
