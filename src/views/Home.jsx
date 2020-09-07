import React from "react";
import "./Home.css";
import NavBar from "../components/layout/NavBar";
import ProductBox from "../components/homepage/ProductBox";
import Footer from "../components/layout/Footer";
import Showcase from "../components/homepage/Showcase";
import { Slide, Fade } from "react-awesome-reveal";

function Home() {
  return (
    <div className="bg-gray">
      <NavBar />
      <Slide>
        <ProductBox />
      </Slide>
      <Fade>
        <Showcase />
      </Fade>
      <Footer />
    </div>
  );
}

export default Home;
