import React from "react";
import growUpBg from "../assets/growUpBg.png";
import headingBG from "../assets/headingBG.png";

export default function GrowUp() {
  return (
    <div className="grow__up__section">
      <img src={growUpBg} alt="growUpBg" className="grow__up__section__img" />
      <div className="grow__up__section__overlay">
        <div className="grow__up__section__overlay__content">
          <div className="grow__up__section__overlay__content__heading">
            GROW YOUR
            <div className="grow__up__section__overlay__content__heading__center">
              BUSSINESS AND INCREASE
            </div>
            <span>YOUR BOTTOM LINE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
