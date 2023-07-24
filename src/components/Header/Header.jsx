import React from "react";
import { Link } from "react-router-dom";

import DarkMode from "../DarkMode/DarkMode";
import Btn from "../Btn/Btn";

const Header = () => {
  const hideSection = (e) => {
    document.querySelector("section.active").classList.toggle("fade-out");
    document.querySelector(".nav").classList.toggle("active");
  };

  return (
    <div className='header hover' onClick={hideSection}>
      <div className='container'>
        <div className='row flex-end '>
          <DarkMode />
          <Btn
            type='button'
            clas='nav-toggler'
            name={<span className='hover'></span>}
          />

          <nav className='nav'>
            <div className='nav-inner'>
              <ul>
                {/* Armand-WADJI */}
                <Link to='/' className='nav-item'>
                  <li>Home</li>
                </Link>
                <Link to='/about' className='nav-item'>
                  <li>About</li>
                </Link>
                <Link to='/portfolio' className='nav-item'>
                  <li>Projects</li>
                </Link>
                <Link to='/contact' className='nav-item'>
                  <li>Contact</li>
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
