import React from "react";
import fedUpLogisticsPic from "../assets/fedUpLogisticsPic.png";
import SupplySectionPic from "../assets/SupplySectionPic.png";

export default function FedUpLogistics() {
  return (
    <>
      <div className="fed__up__logistics__section">
        <img
          src={SupplySectionPic}
          alt="SupplySectionPic"
          className="fed__up__logistics__section__img"
        />
        <div className="fed__up__logistics__section__overlay">
          <div className="fed__up__logistics__section__overlay__content">
            <div className="fed__up__logistics__section__overlay__content__left">
              <div className="fed__up__logistics__section__overlay__content__left__sub__heading">
                On-demand Storage and Delivery
              </div>
              <div className="fed__up__logistics__section__overlay__content__left__heading">
                Fed up with the logistics procurement in fragments?
              </div>
              <div className="fed__up__logistics__section__overlay__content__left__para">
                Switch to PaceX to access all logistics partners under one roof
                to streamline your supply chain operations.
              </div>
            </div>
            <img
              src={fedUpLogisticsPic}
              alt="fedUpLogisticsPic"
              className="fed__up__logistics__section__overlay__content__img"
            />
          </div>
        </div>
      </div>
    </>
  );
}
