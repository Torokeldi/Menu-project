
import FirstPage from "@/app/pages/firstPage/FirstPage";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./Layout.module.scss";
import MainMenu from "@/app/pages/menuSections/MainMenu";
import ModernInterior from "@/app/pages/modernInterier/ModernInterier";
import SixthPage from "@/app/pages/sixthPage/SixthPage";
import AboutUs from "@/app/pages/AboutUs/AboutUs";
import BestSellers from "@/app/pages/BestSellers/BestSellers";

const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <main>
        <FirstPage />
        <MainMenu/>
        <ModernInterior/>
        <AboutUs />
        <BestSellers />
        <SixthPage />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
