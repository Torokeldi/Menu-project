import Link from "next/link";
import scss from "./Footer.module.scss";
import Image from "next/image";
import socialMedia1 from "./../../../assets/images/Vector (8).png";
import socialMedia2 from "./../../../assets/images/Subtract.png";

const Footer = () => {
  return (
    <div className={scss.Footer}>
      <div className="container">
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
          <div className={scss.socialMedias}>
            <Image className={scss.app} src={socialMedia1} alt="" />
            <Image className={scss.app} src={socialMedia2} alt="" />
          </div>
        </div>
      </div>
      C 2023 Motion Study LLC
    </div>
  );
};

export default Footer;
