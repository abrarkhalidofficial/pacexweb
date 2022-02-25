import React from "react";
import jumbotronBg from "../assets/jumbotronBg.png";

export default function Jumbotron() {
  return (
    <div className="jumbotron">
      <img src={jumbotronBg} alt="jumbotronBg" className="jumbotron__img" />
      <div className="jumbotron__wrapper">
        <div className="jumbotron__wrapper__content">
          <div className="jumbotron__wrapper__content__heading">
            Simplify Your Supply Chain
          </div>
          <div className="jumbotron__wrapper__content__sub__heading">
            Pick-up | Storage | Drop-off
          </div>
          <div className="jumbotron__wrapper__content__info">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </div>
          <button className="jumbotron__wrapper__content__button">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
