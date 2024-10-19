'use client';

import { Link } from 'react-scroll';
import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [status, setStatus] = useState(false);
  const handleNavClick = () => {
    setStatus(!status);
  };

  return (
    <div className="nav">
      <div className="heading">
        <h2>
          <Link className="navParts" to="home">INNOVATE 2.0</Link>
        </h2>
      </div>
      <div className="NavBar-desc">
        <Link className="navParts" to="home">Home</Link>
        <Link className="navParts" to="about">About</Link>
        <Link className="navParts" to="prize">Prize</Link>
        <Link className="navParts" to="faq">FAQs</Link>
        <Link className="navParts" to="sponser">Partners</Link>
      </div>

      <button type="button" onClick={handleNavClick} className="menuButton">
        <img id="menuImg" src="/menuBtn.png" alt="Menu" />
      </button>

      <div style={{ display: status ? 'block' : 'none' }} className="NavBar-description">
        <button type="button" onClick={handleNavClick} className="crossImg">
          <img src="/whiteCross.png" alt="Close Menu" />
        </button>

        <Link className="navParts" to="home">Home</Link><br />
        <Link className="navParts" to="about">About</Link><br />
        <Link className="navParts" to="prize">Prize</Link><br />
        <Link className="navParts" to="faq">FAQs</Link><br />
        <Link className="navParts" to="sponser">Partners</Link>
      </div>
    </div>
  );
}

export default Navbar;