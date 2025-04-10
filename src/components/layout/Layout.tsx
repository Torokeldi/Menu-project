
import FirstPage from "@/app/pages/firstPage/FirstPage";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./Layout.module.scss";
import MainMenu from "@/app/pages/menuSections/MainMenu";
import ModernInterior from "@/app/pages/modernInterier/ModernInterier";

const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <main>
        <FirstPage />
        <MainMenu/>
        <ModernInterior/>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
