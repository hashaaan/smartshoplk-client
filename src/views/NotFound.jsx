import React from "react";
import NavBar from "../components/layout/NavBar";

function NotFound() {
  return (
    <>
      <NavBar />
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        404 - Page Not Found!
      </h2>
    </>
  );
}

export default NotFound;
