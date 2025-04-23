"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./MenuMobile.module.scss";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FaSearch } from "react-icons/fa";
import line from "@/assets/images/Frame 10.png";
import { names } from './../../../../../../.next/server/vendor-chunks/next';

type MenuItem = {
  [x: string]: string | StaticImport;
  id: number;
  title: string;
  description: string;
  price: number;
  img: string;
};

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3001/products");
        const data = await res.json();
        setMenuItems(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <main className={styles.loading}>Loading...</main>;
  }

  return (
    <main className={styles.page}>
      {!selected ? (
        <>
          <div className={styles.menuBar}>
            <div className={styles.menuTitle}>
                <Image src={line} alt={""}/> &nbsp;&nbsp;
                 Menu</div>
            <div className={styles.searchIcon}>
              <FaSearch />
            </div>
          </div>

          <div className={styles.menuButtons}>
            {[
              "Desserts",
              "Hot Drinks",
              "Cold Drinks",
              "National Foods",
              "Eastern cuisine",
              "Fast foods",
            ].map((cat) => (
              <button key={cat} className={styles.menuButton}>
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.menuList}>
            {menuItems.map((item) => (
              <div
                key={item.id}
                className={styles.menuItem}
                onClick={() => setSelected(item)}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className={styles.itemImage}
                  />
                </div>
                <div className={styles.itemContent}>
                  <h2>{item.name}</h2>
                  <p className={styles.itemDescription}>{item.description}</p>
                  <p className={styles.itemPrice}>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className={styles.detailContainer}>
          <div className={styles.detailHeader}>
            <button
              onClick={() => setSelected(null)}
              className={styles.closeButton}
            >
              &times;
            </button>
          </div>

          <div className={styles.detailImageWrapper}>
            <Image
              src={selected.img}
              alt={selected.title}
              fill
              className={styles.detailImage}
            />
          </div>

          <h2 className={styles.detailTitle}>{selected.name}</h2>
          <p className={styles.detailDescription}>{selected.description}</p>
          <p className={styles.detailPrice}>{selected.price}</p>

          <button className={styles.backButton}>{selected.category}</button>
          <div className={styles.selectCard__extrasDrinks}>
            <section className={styles.selectCard__section}>
              <h1 className={styles.selectCard__title}>Extras</h1>
              <div className={styles.selectCard__itemList}>
                <div className={styles.selectCard__item}>
                  <p style={{ marginBottom: "10px" }}>Apple</p>
                  <p>Cherry</p>
                </div>
                <div className={styles.selectCard__priceList}>
                  <p style={{ marginBottom: "10px" }}>$4.30</p>
                  <p>$8.30</p>
                </div>
              </div>
            </section>
            <section className={styles.selectCard__section}>
              <h1 className={styles.selectCard__title}>Drinks</h1>
              <div className={styles.selectCard__itemList}>
                <div className={styles.selectCard__item}>
                  <p style={{ marginBottom: "10px" }}>Fanta</p>
                  <p>Coca Cola</p>
                </div>
                <div className={styles.selectCard__priceList}>
                  <p style={{ marginBottom: "10px" }}>$9.10</p>
                  <p>$9.30</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </main>
  );
}
