import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="clearfix">
      <Link
        to="/signup"
        className="btn btn-sm header-signup float-right mt-2 ml-2"
      >
        Sign Up
      </Link>
      <Link
        to="/login"
        className="btn btn-sm btn-outline-success float-right mt-2"
      >
        Login
      </Link>
    </nav>
  );
}

export default Header;
