
import React from 'react';
import logo from '../assets/logo.png';
import '../styles/NavBar.css';
import serach from '../assets/search.png';
import bag from '../assets/bag.png';
import arrow from '../assets/arrow.png';
function NavBar() {
  return (
    <div className='navbar'>
      <div className='navBarInner'>
        <img src={logo} alt='logo' className='logo' />
        <div className='navLinks'>
            <button className='navButton'>Home<select name='home' className='transparent-select'/></button>
            <button className='navButton'>AboutUs</button>
            <button className='navButton'>Pages<select name='home' className='transparent-select'/></button>
            <button className='navButton'>Service<select name='home' className='transparent-select'/></button>
            <button className='navButton'>News & Events<select name='home' className='transparent-select'/></button>
            <button className='navButton'>ContactUs</button>
            
        </div>
        <div className='extras'>
          <div className='bag'>
            <span className='bagValue'>0</span>
            <img src={bag} className="bagIcon" alt="bagImage" />
          </div>
          <img src={serach} alt="search" />
          <div className='getQoute'>GET QUOTE <img src={arrow} alt='arrow'/> </div>
          <div className='manuButton'>
              <input type="checkbox" id="ham-menu" />
              <label htmlFor="ham-menu">
                <div className="hide-des">
                  <span className="menu-line"></span>
                  <span className="menu-line"></span>
                  <span className="menu-line"></span>
                  <span className="menu-line"></span>
                  <span className="menu-line"></span>
                  <span className="menu-line"></span>
                </div>
              </label>
              <div className="ham-menu">
                <ul className="centre-text bold-text">
                  <li className='showOnSmallest'>
                              <img src={serach} alt="search" />
                              <div >GET QUOTE <img src={arrow} alt='arrow'/> 
                              </div>
                  </li>
                  <li>Home</li>
                  <li>AboutUs</li>
                  <li>Pages</li>
                  <li>Service</li>
                  <li>News & Events</li>
                  <li>ContactUs</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
