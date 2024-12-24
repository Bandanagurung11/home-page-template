import React from "react";
import logo from "./logo-2.png";
import cart from "./cart.png";

export default function app() {
  return (
    <div>
      <div className="bg-[#092837] ">
        <div className=" flex justify-between items-center px-16">
          <img className="color-white" src={logo} alt="logo-image" />

          <div className="flex gap-10 text-white">
            <p>Home</p>
            <p>Pages</p>
            <p>Blogs</p>
            <p>Features</p>
            <p>Help</p>
          </div>
          <p className=" p-4 rounded-2xl h-12 w-16 bg-orange-900 border-2xl">
            <img src={cart} alt="cart-image" />
            Buy now
          </p>
        </div>

        {/* herosection */}
        <div className=" mt-20  text-center  flex flex-col items-center gap-10 text-white">
          <p className="text-white text-5xl w-8/12 mx-auto font-semibold">Premium Business & consulting
          Elementor WordPress theme</p>
          <p className="w-5/12 mx-auto ">The most customizable WordPress theme with 12+ demos, 1000+ sections, 100+ pages and enjoy smooth GSAP animations</p>
          <button className="border h-12 w-46 p-12 mb-20">Purchase Binox now</button>

        </div>
      </div>
    </div>
  );
}
