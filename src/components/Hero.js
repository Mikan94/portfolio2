import React, { useState, useEffect } from "react";
import data from "../content/hero.json";
import { Link } from "react-scroll";
import "../index.css";
import moji from "../assets/moji.png";

function Hero(props) {
  let content = data;
  props.language === "Deutsch"
    ? (content = data.Deutsch)
    : (content = data.English);

  const [scrollPos, setScrollPos] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos < 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    setScrollPos(currentScrollPos);
  };

  useEffect(
    () => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    },
    handleScroll,
    visible,
    setScrollPos
  );
  return (
    <section id="hero" className="container mx-auto hero">
      <div class="flex z-10 flex-col md:flex-row mx-8 sm:mx-16 lg:mx-32 xl:mx-48 2xl:mx-80 pt-12 md:pt-48">
        <div class="flex flex-col justify-center md:-mt-16 w-80 mr-40">
          <p class="text-4xl hero-headline color-y mb-4 leading-none">Hi,{content.title}</p>
          <p class="leading-loose text-center md:text-left">{content.d2}</p>
         {/*  <p class="my-4">{content.d3}</p> */}
          {/* <p>{content.d4}</p> */}
          <Link
            to="contact"
            class="self-center sm:justify-center lg:self-start"
            smooth={true}
            duration={1000}
            spy={true}
            exact={true}
          >
            <button class="btn-3 mt-8">{content.btn}</button>
          </Link>
        </div>
        <div class="flex flex-col order-2 md:my-auto mt-8 md:ml-8 xl:pr-16">
          <img
            class="hidden md:block"
            src={moji}
          ></img>
        </div>
      </div>
      <section class="container fixed bottom-0 mx-auto">
        <div
          className={
            visible
              ? "hidden md:flex md:flex-col md:items-center md:mb-4 lg:mb-16 "
              : "hidden"
          }
        >
          <p class="scroll-ani bounce">Scroll</p>
        </div>
      </section>
    </section>
  );
}

export default Hero;
