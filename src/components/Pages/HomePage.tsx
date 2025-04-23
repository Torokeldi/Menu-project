import React from "react"
import FirstPage from "./homeSections/firstPage/FirstPage";
// import AboutUs from "./homeSections/AboutUs/AboutUs";
// import BestSellers from "./homeSections/BestSellers/BestSellers";
import MainMenu from "./homeSections/menuSections/MainMenu";
import SixthPage from "./homeSections/sixthPage/SixthPage";
import ModernInterior from "./homeSections/modernInterior/ModernInterior";

const HomePage = () => {
  return (
      <React.Fragment>
        <FirstPage />
        {/* <AboutUs /> */}
        {/* <BestSellers /> */}
        <MainMenu />
        <ModernInterior />
        <SixthPage />
      </React.Fragment>
  );
};

export default HomePage;
