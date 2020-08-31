import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faHeart,
  faHome,
  faEnvelope,
  faPhone,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-lg-4 col-xl-3">
            <h5>About</h5>
            <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
            <p className="mb-0">
              Buy your desired smartphone choice for a reasonable price with
              smartshop.lk!
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
            <h5>Informations</h5>
            <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/smartphones">Smartphones</Link>
              </li>
              <li>
                <Link to="/accessories">Accessories</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
            <h5>Others links</h5>
            <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/smartphones">Smartphones</Link>
              </li>
              <li>
                <Link to="/accessories">Accessories</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3">
            <h5>Contact</h5>
            <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon={faHome} className="mr-2" /> smartshop.lk
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
                email@smartshop.lk
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="mr-2" /> + 33 12 14
                15 16
              </li>
              <li>
                <FontAwesomeIcon icon={faPrint} className="mr-2" /> + 33 12 14
                15 16
              </li>
            </ul>
          </div>
          <div className="col-12 copyright mt-3">
            <p className="float-left">
              <a href="#">Back to top</a>
            </p>
            <p className="text-right text-muted">
              created with <FontAwesomeIcon icon={faHeart} /> by{" "}
              <Link to="/">
                <i>smartshop.lk</i>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
