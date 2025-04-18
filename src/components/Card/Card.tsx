import React from "react";
import Image from "next/image";
import styles from "./Card.module.scss";

type CardType = {
  name: string;
  description: string;
  price: string;
  img: string;
};

type Props = {
  card: CardType;
};

const Card: React.FC<Props> = ({ card }) => {
  return (
    <div className={styles.selectCard}>
      <div className={styles.selectCard__info}>
        <div className={styles.selectCard__imgBlock}>
          <Image
            src={card.img}
            alt={card.name}
            className={styles.selectCard__img}
            width={300}
            height={200}
          />
        </div>
        <div className={styles.selectCard__details}>
          <div className={styles.selectCard__txt}>
            <h2 className={styles.selectCard__name}>{card.name}</h2>
            <p className={styles.selectCard__desc}>{card.description}</p>
          </div>
          <h2 className={styles.selectCard__price}>{card.price}</h2>
        </div>
      </div>
      
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
  );
};

export default Card;
