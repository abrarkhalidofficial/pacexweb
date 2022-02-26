import React from "react";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import GrowUp from "../components/GrowUp";
import Jumbotron from "../components/Jumbotron";

export default function Home() {
  return (
    <>
      <Jumbotron />
      <FAQ />
      <GrowUp />
      <Contact />
    </>
  );
}
