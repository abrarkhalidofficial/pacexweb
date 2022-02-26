import React from "react";
import Contact from "../components/Contact";
import DigitalCoverage from "../components/DigitalCoverage";
import FAQ from "../components/FAQ";
import FedUpLogistics from "../components/FedUpLogistics";
import Fulfillment from "../components/Fulfillment";
import FulfullingPartner from "../components/FulfullingPartner";
import GrowUp from "../components/GrowUp";
import Jumbotron from "../components/Jumbotron";
import SimplifyOperation from "../components/SimplifyOperation";
import SmarterOperation from "../components/SmarterOperation";
import SoftwareCapabilities from "../components/SoftwareCapabilities";
import SupplyChainSection from "../components/SupplyChainSection";
import WhatWeEnable from "../components/WhatWeEnable";

export default function Home() {
  return (
    <>
      <Jumbotron />
      <SimplifyOperation />
      <FedUpLogistics />
      <WhatWeEnable />
      <Fulfillment />
      <SmarterOperation />
      <FulfullingPartner />
      <SoftwareCapabilities />
      <DigitalCoverage />
      <SupplyChainSection />
      <FAQ />
      <GrowUp />
      <Contact />
    </>
  );
}
