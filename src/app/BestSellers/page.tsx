"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Line from "@/assets/images/Frame 10.png";
import BestSellersImg from "@/assets/images/Frame 15.png";
import BestSellersImg2 from "@/assets/images/Frame 16.png";
import BestSellersImg3 from "@/assets/images/Frame 19.png";
import BestSellersImg4 from "@/assets/images/Frame 20.png";
import BestSellersImg5 from "@/assets/images/7f1e8f5dc71cb5f6dbeadcbe52587e2d.png";
import BestSellersImg6 from "@/assets/modern interior/images_1.png";
import BestSellersImg7 from "@/assets/modern interior/images_2.png";
import BestSellersImg8 from "@/assets/modern interior/images_3.png";
import BestSellersImg9 from "@/assets/modern interior/images_4.png";
import BestSellersImg10 from "@/assets/modern interior/images_5.png";
import Shevron1 from "@/assets/images/Shevron1.svg";
import Shevron2 from "@/assets/images/Shevron2.svg";
import "./BestSellers.css";

const images: StaticImageData[] = [
  BestSellersImg,
  BestSellersImg2,
  BestSellersImg3,
  BestSellersImg4,
  BestSellersImg5,
  BestSellersImg6,
  BestSellersImg7,
  BestSellersImg8,
  BestSellersImg9,
  BestSellersImg10,
];

const BestSellers: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const next = prevIndex + 2;
      return next >= images.length ? prevIndex : next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prev = prevIndex - 2;
      return prev < 0 ? 0 : prev;
    });
  };

  return (
    <div className="container">
      <div className="bestSellers-content">
        <div className="bestSellers-info">
          <div className="logo">
            <Image src={Line} alt="Decorative line" />
            <span className="bestSellers">Best Sellers</span>
          </div>
          <h1 className="bestSellers-title">
            You Only Reserve <br /> Exception
          </h1>
          <p className="bestSellers-txt">
            Each location has a menu that`s curated just for them. <br />
            See what`s new at your Cafesio and you`ll find Cafesio <br />
            Covent Garden moments.
          </p>
        </div>

        <div className="slider-wrapper">
          {currentIndex > 0 && (
            <button className="shevron-button left" onClick={prevSlide}>
              <Image src={Shevron1} alt="Previous slide" />
            </button>
          )}

          <div className="slider-window">
            <div className="bestSellers-track">
              {images.slice(currentIndex, currentIndex + 2).map((src, index) => (
                <div className="bestSellers-img" key={index}>
                  <Image
                    src={src}
                    width={266}
                    height={281}
                    alt={`Best seller ${currentIndex + index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {currentIndex + 2 < images.length && (
            <button className="shevron-button right" onClick={nextSlide}>
              <Image src={Shevron2} alt="Next slide" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
