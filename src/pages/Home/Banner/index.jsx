import React from "react";
import "./style.scss";
import Ho from "@src/assets/svg/ho.svg";
import Ios from "@src/assets/svg/ios.svg";
import Android from "@src/assets/svg/android.svg";
import Bannerimg from "@src/assets/img/banner.jpg";

export default function Banner() {
  return (
    <>
      <div
        className="banner"
        style={{ background: `url(${Bannerimg})`, backgroundSize: "cover" }}
      >
        <div className="container">
          <div className="banner-main">
            <div className="banner-main_text">
              <div className="war">WAR BEASTS</div>
              <div>
                War beasts, in the event of the enlightenment between heaven,
                Earth and the ancient gods, Warbeasts exist. The earthly orders
                among animals were complicated, bloody wars occurred in all
                territories.
              </div>
              <div className="imgs">
                <img src={Ios} alt="" />
                <img src={Android} alt="" />
              </div>
              <div className="coming">COMING SOON</div>
            </div>
            <div className="banner-main_img">
              <img src={Ho} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
