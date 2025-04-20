"use client";
import Image from "next/image";
import scss from "./FirstPage.module.scss";
import Line from "@/assets/images/Frame 10.png";
import Line2 from "@/assets/images/Frame 9.png";
import arrow from "@/assets/images/arrow-right.svg";
import location from "@/assets/images/Icon.png";
import hotline from "@/assets/images/Icon (1).png";
import contactPhone from "@/assets/images/Group 1.png";
import contactName from "@/assets/images/Group 2.png";
import { useState } from "react";

const FirstPage = () => {
  const [state, setState] = useState(false);
  function handleClick() {
    setState((prev) => !prev);
  }

  return (
    <div className={scss.FirstPage}>
      <div className={scss.content}>
        <div className={scss.FirstText}>
          <Image src={Line} alt="" />
          <span>Delicious</span>
          <Image src={Line2} alt="" />
        </div>
        <h1>Italian Cuisine</h1>
        <p>
          Classic steak & delicious with delightfully unexpected twists. <br />{" "}
          The Restaurant`s sunny decor was inspired by the diners
        </p>
        <div className={scss.button}>
          <button onClick={handleClick}>
            Reserve Your Table <Image src={arrow} alt="" />{" "}
          </button>
        </div>
        <div
          style={state ? { display: "flex" } : { display: "none" }}
          data-aos="fade-right"
          className={scss.Contact}
        >
          <div className={(scss.contactName, scss.contact)}>
            <Image src={contactName} alt="" />
            <div className={scss.input}>
              <input
                className={scss.nameInput}
                type="text"
                placeholder="Enter your name"
              />
              <label htmlFor="Input">NAME</label>
            </div>
          </div>
          <div className={(scss.contactPhone, scss.contact)}>
            <Image src={contactPhone} alt="" />
            <div className={scss.input}>
              <input
                className={scss.phoneInput}
                type="text"
                placeholder="Enter your Phone"
              />
              <label htmlFor="Input">PHONE</label>
            </div>
          </div>
          <button onClick={handleClick}>Contact</button>
        </div>
      </div>
      <div className={scss.UnderText}>
        <div className={scss.left}>
          <h2>Location</h2>
          <div className={scss.line}></div>
          <Image src={location} alt="" />
          Rua da moeda 1g,1200-275,Portugal
        </div>
        <div className={scss.right}>
          <h2>Hotline</h2>
          <div className={scss.line}></div>
          <Image src={hotline} alt="" />
          +771219900
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
