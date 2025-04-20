"use client";
import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/header/Header";
import scss from "./index.module.scss";
import AboutUs from "@/app/AboutUs/page";
import BestSellers from "@/app/BestSellers/page";
import MainMenu from "@/app/MenuSections/page";
import ModernInterier from "@/app/ModernInterier/page";
import SixthPage from "@/app/SixthPage/page";
import React from "react";
import FirstPage from '@/app/FirstPage/page';

const Layout:React.FC = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <main>
        <FirstPage />
        <AboutUs />
        <BestSellers />
        <MainMenu />
        <ModernInterier />
        <SixthPage />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
