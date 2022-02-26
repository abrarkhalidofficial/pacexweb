import React from "react";
import simplifyOperationPic from "../assets/simplifyOperationPic.png";

export default function SimplifyOperation() {
  return (
    <div className="simplify__operation__section">
      <div className="simplify__operation__section__content">
        <div className="simplify__operation__section__content__left">
          <div className="simplify__operation__section__content__left__heading">
            Simplify <br />
            Your Operation
            <span>Warehouse to Delivery</span>
          </div>
          <div className="simplify__operation__section__content__left__para">
            Scale your business on your terms with PaceX on‑demand warehousing
            and fulfillment network.
          </div>
        </div>
        <img
          src={simplifyOperationPic}
          alt="simplifyOperationPic"
          className="simplify__operation__section__content__img"
        />
      </div>
    </div>
  );
}
