"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import scss from "./Header.module.scss";
import searchIcon from "@/assets/images/Group 6.png";

interface LinkItem {
  id: number;
  name: string;
  href: string;
}

const links: LinkItem[] = [
  { id: 1, name: "Interior", href: "#interior" },
  { id: 2, name: "About Us", href: "#about" },
  { id: 3, name: "Menu", href: "#MainMenu" },
  { id: 4, name: "Contacts", href: "#sixthPage" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const toggleNav = () => setIsOpen((prev) => !prev);

  return (
    <header className={scss.header}>
      <h1 className={scss.header_logo}>Restaurant</h1>

      <nav className={scss.header_links}>
        {links.map((link) => (
          <Link key={link.id} href={link.href} className={scss.header_links_item}>
            {link.name}
          </Link>
        ))}
      </nav>

      <div className={scss.header_actions}>
        <div className={scss.header_actions_search}>
          <Image src={searchIcon} alt="Search" width={16} height={16} />
          <input
            type="text"
            placeholder="Search..."
            className={scss.header_actions_search_input}
          />
        </div>
        <button
          className={scss.header_actions_langBtn}
          onClick={() =>
            setLanguage((prev) => (prev === "EN" ? "RU" : prev === "RU" ? "KG" : "EN"))
          }
        >
          {language}
        </button>
      </div>

      <button className={scss.burger_open} onClick={toggleNav}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={scss.burger_line}
            style={{
              transform: isOpen
                ? i === 0
                  ? "rotate(45deg) translate(5px, 5px)"
                  : i === 2
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : "scale(0)"
                : "none",
              opacity: isOpen && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>

      <div className={`${scss.sidenav} ${isOpen ? scss.open : ""}`}>
        <div className={scss.sidenav_header}>
          <h1 className={scss.sidenav_logo}>Restaurant</h1>
          <button className={scss.sidenav_closeBtn} onClick={toggleNav}>×</button>
        </div>

        <nav className={scss.sidenav_links}>
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={scss.sidenav_links_item}
              onClick={toggleNav}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className={scss.sidenav_langBtns}>
          {["EN", "RU", "KG"].map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={language === lang ? scss.active : ""}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
