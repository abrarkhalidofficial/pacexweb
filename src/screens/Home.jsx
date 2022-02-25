import React from "react";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Jumbotron from "../components/Jumbotron";

export default function Home() {
  return (
    <>
      <Jumbotron />
      <FAQ />
      <Contact />
    </>
  );
}
