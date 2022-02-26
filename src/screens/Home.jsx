import React from "react";
import Contact from "../components/Contact";
import DigitalCoverage from "../components/DigitalCoverage";
import FAQ from "../components/FAQ";
import GrowUp from "../components/GrowUp";
import Jumbotron from "../components/Jumbotron";
import SupplyChainSection from "../components/SupplyChainSection";

export default function Home() {
  return (
    <>
      <Jumbotron />
      <DigitalCoverage />
      <SupplyChainSection />
      <FAQ />
      <GrowUp />
      <Contact />
    </>
  );
}
