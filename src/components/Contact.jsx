import React from "react";
import { Facebook, Linkedin } from "react-feather";
import ContactInput from "./ContactInput";

export default function Contact() {
  return (
    <div className="contact__container">
      <div className="contact__container__content">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13611.628343502281!2d74.4115359!3d31.471742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe26730359966c739!2sNational%20Incubation%20Center%20Lahore!5e0!3m2!1sen!2s!4v1638644544287!5m2!1sen!2s"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <form action="" className="contact__container__form">
          <div className="contact__container__form__heading heading">
            <span>Get in</span> Touch
          </div>
          <div className="contact__container__form__info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            amet, repudiandae nulla obcaecati maiores
          </div>
          <div className="contact__container__form__row">
            <ContactInput placeholder="first name" type="text" />
            <ContactInput placeholder="last name" type="text" />
          </div>
          <div className="contact__container__form__row">
            <ContactInput placeholder="email" type="email" />
            <ContactInput placeholder="phone" type="tel" />
          </div>
          <div className="contact__container__form__row">
            <ContactInput placeholder="Subject" type="text" />
          </div>
          <div className="contact__container__form__row">
            <ContactInput placeholder="Message" variant="textarea" />
          </div>
          <button className="contact__container__form__button">Send</button>
          <div className="contact__container__form__heading heading">
            <span>Contact</span> Us
          </div>
          <div className="contact__container__form__content">
            <div
              className="contact__container__form__content__col"
              style={{ marginRight: 20 }}
            >
              <div className="contact__container__form__content__col__heading heading">
                Email
              </div>
              <div className="contact__container__form__content__col__value">
                johndoe@gmail.com
              </div>
              <div className="contact__container__form__content__col__value">
                abc@gmail.com
              </div>
            </div>
            <div className="contact__container__form__content__col">
              <div className="contact__container__form__content__col__heading heading">
                Phone
              </div>
              <div className="contact__container__form__content__col__value">
                +92 214 15925414
              </div>
              <div className="contact__container__form__content__col__value">
                +92 214 15925414
              </div>
            </div>
            <div
              className="contact__container__form__content__col"
              style={{ maxWidth: 140 }}
            >
              <div className="contact__container__form__content__col__heading heading">
                Socials
              </div>
              <div
                className="contact__container__form__content__col__links"
                style={{ justifyContent: "flex-start" }}
              >
                <a
                  href="https://www.facebook.com/search/top/?q=peervest"
                  className="contact__container__form__content__col__link"
                  style={{ marginRight: 10 }}
                >
                  <Facebook size={18} color="currentColor" />
                </a>

                <a
                  href="https://www.linkedin.com/company/atpeervest"
                  className="contact__container__form__content__col__link"
                >
                  <Linkedin size={18} color="currentColor" />
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
