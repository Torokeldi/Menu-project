"use client";
import React, { useState } from "react";
import scss from "./MainMenu.module.scss";
import left from "../../../assets/images/Frame 10.png";
import right from "../../../assets/images/Frame 9.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const MainMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className={scss.MainMenu}>
      <div className="container">
        <div className={scss.MainMenu}>
          <div className={scss.menu}>
            <Image src={left} alt="img" width={25} height={10} />
            <h3>Main Menu</h3>
            <Image src={right} alt="img" width={25} height={10} />
          </div>
          <h1>Exceptional Quality. Delightfully Delicious</h1>
          <div className={scss.blocks}>
            <div className={scss.block1}>
              <button
                className={`${scss.buttons} ${
                  selectedCategory === "Desserts" ? scss.selected : ""
                }`}
                onClick={() => handleCategoryClick("Desserts")}
              >
                <p className={scss.button_text}>Desserts</p>
              </button>
              <button
                className={`${scss.buttons} ${
                  selectedCategory === "Hot Drinks" ? scss.selected : ""
                }`}
                onClick={() => handleCategoryClick("Hot Drinks")}
              >
                <p className={scss.button_text}>Hot Drinks</p>
              </button>
              <button
                className={`${scss.buttons} ${
                  selectedCategory === "Cold Drinks" ? scss.selected : ""
                }`}
                onClick={() => handleCategoryClick("Cold Drinks")}
              >
                <p className={scss.button_text}>Cold Drinks</p>
              </button>
              <button
                className={`${scss.buttons} ${
                  selectedCategory === "National Foods" ? scss.selected : ""
                }`}
                onClick={() => handleCategoryClick("National Foods")}
              >
                <p className={scss.button_text}>National Foods</p>
              </button>
              <button
                className={`${scss.buttons} ${
                  selectedCategory === "Eastern cuisine" ? scss.selected : ""
                }`}
                onClick={() => handleCategoryClick("Eastern cuisine")}
              >
                <p className={scss.button_text}>Eastern cuisine</p>
              </button>
              <button
                className={`${scss.buttons} ${
                  selectedCategory === "Fast foods" ? scss.selected : ""
                }`}
                onClick={() => handleCategoryClick("Fast foods")}
              >
                <p className={scss.button_text}>Fast foods</p>
              </button>
            </div>
            <div className={scss.block2}>
              <div className={scss.menu_item_box}>
                <span className={scss.menu_item}>
                  <h4 className={scss.item_name}>Chocolate Cake</h4>
                  <span className={scss.item_price}>$5.99</span>
                </span>
                <p className={scss.item_description}>
                  Delicious chocolate cake with a rich taste.
                </p>
              </div>
              <div className={scss.menu_item_box}>
                <span className={scss.menu_item}>
                  <h4 className={scss.item_name}>Tiramisu</h4>
                  <span className={scss.item_price}>$4.99</span>
                </span>
                <p className={scss.item_description}>
                  Traditional Italian dessert with coffee flavor.
                </p>
              </div>
            </div>
          </div>
          <div className={scss.view_all_button}>
            <Link href="/menu" className={scss.button}>
              View Full menu
              <FaArrowRight className={scss.button_icon} />
            </Link>
            <span className={scss.button_line_1}></span>
            <span className={scss.button_line_2}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainMenu;
