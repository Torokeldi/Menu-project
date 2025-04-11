import FirstPage from "@/app/pages/firstPage/FirstPage";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./Layout.module.scss";
import SixthPage from "@/app/pages/sixthPage/SixthPage";
import AboutUs from "@/app/pages/AboutUs/AboutUs";
import BestSellers from "@/app/pages/BestSellers/BestSellers";

const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <main>
        <FirstPage />
        <AboutUs />
        <BestSellers />
        <SixthPage />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
