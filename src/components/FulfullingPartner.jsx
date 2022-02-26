import React from "react";
import SupplySectionPic from "../assets/SupplySectionPic.png";
import fulfullingHeadingBg from "../assets/fulfullingHeadingBg.png";

export default function FulfullingPartner() {
  return (
    <div className="fulfulling__partner__section">
      <img
        src={SupplySectionPic}
        alt="SupplySectionPic"
        className="fulfulling__partner__section__img"
      />
      <div className="fulfulling__partner__section__content__overlay">
        <div className="fulfulling__partner__section__content">
          <div className="fulfulling__partner__section__content__left">
            <img
              src={fulfullingHeadingBg}
              alt="fulfullingHeadingBg"
              className="fulfulling__partner__section__content__left__img"
            />
            <div className="fulfulling__partner__section__content__left__heading">
              THE MOST FULFULLING PARTNER
            </div>
          </div>
          <div className="fulfulling__partner__section__content__right">
            <div className="fulfulling__partner__section__content__right__card">
              <div className="fulfulling__partner__section__content__right__no">
                01
              </div>
              <div className="fulfulling__partner__section__content__right__heading">
                Unprecedented Flexibility
              </div>
              <div className="fulfulling__partner__section__content__right__para">
                Whether you need on-demand forward stocking, dedicated
                facilities, or anything in-between, you’re covered with Stord.
              </div>
            </div>
            <div className="fulfulling__partner__section__content__right__card">
              <div className="fulfulling__partner__section__content__right__no">
                02
              </div>
              <div className="fulfulling__partner__section__content__right__heading">
                Unprecedented Flexibility
              </div>
              <div className="fulfulling__partner__section__content__right__para">
                Whether you need on-demand forward stocking, dedicated
                facilities, or anything in-between, you’re covered with Stord.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
