import React, { useEffect, useState } from "react";
import FAQPic from "../assets/FAQPic.png";
import "animate.css";

function FAQCard({ selected, onClick, index }) {
  return (
    <>
      <button
        onClick={onClick}
        className="faq__section__content__right__card__header"
      >
        <div className="faq__section__content__right__card__heading">
          My vision is to imtroduce crowdfunding as a safe and viable
        </div>
        <div className="faq__section__content__right__card__svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-minus"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
      </button>
      <div className="faq__section__content__right__card__border"></div>
      {selected === index ? (
        <div className="faq__section__content__right__card__para animate__animated animate__fadeInRight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          laborum eos illum maxime voluptates numquam magnam in? Sequi ipsum cum
          modi vitae culpa minus iusto velit ipsa ab officia voluptatibus
          debitis quam eum amet obcaecati magni quasi error autem tempora
          corrupti fugiat, facilis est eligendi? Deleniti iusto adipisci sunt
          eligendi.
        </div>
      ) : null}
    </>
  );
}

export default function FAQ() {
  const listOfFAQ = [
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
  ];
  const [openFAQ, setOpenFAQ] = useState(1);

  return (
    <div className="faq__section">
      <div className="faq__section__content">
        <div className="faq__section__content__left">
          <img
            src={FAQPic}
            alt="FAQPic"
            className="faq__section__content__img"
          />
        </div>
        <div className="faq__section__content__right">
          <div className="faq__section__content__right__heading">FAQ</div>
          {listOfFAQ.map((item, index) => {
            return (
              <FAQCard
                index={index}
                selected={openFAQ}
                onClick={() => setOpenFAQ(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
