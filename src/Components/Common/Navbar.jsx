import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className=" max-w-7xl mx-auto bg-white p-3 flex justify-between items-center">
      <nav className="flex gap-4">
        <Link className=" text-gray-600 hover:text-green-400 font-bold" to="/">
          Home
        </Link>
        <Link
          className=" text-gray-600 hover:text-green-400 font-bold"
          to="/products"
        >
          Products
        </Link>
        <Link
          className=" text-gray-600 hover:text-green-400 font-bold"
          to="/categories"
        >
          Categories
        </Link>
        <Link
          className=" text-gray-600 hover:text-green-400 font-bold"
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className=" text-gray-600 hover:text-green-400 font-bold"
          to="/bout"
        >
          About
        </Link>
      </nav>
      <div className="flex gap-2">
        <p>Conrtact:</p>
        <p className=" font-bold">+8801824574819</p>
      </div>
    </div>
  );
}

export default Navbar;
