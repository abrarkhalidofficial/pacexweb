import React from "react";
import SupplySectionPic from "../assets/SupplySectionPic.png";
import supplyHeadingBg from "../assets/supplyHeadingBg.png";
import supplychainPic from "../assets/supplychainPic.png";

export default function SupplyChainSection() {
  return (
    <div className="supply__chain__section">
      <img
        src={SupplySectionPic}
        alt="SupplySectionPic"
        className="supply__chain__section__img"
      />

      <img
        src={supplyHeadingBg}
        alt="supplyHeadingBg"
        className="supply__chain__section__heading__img"
      />
      <div className="supply__chain__section__heading">
        MEET CLOUD
        <span>SUPPLY CHAIN</span>
      </div>
      <div className="supply__chain__section__overlay">
        <div className="supply__chain__section__content">
          <img
            src={supplychainPic}
            alt="supplychainPic"
            className="supply__chain__section__content__img"
          />
          <div className="supply__chain__section__content__right">
            <div className="supply__chain__section__content__right__para">
              Cloud Supply Chain is the medium that converges the digital and
              physical tools to scale and optimize supply chain with the help of
              flexibility, and agility of the cloud technology.
            </div>
            <div className="supply__chain__section__content__right__para">
              We ease your Supply Chain Headaches PaceX believes that a
              sustainable Supply Chain solution enables interconnectedness from
              the port to your premises. Consider us your Supply Chain Business
              Partner because we help you strategize by reducing logistics costs
              and optimizing operations.
            </div>
            <div className="supply__chain__section__content__right__para">
              Your go-to platform for Logistic Procurement We help you build
              end-to-end visibility in your Supply Chain. Scale your capacity
              whenever and wherever in real-time to cater your sales and reach
              customers.
            </div>
            <div className="supply__chain__section__content__right__para">
              We are here to give you the best of both worlds – Logistics and
              Technology Enabling businesses to build scalable, dynamic/agile
              and integrated supply chain with Redesign you Supply Chain with
              Cloud Supply Chain.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
