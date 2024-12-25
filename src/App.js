import React from "react";
import logo from "./logo-2.png";
import cart from "./cart.png";
import first from "./gallery-s-1.webp";
import second from "./gallery-s-2.webp";
import third from "./gallery-s-3.webp";
import fourth from "./gallery-s-5.webp";
import fifth from "./gallery-s-4.png";

export default function app() {
  return (
    <div className="mx-0 my-0">
      <div className="bg-[#092837] py-8">
        {/* navbar section */}
        <div className=" flex justify-between items-center px-16">
          <img className="color-white" src={logo} alt="logo-image" />

          <div className="flex gap-10 text-[#abafb0] div">
            <div className="flex items-center">
              <p className=" hover:text-white cursor-pointer">Home</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m6 9l6 6l6-6"
                />
              </svg>
            </div>

            <div className="flex items-center">
              <p className=" hover:text-white cursor-pointer"> Pages </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m6 9l6 6l6-6"
                />
              </svg>
            </div>

            <div className="flex items-center">
              <p className=" hover:text-white cursor-pointer">Blogs</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m6 9l6 6l6-6"
                />
              </svg>
            </div>

            <div className="flex items-center">
              <p className=" hover:text-white cursor-pointer">Features </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m6 9l6 6l6-6"
                />
              </svg>
            </div>

            <div className="flex items-center">
              <p className=" hover:text-white cursor-pointer">Help </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m6 9l6 6l6-6"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-4 h-12 w-30 p-4 rounded-full bg-[#8ff2ff] hover:cursor-pointer  hover:bg-neutral-300">
            <img src={cart} alt="cart-image" />
            <p> Buy now</p>
          </div>
        </div>

        {/* herosection */}
        <div className=" mt-20  text-center  flex flex-col items-center gap-10 text-white">
          <p className="text-white text-5xl w-8/12 mx-auto font-semibold">
            Premium Business & consulting Elementor WordPress theme
          </p>
          <p className="w-5/12 mx-auto  text-[#abafb0] ">
            The most customizable WordPress theme with 12+ demos, 1000+
            sections, 100+ pages and enjoy smooth GSAP animations
          </p>
          <button className=" border-2 px-6 py-4 rounded-full">
            Purchase Binox now
          </button>
        </div>

        {/* image section */}
        <div className="flex mt-20 gap-2">
          <img className="h-96 w-44" src={first} alt="image1" />
          <img className="h-44 w-44" src={second} alt="image2" />
          <img className="h-96 w-6/12" src={third} alt="image3" />

          <div className="flex flex-col gap-10 items-center">
            <img className="h-16 w-16" src={fifth} alt="image5" />
            <img className="h-72 w-64" src={fourth} alt="image4" />
          </div>
        </div>
      </div>

      {/* second section */}

      <div className="bg-[#f9f9fb] pt-24">
        <div className="flex w-11/12 m-auto justify-between">
          <p className=" text-5xl">Exclusive Features</p>
          <div className="flex gap-4">
            <button className="border-2 border-[#cb8efc] rounded-full px-6 py-4 text-lg">
              Live Customization
            </button>
            <button className="border-2 border-[#afe699] rounded-full px-6 py-4 text-lg">
              12+ Demos
            </button>
            <button className="border-2 border-[#f6bbc5] rounded-full px-6 py-4 text-lg">
              1000+ Sections
            </button>
          </div>
        </div>
        {/* first */}

        <div className="flex justify-between mt-16 w-10/12 m-auto gap-2">
          <div className="border bg-[#ffffff] p-6">
            <p>icone</p>
            <p>Customizable with Elementor</p>
          </div>

          <div className="border bg-[#ffffff] p-6">
            <p>icon</p>
            <p>Header and Footer Builder</p>
          </div>

          <div className="border bg-[#ffffff] p-6">
            <p>icon</p>
            <p>Pre Built Offcanvas</p>
          </div>

          <div className="border bg-[#ffffff] p-6">
            <p>icon</p>
            <p>Pre Built Offcanvas</p>
          </div>

          <div className="border bg-[#ffffff] p-6">
            <p>icon</p>
            <p>Animation Builder (GSAP)</p>
          </div>
        </div>

        {/* second */}
        <div className="flex justify-between mt-6 w-10/12 m-auto gap-2">
          <div className="border bg-[#ffffff] p-6">
            <p>icone</p>
            <p>Customizable with Elementor</p>
          </div>

          <div className="border bg-[#ffffff] p-6">
            <p>icon</p>
            <p>Header and Footer Builder</p>
          </div>

          <div className="border bg-[#ffffff] p-6">
            <p>icon</p>
            <p>Pre Built Offcanvas</p>
          </div>

          <div className="border bg-[#ffffff] p-6">
            <p>icon</p>
            <p>Pre Built Offcanvas</p>
          </div>

          <div className="border bg-[#ffffff] p-6">
            <p>icon</p>
            <p>Animation Builder (GSAP)</p>
          </div>
        </div>

        {/* third */}
        <div className="flex justify-between mt-6 w-10/12 m-auto gap-2">
          <div className="border bg-[#ffffff] p-6">
            <p>icone</p>
            <p>Customizable with Elementor</p>
          </div>

          <div className="border bg-[#ffffff] p-6">
            <p>icon</p>
            <p>Header and Footer Builder</p>
          </div>

          <div className="border bg-[#ffffff] p-6">
            <p>icon</p>
            <p>Pre Built Offcanvas</p>
          </div>

          <div className="border bg-[#ffffff] p-6">
            <p>icon</p>
            <p>Pre Built Offcanvas</p>
          </div>

          <div className="border bg-[#ffffff] p-6">
            <p>icon</p>
            <p>Animation Builder (GSAP)</p>
          </div>
        </div>

        {/* fourth */}
        <div className="flex justify-between mt-6 w-6/12 m-auto gap-2">
          <div className="border bg-[#ffffff] p-6">
            <p>icone</p>
            <p>Customizable with Elementor</p>
          </div>

          <div className="border bg-[#ffffff] p-6">
            <p>icon</p>
            <p>Header and Footer Builder</p>
          </div>

          <div className="border bg-[#ffffff] p-6">
            <p>icon</p>
            <p>Pre Built Offcanvas</p>
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="bg-white">
        <div className="pt-16 flex flex-col gap-6 w-7/12 m-auto">
          <p className="text-5xl">An extensive selection of 12+ ready-made Business websites.</p>
          <p>
            Best-in-class designs to get started. Install any demo or template
            with a single click. Mix and match section templates to create
            unique sites.
          </p>
        </div>
      </div>
    </div>
  );
}
