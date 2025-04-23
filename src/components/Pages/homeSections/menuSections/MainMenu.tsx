"use client";
import React, { useState, useEffect } from "react";
import scss from "./MainMenu.module.scss";
import left from "@/assets/images/Frame 10.png";
import right from "@/assets/images/Frame 9.png";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import axios from "axios"; // Ensure axios is installed: npm install axios
import Image from 'next/image';

const categories = [
  "Desserts",
  "Hot Drinks",
  "Cold Drinks",
  "National Foods",
  "Eastern Cuisine",
  "Fast Foods",
];

const MainMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [menuItems, setMenuItems] = useState<any[]>([]);

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        setMenuItems(response.data); // Store the fetched products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter items based on the selected category
  const filteredItems = selectedCategory
    ? menuItems.filter((item) => item.category === selectedCategory)
    : menuItems;

  // Limit the number of items to 5
  const limitedItems = filteredItems.slice(0, 5);

  return (
    <div id="MainMenu">
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
                {limitedItems.map((item) => (
                  <div key={item.id} className={scss.menu_item_box}>
                    <span className={scss.menu_item}>
                      <h4 className={scss.item_name}>{item.name}</h4>
                      <p className={scss.item_description}>
                        {item.description} + Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </span>
                    <span className={scss.item_price}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={scss.view_all_button}>
              <Link href="/menu">
                <button className={scss.button}>
                  View Full Menu <FaArrowRight className={scss.button_icon} />
                </button>
              </Link>

              <span className={scss.button_line_1}></span>
              <span className={scss.button_line_2}></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainMenu;
