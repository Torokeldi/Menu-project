"use client";
import React, { useState } from "react";
import scss from "./MainMenu.module.scss";
import left from "../../../assets/images/Frame 10.png";
import right from "../../../assets/images/Frame 9.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const categories = [
  "Desserts",
  "Hot Drinks",
  "Cold Drinks",
  "National Foods",
  "Eastern cuisine",
  "Fast foods",
];

const menuItems = [
  {
    name: "Chocolate Cake",
    price: "$5.99",
    description: "Delicious chocolate cake with a rich taste.",
  },
  {
    name: "Tiramisu",
    price: "$4.99",
    description: "Traditional Italian dessert with coffee flavor.",
  },
];

const MainMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section className={scss.MainMenu}>
      <div className="container">
        <div className={scss.MainMenu}>
          <div className={scss.menu}>
            <Image src={left} alt="left arrow" width={25} height={10} />
            <h3>Main Menu</h3>
            <Image src={right} alt="right arrow" width={25} height={10} />
          </div>
          <h1>Exceptional Quality. Delightfully Delicious</h1>
          <div className={scss.blocks}>
            <div className={scss.block1}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${scss.buttons} ${
                    selectedCategory === category ? scss.selected : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <p className={scss.button_text}>{category}</p>
                </button>
              ))}
            </div>
            <div className={scss.block2}>
              {menuItems.map((item) => (
                <div key={item.name} className={scss.menu_item_box}>
                  <span className={scss.menu_item}>
                    <h4 className={scss.item_name}>{item.name}</h4>
                    <span className={scss.item_price}>{item.price}</span>
                  </span>
                  <p className={scss.item_description}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={scss.view_all_button}>
            <Link href="/Menu" className={scss.button}>
              View Full Menu <FaArrowRight className={scss.button_icon} />
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
