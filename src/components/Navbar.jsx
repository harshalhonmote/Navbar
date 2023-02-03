import React, { useRef } from "react";
import { FaBars, FaTimes,FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,} from "react-icons/fa";
import { TbLetterH} from "react-icons/tb";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive");
  };

  return (
    <div className="container">
      <div>
      <TbLetterH size={40} />
      <h3>CrazyNine</h3>
      </div>
     
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Services</a>
        <a href="/#">About</a>
        <a href="/#">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <div className="social">
      <a href="/#"><FaFacebookSquare size={40} className="facebook"/></a>
      <a href="/#"><FaInstagramSquare size={40} className="instagram" /></a>
      <a href="/#"><FaYoutubeSquare size={40} className="youtube"/></a>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;