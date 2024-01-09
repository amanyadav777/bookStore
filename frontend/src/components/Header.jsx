import React from "react";
import { Banner1, Banner2, Banner3 } from "../images";

const images = [Banner1, Banner2, Banner3];

const Header=({ title, image, type })=> {
  return (
    <div className="w-full h-[100vh]">
      <div className="relative w-full h-full">
        <img
          src={image ?? images[Math.floor(Math.random() * images.length)]}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px4">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
          {title}
        </h1>
        {type && (
          <p className="text-sm mt-4 text-center text-green-500 bg-[#00000090] px-6 py-4 rounded-full">
            Welcome to Book Store, your literary passport to captivating
            adventures!
            <br className="hidden md:block" />
            Explore a treasury of enchanting stories that span the globe and
            ignite your imagination.
          </p>
        )}
      </div>
    </div>
  );
}

export default Header;
