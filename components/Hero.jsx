import React from "react";
import ImageSlideShow from "./image_slideshow";
import HomeBtns from "./home_btns";

const Hero = () => {
  return (
    <header className="flex w-full justify-center mt-16 flex-wrap md:gap-8 gap-4">
      <div className="h-[25rem]">
        <ImageSlideShow />
      </div>

      <div className="flex flex-col md:justify-center">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
            <span className="italic text-slate-400 font-semibold antialiased">
              Kentec:
            </span>{" "}
            Elevating Surfaces <br />
            with Elegance and Durability
          </h1>
          <p className="font-mono text-gray-400">
            Premium Concrete Stamping Solutions for Stunning, Long-Lasting
            Floors
          </p>
        </div>
        <HomeBtns />
      </div>
    </header>
  );
};

export default Hero;
