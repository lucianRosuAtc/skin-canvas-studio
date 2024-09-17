import React from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function LayoutMoonGrid() {
  return (
    <div className="h-screen w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Blood Moon
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Blood moon Tattoo design with photo-realistic details. It&apos;s the perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Ultrarealistic Blood Moon
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Blood moon Tattoo design with photo-realistic details. It&apos;s the perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Multiple Moon Tattoo
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
       A color pallet of multiple moons tattoo design with photo-realistic details. It&apos;s the perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
       Three Moons
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
       From Blood Moon to original moon tattoo design with photo-realistic details. 
      </p>
    </div>
  );
};

// MARK: Cards data

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail:
    "/img/moon/bigMoon-I .webp",
     
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-2",
    thumbnail:
    "/img/moon/bloodMoonAndStars-II.webp",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-2",
    thumbnail:
    "/img/moon/manyMoons-III.webp",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail:
      "/img/moon/moons-IV.webp",
  },

];
