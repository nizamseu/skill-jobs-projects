import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className=" max-w-7xl mx-auto bg-white p-3 flex justify-between items-center">
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/bout">About</Link>
      </nav>
      <div className="flex gap-2">
        <p>Conrtact:</p>
        <p className=" font-bold">+8801824574819</p>
      </div>
    </div>
  );
}

export default Navbar;
