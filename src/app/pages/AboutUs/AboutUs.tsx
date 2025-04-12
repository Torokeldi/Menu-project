"use client";
import Image from "next/image";
import React from "react";
import Line from "../../../assets/images/Frame 10.png";
import aboutUsImg from "../../../assets/images/Frame 15.png";
import aboutUsImg2 from "../../../assets/images/Frame 16.png";
import "@/app/pages/AboutUs/AboutUs.css";

const AboutUs = () => (
  <div className="container">
    <div className="logo">
      <Image src={Line} alt="Decorative line" />
      <span className="about-us">About Us</span>
    </div>
    <div className="about-us-content">
      <div className="about-us-info">
        <h1 className="about-us-title">
          A Journey Through <br /> Cafesio Flavors
        </h1>
        <p className="about-us-txt">
          Try dishes that will open up new tastes for you and delight your
          eyes with their appearance. Here you will find a cozy 
          atmosphere, excellent service, and attention to each guest. 
          Book a table now and enjoy a unique experience of taste 
          discovery!
        </p>
      </div>
      <div className="about-us-images">
        <div className="about-us-img">
          <Image src={aboutUsImg} alt="Delicious dish" />
        </div>
        <div className="about-us-img">
          <Image src={aboutUsImg2} alt="Tasty experience" />
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
