import React, { useState } from 'react';
import Logo from '@src/assets/svg/logo.svg';
import Banner from '@src/assets/img/banner.jpg';
import Iso from '@src/assets/svg/iso.svg';
import Android from '@src/assets/svg/android.svg';
import Ho from '@src/assets/svg/ho.svg';
import './style.scss'

 
const listMenu = [
  {
    name: "HOME",
    id:1,
    isActive:true,
  },
  {
    name: "ABOUT",
    id:2,
    isActive:false,
  },
  {
    name: "NFT ITEMS",
    id:3,
  },
  {
    name: "TOKENOMICS",
    id:4,
  },
  {
    name: "ROADMAP",
    id:5,
  },
  {
    name: "TEAM",
    id:6,
  },
]


export default function Header() {
  const [data, setData] = useState(listMenu)
  const onChange = (ev) => {
  
    if(ev.target.value){
      let test =  listMenu?.filter((e) =>  e.name == ev.target.value)
      setData(test)
    }else{
      setData(listMenu)
    }
  }
 console.log(data);
  return (
    <div className='header'>
      <div className="container">
        <div className='header-main'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className='header-main_text'>
      {listMenu.map((e) => {
        return(
          <div className={e.isActive == true ? 'background' : ''}> {e.name}</div>
        )
      })}
            </div>
            <div className='wallet'>WALLET CONNECT</div>
        </div>
      </div>
      <input type="text"  onChange={(e) => onChange(e)}/>
      <input type="text" />

    </div>
  )
}
