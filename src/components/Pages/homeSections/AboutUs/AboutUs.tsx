"use client";
import Image from "next/image";
import React from "react";
import Line from "@/assets/images/Frame 10.png";
import aboutUsImg from "@/assets/images/Frame 15.png";
import aboutUsImg2 from "@/assets/images/Frame 16.png";
import scss from "./AboutUs.module.scss";

const AboutUs = () => (
  <section id="about" className="container">
    <div className={scss.logo}>
      <Image src={Line} alt="Decorative line" />
      <span className={scss.aboutUs}>About Us</span>
    </div>
    <div className={scss.aboutUsContent}>
      <div className={scss.aboutUsInfo}>
        <h1 className={scss.aboutUsTitle}>
          A Journey Through <br /> Cafesio Flavors
        </h1>
        <div className={scss.txtBlock}>
          <p className={scss.aboutUsTxt}>
            Try dishes that will open up new tastes for you and delight your
            eyes with their appearance. Here you will find a cozy atmosphere,
            excellent service, and attention to each guest. Book a table now and
            enjoy a unique experience of taste discovery!
          </p>
        </div>
      </div>
      <div className={scss.aboutUsImages}>
        <div className={scss.aboutUsImg}>
          <Image src={aboutUsImg} alt="Delicious dish" />
        </div>
        <div className={scss.aboutUsImg}>
          <Image src={aboutUsImg2} alt="Tasty experience" />
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
