import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Products({ categories }) {
  const [products, setProducts] = useState([]);

  const loadProducts = () => {
    axios.get("https://dummyjson.com/products?limit=9").then((res) => {
      setProducts(res.data.products);
    });
  };
  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <div className=" max-w-7xl mx-auto">
      <h2 className=" mt-10 text-2xl font-bold text-center">Our Producs</h2>
      <div className="flex my-4 justify-center items-center gap-4">
        {categories?.slice(0, 4)?.map((item) => {
          return (
            <button className=" hover:text-green-500 hover:cursor-pointer">
              <p className=" text-lg  font-semibold text-center">
                {item?.name}
              </p>
            </button>
          );
        })}
      </div>

      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((item) => {
          return <ProductCard data={item} />;
        })}
      </div>
    </div>
  );
}
