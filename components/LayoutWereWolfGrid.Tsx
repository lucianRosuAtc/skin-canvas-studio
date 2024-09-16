import React from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function LayoutWereWolfGrid() {
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
      Werewolf Sleve Tattoo
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Werewolf tattoo design with photo-realistic details. It&apos;s the perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Ultrarealistic Wolf Head with Forest Background
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
       Ultrarealistic wolf head with forest background tattoo design with photo-realistic details. It&apos;s the perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Werewolf Head in Black and Gray
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Werewolf Head in Black and Gray tattoo design with photo-realistic details. It&apos;s the perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
       Red Head Wolf in the Forest
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Red Head Wolf in the Forest tattoo design with photo-realistic details. It&apos;s the perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Scary Head Werewolf
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Scary Head Werewolf tattoo design with photo-realistic details. It&apos;s the perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};




const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail:
    "/img/werewolf/werewolf3.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
    "/img/werewolf/werewolf2.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
    "/img/werewolf/werewolfForest.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail:
      "/img/werewolf/werewolf-forest-red eye.jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail:
      "/img/werewolf/werewolf scary.webp",
  },

];

