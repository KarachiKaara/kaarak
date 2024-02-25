import React from 'react'
import './Header.css'
import Icon from './images/icon.png'
import Flag from './images/flag.png'
import Gray from './images/gray.png'
import BoshOgrigi from './images/BoshOgrigi.png'
import Search from './images/search.png'
import Camera from './images/Camera.png'
import Locatsion from './images/locatsion.png'

export default function Header() {
  return (
    <header className='Header'>
        <button className='Header_lv1'>
            <a href=".">
                <img className='Header_lv1-img' src={Icon} alt="not info" />
            </a>
        </button>
       <div className='Header_lv2'>
        <img className='Header_lv2-img' src={Locatsion} alt="not info" />
        <div className='Header_lv2-text'>
            <p className='Header_lv2-text-1'>Deliver to</p>
            <p className='Header_lv2-text-2'>Uzbekistan</p>
        </div>
       </div>
       <div className='Header_lv3'>
        <div className='Header_lv3-All'>
            <p className='Header_lv3-All-text'>All</p>
            <img  className='Header_lv3-All-img' src={Gray} alt="not info" />
        </div>
        <div className='Header_lv3-Search'><input className='Header_lv3-Search-text' type="text" placeholder='Search Amazon'/></div>
        <div className='Header_lv3-Camera'>
            <img  className='Header_lv3-Camera-img' src={Camera} alt="not info" />
        </div>
        <button className='Header_lv3-btn'>
            <img className='Header_lv3-btn-img' src={Search} alt="not info" />
        </button>
        </div>  
       <div className='Header_lv4'>
            <img className='Header_lv4-flag' src={Flag} alt="not info" />
            <p className='Header_lv4-text'>EN
            <img className='Header_lv4-text-img' src={Gray} alt="not info" />
           </p>
       </div>      
       <div className='Header_lv5'>
        <p className='Header_lv5-sign'>Hello, Sign in</p>
        <p className='Header_lv5-acount'>Acount & Listes <img className='Header_lv5-acount-img' src={Gray} alt="not info" /></p>
       </div>
       <div className='Header_lv6'>
            <p className='Header_lv6-text'>Returns</p>
            <p className='Header_lv6-text2'>& Orders</p>
       </div>
       <div className='Header_lv7'>
            <p className='Header_lv7-raqam'>0</p>
            <img className='Header_lv7-img' src={BoshOgrigi} alt="not info" />
            <p className='Header_lv7-text'>Cart</p>
       </div>

    </header>
  )
}
