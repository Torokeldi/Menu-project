"use client";
import React from "react";
import scss from "./ModernInterior.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";

import img1 from "@/assets/modern interior/images_1.png";
import img2 from "@/assets/modern interior/images_2.png";
import img3 from "@/assets/modern interior/images_3.png";
import img4 from "@/assets/modern interior/images_4.png";
import img5 from "@/assets/modern interior/images_5.png";

const ModernInterior = () => {
  return (
    <section className={scss.ModernInterior} id="interior">
      <div className="container">
        <div className={scss.header}>
          <h2>modern interior</h2>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={"auto"}
          pagination={{ clickable: true }}
          className={scss.mySwiper}
        >
          <SwiperSlide className={scss.slide}>
            <Image src={img1} alt="img1" className={scss.image} />
          </SwiperSlide>
          <SwiperSlide className={scss.slide}>
            <Image src={img2} alt="img2" className={scss.image} />
            <div className={scss.imageGrid}>
              <Image src={img3} alt="img3" className={scss.smallImg} />
              <Image src={img4} alt="img4" className={scss.smallImg} />
            </div>
          </SwiperSlide>
          <SwiperSlide className={scss.slide}>
            <Image src={img5} alt="img5" className={scss.image} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ModernInterior;
