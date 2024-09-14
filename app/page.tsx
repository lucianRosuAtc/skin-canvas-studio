import React from "react";
import Hero from "../components/Hero";
import HeroSlider from "../components/HeroSlider";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main className="">
      <HeroSlider />
      <Hero />
      <CTA />
    </main>
  );
}
