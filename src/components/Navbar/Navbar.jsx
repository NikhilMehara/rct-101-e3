import React,{useState} from "react";
import { Link } from "react-router-dom";

// use react-router Link or NavLink

const Navbar = () => {


  return (
    <div data-cy="navbar">
      <Link to="/" data-cy="navbar-home-link">Home</Link>
      <span data-cy="navbar-cart-items-count">
        {/* count here */}
        cart item : {0}
      </span>
      <button data-cy="navbar-login-logout-button">
        Login
      </button>
    </div>
  );
};

export default Navbar;
