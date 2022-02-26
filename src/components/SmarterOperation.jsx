import React from "react";
import smarterOperationPic from "../assets/smarterOperationPic.png";

export default function SmarterOperation() {
  return (
    <div className="smarter__operation__section">
      <div className="smarter__operation__section__content">
        <img
          src={smarterOperationPic}
          alt="smarterOperationPic"
          className="smarter__operation__section__content__img"
        />
        <div className="smarter__operation__section__content__right">
          <div className="smarter__operation__section__content__right__heading">
            CREATE SMARTER OPERATIONS
          </div>
          <div className="smarter__operation__section__content__right__para">
            Select the best warehouse locations, distribute inventory
            accurately, and optimize transportation for cost and mode, whether
            it's eCommerce or retail.
          </div>
          <div className="smarter__operation__section__content__right__card">
            <div className="smarter__operation__section__content__right__card__count">
              1
            </div>
            <div className="smarter__operation__section__content__right__card__heading__wrapper">
              <div className="smarter__operation__section__content__right__card__heading">
                Warehouse Locations
              </div>
              <div className="smarter__operation__section__content__right__card__para">
                Analyze order types, quantities, and customer locations to
                develop a transportation strategy that will support warehouse
                stock replenishments and customer deliveries.
              </div>
            </div>
          </div>
          <div className="smarter__operation__section__content__right__card">
            <div className="smarter__operation__section__content__right__card__count">
              2
            </div>
            <div className="smarter__operation__section__content__right__card__heading__wrapper">
              <div className="smarter__operation__section__content__right__card__heading">
                Inventory Managment
              </div>
              <div className="smarter__operation__section__content__right__card__para">
                Analyze order types, quantities, and customer locations to
                develop a transportation strategy that will support warehouse
                stock replenishments and customer deliveries.
              </div>
            </div>
          </div>
          <div className="smarter__operation__section__content__right__card">
            <div className="smarter__operation__section__content__right__card__count">
              3
            </div>
            <div className="smarter__operation__section__content__right__card__heading__wrapper">
              <div className="smarter__operation__section__content__right__card__heading">
                Transportation Intelligence
              </div>
              <div className="smarter__operation__section__content__right__card__para">
                Analyze order types, quantities, and customer locations to
                develop a transportation strategy that will support warehouse
                stock replenishments and customer deliveries.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
