import React from 'react'
import './style.scss'
import Chuot from '@src/assets/svg/chuot.svg'
import Trau from '@src/assets/svg/trau.svg'
import Homini from '@src/assets/svg/homini.svg'
import Meo from '@src/assets/svg/meo.svg'
import Rong from '@src/assets/svg/rong.svg'
import Ran from '@src/assets/svg/ran.svg'
import Ngua from '@src/assets/svg/ngua.svg'
import De from '@src/assets/svg/de.svg'
import Khi from '@src/assets/svg/khi.svg'
import Ga from '@src/assets/svg/ga.svg'
import Cho from '@src/assets/svg/cho.svg'
import Heo from '@src/assets/svg/heo.svg'
import BGgameplay from '@src/assets/img/gameplay.jpg'


const listAnimals = [
    {
        img: Chuot,
        id: 1,
    },
    {
        img: Trau,
        id: 2,
    },
    {
        img: Homini,
        id: 3,
    },
    {
        img: Meo,
        id: 4,
    },
    {
        img: Rong,
        id: 5,
    },
    {
        img: Ran,
        id: 6,
    },
    {
        img: Ngua,
        id: 7,
    },
    {
        img: De,
        id: 8,
    },
    {
        img: Khi,
        id: 9,
    },
    {
        img: Ga,
        id: 10,
    },
    {
        img: Cho,
        id: 11,
    },
    {
        img: Heo,
        id: 12,
    },
]

export default function Items() {
  return (
    <>
    <div className='items' style={{background:`url(${BGgameplay})` , backgroundSize:"cover"}}>
        <div className='container'>
            <div className='items-main'>
                <div className='items-main_text'>
                    <div className='nft'>
                        <div>NFT ITEMS</div>
                        <div>Free exchange and valuate products by ($ WBT) Sellers will pay 5% transaction fee for each successfully exchan</div>
                    </div>
                    <button className='market'>Marketplace</button>
                </div>
                <div className='items-main_img'>
                    {listAnimals.map((e) => {
                        return (
                            <div className='animals'>
                                <img src={e?.img} alt="" />
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
