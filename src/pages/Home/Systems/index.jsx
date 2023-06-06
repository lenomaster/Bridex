import React from "react";
import "./style.scss";
import Boxbg from "@src/assets/img/box.jpg";
import Box from "@src/assets/svg/box.svg";
import Boxtop from "@src/assets/svg/boxtop.svg";
import BGboxtop from "@src/assets/svg/bgboxtop.svg";

const listBox = [
  {
    name: "x100 species",
    id: 1,
    isActive: true,
  },
  {
    name: "x1 NFT plot",
    id: 2,
    isActive: false,
  },
  {
    name: "x1 NFT beast cages",
    id: 3,
    isActive: true,
  },
  {
    name: "x5 - x10 nutrition boxes",
    id: 4,
    isActive: false,
  },
  {
    name: "x5 - x10 P2P battle cards",
    id: 5,
    isActive: true,
  },
  {
    name: "x1 NFT beast ( random 1* - 5*)",
    id: 6,
    isActive: false,
  },
];

export default function Systems() {
  return (
    <>
      <div
        className="systems"
        style={{ background: `url(${Boxbg})`, backgroundSize: "cover" }}
      >
        <div className="container">
          <div className="boxtop">
            <div className="include">The five five-element systems include</div>
            <div>
              <img src={Boxtop} alt="" />
            </div>
          </div>
          <div className="systems-main">
            <div className="boximg">
              <img src={Box} alt="" />
            </div>
            <div className="boxbot">
              <div className="mys">MYSTERIOUS BOX</div>
              <div className="listbox">
                {listBox.map((e) => {
                  console.log(e.isActive);
                  return (
                    <div
                      className={e.isActive == true ? "background" : ""}
                      key={e?.name}
                    >
                      {e.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
