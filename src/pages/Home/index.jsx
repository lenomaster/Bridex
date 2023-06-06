import React from "react";
// import Iso from "@src/assets/svg/ios.svg";
// import Android from "@src/assets/svg/android.svg";
// import Ho from "@src/assets/svg/ho.svg";
// import P2E from "@src/assets/svg/P2E.svg";
// import P2P from "@src/assets/svg/P2P.svg";
// import Boxtop from "@src/assets/svg/boxtop.svg";
// import Box from "@src/assets/svg/box.svg";
// import Cho from "@src/assets/svg/cho.svg";
// import Chuot from "@src/assets/svg/chuot.svg";
// import De from "@src/assets/svg/de.svg";
// import Ga from "@src/assets/svg/ga.svg";
// import Heo from "@src/assets/svg/heo.svg";
// import Meo from "@src/assets/svg/meo.svg";
// import Khi from "@src/assets/svg/khi.svg";
// import Ngua from "@src/assets/svg/ngua.svg";
// import Ran from "@src/assets/svg/ran.svg";
// import Rong from "@src/assets/svg/rong.svg";
// import Trau from "@src/assets/svg/trau.svg";
// import Hocon from "@src/assets/svg/hocon.svg";
import Header from "./Header";
import Banner from "./Banner";
import Gameplay from './Gameplay'
import Systems from './Systems'
import Items from './Items'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Gameplay/>
      <Systems/>
      <Items/>

    </>
  );
}
