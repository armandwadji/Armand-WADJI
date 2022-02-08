import React from "react";
import { Link } from "react-router-dom";
import Btn from "./Btn";

const Header = () => {
  const hideSection = () => {
    document.querySelector("section.active").classList.toggle("fade-out");

    document.querySelector(".nav").classList.toggle("active");
    // document.querySelector(".nav-toggler").classList.toggle("active");
  };
  return (
    <div className="header hover" onClick={hideSection}>
      <div className="container">
        <div className="row flex-end ">
          <Btn
            type="button"
            clas="nav-toggler  "
            name={<span className="hover"></span>}
          />

          <nav className="nav">
            <div className="nav-inner">
              <ul>
                <Link to="/Armand-WADJI" className="nav-item">
                  <li> Home</li>
                </Link>
                <Link to="/about" className="nav-item">
                  <li>about</li>
                </Link>
                <Link to="/portfolio" className="nav-item">
                  <li> portfolio</li>
                </Link>
                <Link to="/contact" className="nav-item">
                  <li> contact</li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
