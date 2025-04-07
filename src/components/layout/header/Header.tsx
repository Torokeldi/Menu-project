import Link from "next/link";
import scss from "./Header.module.scss";
import search from "./../../../assets/images/Group 6.png";
import Image from "next/image";

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
      </div>
    </div>
  );
};

export default Header;
