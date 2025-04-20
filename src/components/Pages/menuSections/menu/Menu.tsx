"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Menu.module.scss";

type ExtraType = { name: string; price: string };
type DrinkType = { name: string; price: string };

type CardType = {
  id: number;
  name: string;
  description: string;
  price: string;
  img: string;
  category: string;
  extras?: ExtraType[];
  drinks?: DrinkType[];
};

const categories: string[] = [
  "Desserts",
  "Hot Drinks",
  "Cold Drinks",
  "National Foods",
  "Eastern cuisine",
  "Fast foods",
];

export default function Menu() {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const [cardData, setCardData] = useState<CardType[]>([]);
  const [filteredData, setFilteredData] = useState<CardType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data: CardType[]) => {
        setCardData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error("Error fetching cards:", error));
  }, []);

  const handleButtonClick = (index: number, category: string) => {
    setActiveButton(index);
    const filtered = cardData.filter((card) => card.category === category);
    setFilteredData(filtered);
  };

  const handleCardClick = (card: CardType) => {
    if (selectedCard?.id === card.id) {
      setSelectedCard(null);
    } else {
      setSelectedCard(card);
    }
  };

  return (
    <div className={styles.menu}>
      <div className={styles.menu__content}>
        <div className={styles.menu__items}>
          {categories.map((item, index) => (
            <button
              key={index}
              className={${styles.menu__Btn} ${activeButton === index ? styles.active : ""}}
              onClick={() => handleButtonClick(index, item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className={styles.card__grid}>
          {filteredData.map((card) => (
            <div
              key={card.id}
              className={${styles.card} ${selectedCard?.id === card.id ? styles.expanded : ""}}
              onClick={() => handleCardClick(card)}
            >
              <div className={styles.card__main}>
                <div>
                  <div className={styles.card__imgBlock}>
                    <Image
                      src={card.img}
                      alt={card.name}
                      className={styles.card__image}
                      width={329}
                      height={187}
                    />
                  </div>
                  <div className={styles.card__info}>
                    <div>
                      <div className={styles.card__name}>{card.name}</div>
                      <div className={styles.card__description}>{card.description}</div>
                    </div>
                    <div className={styles.card__price}>{card.price}</div>
                  </div>
                </div>

                {selectedCard?.id === card.id && (
                  <div className={${styles.expandableSection} ${styles.open}}>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}