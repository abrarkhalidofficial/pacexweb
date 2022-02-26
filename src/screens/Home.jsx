import React from "react";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import GrowUp from "../components/GrowUp";
import Jumbotron from "../components/Jumbotron";
import SupplyChainSection from "../components/SupplyChainSection";

export default function Home() {
  return (
    <>
      <Jumbotron />
      <SupplyChainSection />
      <FAQ />
      <GrowUp />
      <Contact />
    </>
  );
}
