import React from "react";
import fulfillment from "../assets/fulfillment.png";
import fullfillmentVid from "../assets/fullfillmentVid.png";
export default function Fulfillment() {
  return (
    <div className="fulfillment">
      <img src={fulfillment} alt="fulfillment" className="fulfillment__img" />
      <div className="fulfillment__wrapper">
        <div className="fulfillment__wrapper__content">
          <div className="fulfillment__wrapper__content__header">
            <div className="fulfillment__wrapper__content__header__sub__heading">
              Fulfill orders of any size or quantity through any transport mode.
            </div>
            <div className="fulfillment__wrapper__content__header__heading">
              Access Comprehensive Logistics Capabilities
            </div>
          </div>
          <img
            src={fullfillmentVid}
            alt="fullfillmentVid"
            className="fulfillment__wrapper__content__img"
          />
        </div>
      </div>
    </div>
  );
}
