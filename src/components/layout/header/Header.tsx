import { Link } from "react-scroll";
import scss from "./Header.module.scss";
import search from "@/assets/images/Group 6.png";
import Image from "next/image";
import burgerMenu from "@/assets/images/textalign-justifyright.png";

const Header = () => {
  return (
    <div className={scss.Header}>
      <div className={scss.content}>
        <h1 id={scss.logo}>Restaurant</h1>
        <nav className={scss.links}>
          <Link 
            className={scss.link} 
            to="ModernInterier" 
            smooth={true} 
            duration={500}
          >
            Interior
          </Link>
          <Link 
            className={scss.link} 
            to="AboutUs" 
            smooth={true} 
            duration={500}
          >
            About Us
          </Link>
          <Link 
            className={scss.link} 
            to="MainMenu" 
            smooth={true} 
            duration={500}
          >
            Menu
          </Link>
          <Link 
            className={scss.link} 
            to="sixth-page" 
            smooth={true} 
            duration={500}
          >
            Contacts
          </Link>
        </nav>

        <div className={scss.actions}>
          <div className={scss.Search}>
            <Image src={search} alt="" />
            <input placeholder="Search" type="text" />
          </div>
          <span>EN</span>
        </div>

        <Image id={scss.burgerMenu} src={burgerMenu} alt="" />
      </div>
    </div>
  );
};

export default Header;
