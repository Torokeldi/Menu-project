import Image from "next/image";
import scss from "./SixthPage.module.scss";
import Line from "../../../assets/images/Frame 10.png";
import arrow from "../../../assets/images/arrow-right.svg";
import phoneNumber from "../../../assets/images/SF Symbol.png";
import email from "../../../assets/images/email.png";
import telegram from "../../../assets/images/telegram.png";
import instagram from "../../../assets/images/instagram.png";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import scss from "./SixthPage.module.scss";
import { useEffect } from "react";

const SixthPage = () => {
  useEffect(() => {
    const map = L.map("map", {
      center: [34.1522, -118.1445], 
      zoom: 15,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([34.1522, -118.1445]).addTo(map).bindPopup("Наше местоположение");
  }, []);

  return (
    <div className={scss.SixthPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <div className={scss.uniqueText}>
              <Image src={Line} alt="" />

              <span>Visit Restaurant</span>
            </div>
            <h1>Join Us for Happy Hours</h1>
            <h2>Your neighborhood</h2>
            <p>225$.Lake Ave.Suite 1150 Pasadena,CA 911101</p>
            <h2>Opening hours:</h2>
            <p>Mon-Thu: 10:00 am - 01:00 am</p>
            <p>Fri-Sun: 10:00 am - 02:00 am</p>
            <div className={scss.button}>
              <button>
                Purchase gift card <Image src={arrow} alt="" />
              </button>
            </div>
          </div>
          <div className={scss.image}>
            <h2>contact Info</h2>
            <div className={scss.phoneNumber}>
              <Image src={phoneNumber} alt="" />
              <p>+771219900</p>
            </div>
            <div className={scss.email}>
              <Image src={email} alt="" />
              <p>motionweb312@gmail.com</p>
            </div>
            <div className={scss.socials}>
              <Image src={telegram} alt="" />
              <Image src={instagram} alt="" />
            </div>

            <div
              id="map"
              style={{ width: "100%", height: "400px", borderRadius: "1.7px" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthPage;
