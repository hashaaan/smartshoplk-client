import React from "react";
import "./Home.css";
import NavBar from "../components/layout/NavBar";
import ProductBox from "../components/homepage/ProductBox";
import Footer from "../components/layout/Footer";
import Showcase from "../components/homepage/Showcase";
import { Slide, Fade } from "react-awesome-reveal";

function Home() {
  return (
    <>
      <NavBar />
      <Slide>
        <ProductBox />
      </Slide>
      <Fade>
        <Showcase />
      </Fade>
      <Footer />
    </>
  );
}

export default Home;
