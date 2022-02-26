import React from "react";
import whatweenable from "../assets/whatweenable.png";
export default function WhatWeEnable() {
  return (
    <div className="what__we__enable">
      <div className="what__we__enable__wrapper">
        <div className="what__we__enable__header">
          <div className="what__we__enable__header__sub__heading">
            What We Enable
          </div>
          <div className="what__we__enable__header__heading">
            The New Era of Logistics
          </div>
        </div>
        <div className="what__we__enable__content">
          <div className="what__we__enable__content__left">
            <img
              src={whatweenable}
              alt="whatweenable"
              className="what__we__enable__content__left__img"
            />
          </div>
          <div className="what__we__enable__content__right">
            <div className="what__we__enable__content__right__heading">
              <span>Achieve</span>
              Operational Flexibility
            </div>
            <div className="what__we__enable__content__right__info">
              Join a warehouse network that adapts to your business, increases
              your operational flexibility, and frees up time and capital.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
