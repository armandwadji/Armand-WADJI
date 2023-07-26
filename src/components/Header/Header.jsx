import React from "react";
import { Link } from "react-router-dom";

import DarkMode from "../DarkMode/DarkMode";
import Btn from "../Btn/Btn";

const Header = () => {
  const hideSection = (e) => {
    document.querySelector("main.active").classList.toggle("fade-out");
    document.querySelector(".nav").classList.toggle("active");
  };

  return (
    <header className='header hover' onClick={hideSection}>
      <div className='container'>
        <div className='row header-buttons '>
          <DarkMode />
          <Btn type='button' clas='nav-toggler' name={<span className='hover'></span>}/>

          <nav className='nav'>
            <div className='nav-inner'>
              <ul>
                <li className='nav-item'>
                  <Link to='/' className="nav-link"> Home </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/about'className="nav-link"> About </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/portfolio' className="nav-link">Projects</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/contact' className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
