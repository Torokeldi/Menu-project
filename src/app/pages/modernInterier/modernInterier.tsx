"use client";
import React from "react";
import scss from "./ModernInterior.module.scss";
import Image from "next/image";
import left from "@/assets/images/Frame 10.png";
import right from "@/assets/images/Frame 9.png";
import images_1 from "@/assets/modern interior/images_1.png";
import images_2 from "@/assets/modern interior/images_2.png";
import images_3 from "@/assets/modern interior/images_3.png";
import images_4 from "@/assets/modern interior/images_4.png";
import images_5 from "@/assets/modern interior/images_5.png";

const ModernInterier = () => {
  return (
    <section className={scss.ModernInterior} id="interior">
      <div className="container">
        <div className={scss.content}>
          <div className={scss.modern}>
            <Image src={left} alt="img" />
            <h2>modern interior</h2>
            <Image src={right} alt="img" />
          </div>
          <div className={scss.Images}>
            <div className={scss.image_1}>
              <Image src={images_1} alt="img" width={420} height={480} />
            </div>
            <div className={scss.image_2}>
              <Image src={images_2} alt="img" width={501} height={244} />
              <div className={scss.image_img}>
                <Image
                  src={images_3}
                  alt="img"
                  width={285}
                  height={223}
                  className={scss.img}
                />
                <Image
                  src={images_4}
                  alt="img"
                  width={208}
                  height={223}
                  className={scss.img}
                />
              </div>
            </div>
            <div className={scss.image_3}>
              <Image src={images_5} alt="img" width={420} height={480} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernInterier;
