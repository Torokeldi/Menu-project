import FirstPage from "@/app/pages/firstPage/FirstPage";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <main>
        <FirstPage />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
