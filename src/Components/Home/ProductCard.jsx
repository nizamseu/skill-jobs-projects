import React from "react";
import { Heart, ShoppingCart } from "lucide-react";

export default function ProductCard({ isFeatured = false, data }) {
  return (
    <div className=" border border-gray-100 rounded ">
      <div className=" relative">
        <img
          className="  rounded-2xl h-[312px] w-[312px]"
          src={data?.thumbnail}
          alt=""
        />
        {isFeatured && (
          <button className=" absolute top-3 left-3 bg-green-200 px-2 py-1 rounded">
            New
          </button>
        )}
        {isFeatured && (
          <button>
            <Heart className=" absolute top-3 right-3" />
          </button>
        )}
      </div>

      <div className=" border-t border-gray-100 py-2 px-4  flex justify-between items-center">
        <div>
          <h2 className=" text-lg font-semibold text-green-500">
            {data?.title}
          </h2>
          <p className=" font-bold">${data?.price}</p>
        </div>
        <button className=" bg-green-400 text-white p-2 rounded">
          <ShoppingCart />
        </button>
      </div>
    </div>
  );
}
