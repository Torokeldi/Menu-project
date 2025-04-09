import Image from "next/image";
import scss from "./SixthPage.module.scss";
import Line from "../../../assets/images/Frame 10.png";
import arrow from "../../../assets/images/arrow-right.svg";
import phoneNumber from "../../../assets/images/SF Symbol2.png";
import email from "../../../assets/images/SF Symbol.png";
import telegram from "../../../assets/images/Telegram.png";
import instagram from "../../../assets/images/Instagram.png";

const SixthPage = () => {
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

            <img
              className={scss.location}
              src="https://s3-alpha-sig.figma.com/img/9446/9ed4/2722774a78cabe5da35fac0ede341734?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FHQi1Ig6CMWwLsvkjzI1CvW13WHq89LcAdYmBUhhWiHw3zf35txf0SvlNqeNK9UjmYnlxlFlRgiD-gAj5~va0elPkQe~erSsYm8i7THUDYf-ttyV8SfKiuBtG-bT8m6jLFkMBOH7ZORSBHIER6UW3umN2OPvanNcTq7V0jH~MpaRmRsvIg970zeQA3Z7su~cgc2c-xzjpnDUkmbaTMkt-9WWB-5Mdj6LGrqCQp56dTgcvFePsdpio2vf6i9c5xFKpexa0abKPwP8Nab7zJvgb4RYMMrL2ddfGV4toP2tad2j8aen52~5-qqeJ4vBoYMqxoFhRedFvZ5F9XKLrxyCKQ__"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthPage;
