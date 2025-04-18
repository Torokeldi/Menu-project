import FirstPage from "@/app/pages/firstPage/FirstPage";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./Layout.module.scss";
import MainMenu from "@/app/pages/menuSections/MainMenu";
import SixthPage from "@/app/pages/sixthPage/SixthPage";
import AboutUs from "@/app/pages/AboutUs/AboutUs";
import BestSellers from "@/app/pages/BestSellers/BestSellers";
import ModernInterier from "@/app/pages/modernInterier/modernInterier"
import Menu from "@/app/pages/Menu/Menu";

const Layout = () => {
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
      <Menu/>
      <Footer />
    </div>
  );
};

export default Layout;
