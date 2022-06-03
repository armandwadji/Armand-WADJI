import React from "react";
import { Link } from "react-router-dom";
import Btn from "./Btn";
import DarkMode from "./DarkMode";

const Header = () => {
  const hideSection = (e) => {
    document.querySelector("section.active").classList.toggle("fade-out");

    document.querySelector(".nav").classList.toggle("active");
  };
  return (
    <div className="header hover" onClick={hideSection}>
      <div className="container">
        <div className="row flex-end ">
          <DarkMode />
          <Btn
            type="button"
            clas="nav-toggler  "
            name={<span className="hover"></span>}
          />

          <nav className="nav">
            <div className="nav-inner">
              <ul>
                {/* Armand-WADJI */}
                <Link to="/" className="nav-item">
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
