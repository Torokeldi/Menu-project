"use client";
import React, { useEffect, useState } from "react";
import styles from "./Menu.module.scss";
import Image from "next/image";
import Card from "../../../components/Card/Card";

type CardType = {
  id: number;
  name: string;
  description: string;
  price: string;
  img: string;
  category: string;
};

const Menu: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const [cardData, setCardData] = useState<CardType[]>([]);
  const [filteredData, setFilteredData] = useState<CardType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
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
    setSelectedCard(card);
  };

  return (
    <div className={styles.menu}>
      <div className={styles.menu__content}>
        <div className={styles.menu__items}>
          {[
            "Desserts",
            "Hot Drinks",
            "Cold Drinks",
            "National Foods",
            "Eastern cuisine",
            "Fast foods",
          ].map((item, index) => (
            <button
              key={index}
              className={`${styles.menu__Btn} ${activeButton === index ? styles.active : ""}`}
              onClick={() => handleButtonClick(index, item)}
              aria-label={`Select ${item}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className={styles.card__grid}>
          {filteredData.map((card) => (
            <div
              key={card.id}
              className={styles.card}
              onClick={() => handleCardClick(card)}
            >
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
          ))}
        </div>
        {selectedCard && <Card card={selectedCard} />}
      </div>
    </div>
  );
};

export default Menu;
