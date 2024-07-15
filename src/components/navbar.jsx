import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
	<nav className="navbar">
	  <Link to="/" className="navbar-brand">MonApp</Link>
	  <ul className="navbar-nav">
		<li className="nav-item">
		  <Link to="/about" className="nav-link">À propos</Link>
		</li>
		<li className="nav-item">
		  <Link to="/services" className="nav-link">Services</Link>
		</li>
		<li className="nav-item">
		  <Link to="/contact" className="nav-link">Contact</Link>
		</li>
	  </ul>
	</nav>
  );
};

export default Navbar;