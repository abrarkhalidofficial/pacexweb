import React, { useEffect, useState } from "react";
import { Menu, X } from "react-feather";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 700) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 700) {
        setIsNavOpen(false);
      } else {
        setIsNavOpen(true);
      }
    });
    return () => {
      window.removeEventListener("resize");
    };
  }, []);

  return (
    <div className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__wrapper__logo">
          <img src={logo} alt="logo" className="header__wrapper__logo__img" />
        </Link>
        <button
          className="header__wrapper__menu"
          onClick={() => {
            isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true);
          }}
        >
          {isNavOpen ? (
            <X size={20} color="currentColor" />
          ) : (
            <Menu size={20} color="currentColor" />
          )}
        </button>
        {isNavOpen ? (
          <div className="header__wrapper__nav">
            <Link to="/" className="header__wrapper__nav__link">
              Home
            </Link>
            <Link to="/" className="header__wrapper__nav__link">
              About Us
            </Link>
            <Link to="/" className="header__wrapper__nav__link">
              Services
            </Link>
            <Link to="/" className="header__wrapper__nav__link">
              Contact
            </Link>
            <Link to="/" className="header__wrapper__nav__link">
              Login
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
