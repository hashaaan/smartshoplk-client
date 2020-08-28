import React from "react";
import "./Home.css";
import NavBar from "../components/layout/NavBar";
import ProductBox from "../components/homepage/ProductBox";
import Footer from "../components/layout/Footer";
import Showcase from "../components/homepage/Showcase";

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
