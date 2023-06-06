import React from "react";
import "./style.scss";
import P2E from "@src/assets/svg/P2E.svg";
import P2P from "@src/assets/svg/P2P.svg";
import Spring from "@src/assets/svg/spring.svg";
import Summer from "@src/assets/svg/summer.svg";
import Winter from "@src/assets/svg/winter.svg";
import Autumn from "@src/assets/svg/autumn.svg";
import Gameplayimg from "@src/assets/img/gameplay.jpg";

const listText = [
  {
    name: "Beast 1* - 5* battle 2 times/day, costs 2 energy each time.",
    id: 1,
    isActive: true,
  },
  {
    name: "Beast 1* randomly earn 18 - 22 WBT/day/2 times.",
    id: 2,
    isActive: false,
  },
  {
    name: "Beast 2* randomly earn 24 - 28 WBT/day/2 times.",
    id: 3,
    isActive: true,
  },
  {
    name: "Beast 3* randomly earn 30 - 36 WBT/day/2 times.",
    id: 4,
    isActive: false,
  },
  {
    name: "Beast 4* randomly earn 40 - 48 WBT/day/2 times.",
    id: 5,
    isActive: true,
  },
  {
    name: "Beast 5* randomly earn 52 - 60 WBT/day/2 times.",
    id: 6,
    isActive: false,
  },
];

const listText2 = [
  {
    name: "Beast 2* can battle 1 time/day, costs 1 battle card 2* 100 WBT",
    id: 1,
    isActive: true,
  },
  {
    name: "Winner receive 150 WBT, loser receive 50 WBT.",
    id: 2,
    isActive: false,
  },
  {
    name: "Beast 3* can battle 1 time/day, costs 1 battle card 3* 200 WBT",
    id: 3,
    isActive: true,
  },
  {
    name: "Winner receive 300 WBT, loser receive 100 WBT. ",
    id: 4,
    isActive: false,
  },
  {
    name: "Beast 4* can battle 2 times/day, costs 1 battle card 4* 300 WBT",
    id: 5,
    isActive: true,
  },
  {
    name: "Beast 5* can battle 2 times/day, costs 1 battle card 5* 400 WBT",
    id: 6,
    isActive: false,
  },
  {
    name: "Winner receive 600 WBT, loser receive 200 WBT.",
    id: 7,
    isActive: true,
  },
];

export default function Gameplay() {
  return (
    <>
      <div
        className="gameplay"
        style={{ background: `url(${Gameplayimg})`, backgroundSize: "cover" }}
      >
        <div className="container">
          <div className="gameplay-main">
            <div className="earn">GAME PLAY TO EARN</div>
            <div className="gameplay-main_text">
              <div className="p2e">
                <div className="p2eimg">
                  <img src={P2E} alt="" />
                </div>
                <div className="items">
                  {listText.map((e) => {
                    return (
                      <div className={e.isActive == true ? "isActive" : ""}>
                        {e.name}
                      </div>
                    );
                  })}
                </div>
                <div className="food">
                  <div>Food manufacture:</div>
                  <div>
                    01 piece of cultivated land can harvest 03 times/perday
                    which is equal to 03 bags of food
                  </div>
                  <div>10 WBT/1 bag of food.</div>
                  <div>40 WBT/1 nutrition box.</div>
                </div>
              </div>
              <div className="p2p">
                <div>
                  <img src={P2P} alt="" />
                </div>
                <div className="items2">
                  {listText2.map((e) => {
                    return (
                      <div className={e.isActive == true ? "isActive2" : ""}>
                        {e.name}
                      </div>
                    );
                  })}
                </div>
                <div className="rent">
                  *Rent a stadium for each P2P match, the winning side's total
                  bet cards will be deducted 5% and burned.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="seasons">
          <div className="seasons-main">
            <div className="seasons-main_text">
              <div className="gods">4 Gods represent 4 seasons</div>
              <div>
                Held competitions to choose from 12 beasts with intelligence,
                strength, strategy, flexibility and skills who represent 12
                months of the year.
              </div>
              <div>
                Besides, there will be a God who organizes a kingship contest to
                help equalize and balance all species every 3 months.
              </div>
            </div>
            <div className="seasons-main_img">
                <img src={Spring} alt="" />
                <img src={Summer} alt="" />
                <img src={Winter} alt="" />
                <img src={Autumn} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
