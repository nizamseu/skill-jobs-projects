import React from "react";

export default function Test() {
  return (
    <div className=" h-screen">
      <h1>Grid</h1>

      <div className=" grid grid-cols-5">
        <div className=" h-32 bg-green-200 text-center m-1">1</div>
        <div className=" h-32 bg-green-200 text-center m-1">2</div>
        <div className="  h-32 bg-green-200 text-center m-1">3</div>
        <div className="  h-32 bg-green-200 text-center m-1">4</div>
        <div className="  h-32 bg-green-200 text-center m-1">5</div>
        <div className=" col-span-2 h-32 bg-green-200 text-center m-1">6</div>
        <div className="  h-32 bg-green-200 text-center m-1">7</div>
        <div className="  h-32 bg-green-200 text-center m-1">8</div>
        <div className=" col-span-3 h-32 bg-green-200 text-center m-1">9</div>
        <div className="  h-32 bg-green-200 text-center m-1">10</div>{" "}
        <div className="  h-32 bg-green-200 text-center m-1">11</div>
        <div className="  h-32 bg-green-200 text-center m-1">12</div>
      </div>
    </div>
  );
}
