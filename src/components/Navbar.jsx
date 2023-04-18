import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex px-10 py-3 justify-between items-center">
      <Link to={"/"}>City Food</Link>
      <ul className="flex gap-4">
        <Link
          to="/"
          className={
            location.pathname === "/" ? "font-semibold" : "font-normal"
          }
        >
          Create Thali
        </Link>
        <Link
          to="/checkout"
          className={
            location.pathname === "/checkout" ? "font-semibold" : "font-normal"
          }
        >
          Checkout
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
