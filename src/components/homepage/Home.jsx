import React from "react";
import "./Home.css";
import NavBar from "../layout/NavBar";
import ProductBox from "./ProductBox";
import Footer from "../layout/Footer";
import Showcase from "./Showcase";

function Home() {
  return (
    <>
      <NavBar />
      <ProductBox />
      <Showcase />
      <Footer />
    </>
  );
}

export default Home;
