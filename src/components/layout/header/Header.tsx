import Link from "next/link";
import scss from "./Header.module.scss";
import search from "./../../../assets/images/Group 6.png";
import Image from "next/image";
import burgerMenu from "../../../assets/images/textalign-justifyright.png";

const Header = () => {
  return (
    <div className={scss.Header}>
      <div className={scss.content}>
        <h1 id={scss.logo}>Restaurant</h1>
        <div className={scss.links}>
          <Link className={scss.link} href="">
            Interior
          </Link>
          <Link className={scss.link} href="">
            About Us
          </Link>
          <Link className={scss.link} href="">
            Menu
          </Link>
          <Link className={scss.link} href="">
            Contacts
          </Link>
        </div>
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
