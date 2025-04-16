import FirstPage from "@/app/pages/firstPage/FirstPage";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./Layout.module.scss";
import MainMenu from "@/app/pages/menuSections/MainMenu";
import SixthPage from "@/app/pages/sixthPage/SixthPage";
import AboutUs from "@/app/pages/AboutUs/AboutUs";
import BestSellers from "@/app/pages/BestSellers/BestSellers";
<<<<<<< HEAD
import ModernInterier from "@/app/pages/modernInterier/modernInterier"
=======
import ModernInterier from './../../app/pages/modernInterier/modernInterier';
>>>>>>> 0f0dcf3ee00896ea795ad80dc24a524de8302fa2

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
      <Footer />
    </div>
  );
};

export default Layout;
