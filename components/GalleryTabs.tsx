"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { galleryData } from "../components/(data)/gallery-data";



const uniqueCategories = [
  "All The Tatoos",
  ...[...new Set(galleryData.map((item) => item.category))],
];


export default function Gallery() {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("All The Tatoos");

  const filteredProjects = galleryData.filter((item) =>
    category === "All The Tatoos" ? item : item.category === category
  );

  return (
    <section className="min-h-screen pt-12">
      <div className="px-4 mx-auto">
        <h2 className=" text-center mx-auto">Gallery</h2>
        <div className="text-center max-w-lg mx-auto py-10">
          <h4 className="text-xl mb-2">Welcome to Skin Canvas Studio</h4>
          <p className="text-base">Our gallery features a collection of tattoo designs from our talented artists. Browse through our gallery to find inspiration for your next tattoo.</p>
        </div>

        <Tabs defaultValue={category} className="mb-12 xl:mb-24">
          <TabsList className="grid md:grid-cols-7 w-full max-w-[1100px] h-full mb-12 mx-auto md:border dark:border-none ">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  key={index}
                  value={category}
                  className="capitalize w-36"
                  onClick={() => setCategory(category)}
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="grid grid-cols-1 w-full mx-auto md:gap-5">
            {filteredProjects.map((project, index) => (
              <div key={index}>
                <div className="mx-auto w-full shadow-xl dark:shadow-secondary dark:shadow-lg border max-w-[1520px] mb-16 rounded-xl">
                  <h2 className="px-4 pt-10 text-center">{project.name}</h2>
                  <p className="text-center text-muted-foreground text-lg font-light p-5">
                    {project.description}
                  </p>
                  <div className="mx-auto pb-10">
                    {project.gridLayout}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}




