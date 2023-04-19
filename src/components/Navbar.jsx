import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const { cart } = useSelector((state) => state.cart);

  const style =
    location.pathname === "/checkout" ? "font-semibold" : "font-normal";

  return (
    <nav className="flex px-20 py-3 justify-between items-center bg-[#fbbd23] text-[rgba(0,0,0,0.7)] w-full fixed top-0 z-30">
      <Link to={"/"} className="font-semibold text-2xl">
        City Food
      </Link>
      <ul className="flex gap-10">
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
          className={`
            ${style} relative
            `}
        >
          Checkout
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-6 z-40 bg-white w-6 h-6 grid place-items-center rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
        <Link
          to={"/orders"}
          className={
            location.pathname === "/orders" ? "font-semibold" : "font-normal"
          }
        >
          My Orders
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
