import React from "react";
import Image from "next/image";
import Line from "../../../assets/images/Frame 10.png";
import BestSellersImg from "../../../assets/images/Frame 19.png";
import BestSellersImg2 from "../../../assets/images/Frame 20.png";
import Shevron from "../../../assets/images/Shevron.svg";
import "@/app/pages/BestSellers/BestSellers.css";

function BestSellers() {
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
            See what new at your Cafesio and you`ll find Cafesio <br />
            Covent Garden moments.
          </p>
        </div>
        <div className="bestSellers-images">
          <div className="bestSellers-img">
            <Image
              src={BestSellersImg}
              width={266}
              height={281}
              alt="Best sellers item 1"
            />
          </div>
          <div className="bestSellers-img">
            <Image
              src={BestSellersImg2}
              width={266}
              height={281}
              alt="Best sellers item 2"
            />
          </div>
          <Image src={Shevron} alt="navigate" />
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
