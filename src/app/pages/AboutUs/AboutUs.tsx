"use client";
import React from "react";
import Image from "next/image";
import Line from "../../../assets/images/Frame 10.png";
import aboutUsImg from "../../../assets/images/Frame 15.png";
import aboutUsImg2 from "../../../assets/images/Frame 16.png";
import styles from "@/app/pages/AboutUs/AboutUs.module.scss";

const AboutUs: React.FC = () => {
  return (
    <div className="container">
      <div className={styles.logo}>
        <Image src={Line} alt="Decorative line" />
        <span className={styles["about-us"]}>About Us</span>
      </div>
      <div className={styles["about-us-content"]}>
        <div className={styles["about-us-info"]}>
          <h1 className={styles["about-us-title"]}>
            A Journey Through <br /> Cafesio Flavors
          </h1>
          <p className={styles["about-us-txt"]}>
            Try dishes that will open up new tastes for you and delight your
            <br />
            eyes with their appearance. Here you will find a cozy <br />
            atmosphere, excellent service, and attention to each guest. <br />
            Book a table now and enjoy a unique experience of taste <br />
            discovery!
          </p>
        </div>
        <div className={styles["about-us-images"]}>
          <div className={styles["about-us-img"]}>
            <Image src={aboutUsImg} alt="Delicious dish" />
          </div>
          <div className={styles["about-us-img"]}>
            <Image src={aboutUsImg2} alt="Tasty experience" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;