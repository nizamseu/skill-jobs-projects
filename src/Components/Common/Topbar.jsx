import { LucideHeart, LucideMove, ShoppingBag, User2 } from "lucide-react";
import React, { useContext } from "react";
import { CartContext } from "../../App";
import { Link } from "react-router";
export default function Topbar() {
  const [cart] = useContext(CartContext);
  console.log("====================================");
  console.log("cart", cart);
  console.log("====================================");
  // const cart = localStorage.getItem("cart");
  // const cardData = JSON.parse(cart) || [];

  return (
    <div className=" sticky top-0 z-20  bg-[#828282] p-2 ">
      <div className=" max-w-7xl mx-auto flex justify-between items-center">
        {/* logo and name  */}
        <Link to="/" className="flex items-center gap-2  ">
          <img className=" w-10" src="/images/logo.png" alt="" />
          <h3 className=" text-white text-2xl font-bold">Comforty</h3>
        </Link>
        {/* Search  */}
        <div className=" hidden lg:block">
          <div class="w-full  min-w-[200px] max-w-[400px] mx-auto">
            <div class="relative  flex items-center">
              <input
                class="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-2 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="UI Kits, Dashboards..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute w-5 h-5 top-2.5 right-2.5 text-slate-600"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* cart, wishlist, profile */}
        <div className="flex gap-2 items-center">
          {/* cart  */}
          <Link
            to="/cart"
            className="flex bg-white px-2 py-1 rounded  items-center gap-2"
          >
            <ShoppingBag />
            <span> cart {cart?.length > 0 && cart?.length}</span>
          </Link>
          {/* wishlist  */}
          <div className=" bg-white px-2 py-1 rounded  ">
            <LucideHeart />
          </div>
          {/* profile  */}
          <div className=" bg-white px-2 py-1 rounded  ">
            <User2 />
          </div>
        </div>
      </div>
    </div>
  );
}
