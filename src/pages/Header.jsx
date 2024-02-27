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
            <textarea className='Header_lv3-All-Oxshasin' name="" id="" cols="30" rows="10">
                <p>All Departments</p>
            </textarea>
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
            <div class="RozmatAka_Kaara_collab-sign">
            <div class="RozmatAka_Kaara_collab-sign-top">
                <div class="RozmatAka_Kaara_collab-sign-top-Nega"></div>
                <button class="RozmatAka_Kaara_collab-sign-top-btn">Sign in</button>
                <div class="RozmatAka_Kaara_collab-sign-top-wrapper">
                    <p class="RozmatAka_Kaara_collab-sign-top-wrapper-text">New coustumer?</p>
                    <a class="RozmatAka_Kaara_collab-sign-top-wrapper-link" href="https://www.youtube.com/@KarachiKaara">
                        <p class="RozmatAka_Kaara_collab-sign-top-wrapper-link-text">Start here.</p>
                    </a>
                </div>
            </div>
            <div class="RozmatAka_Kaara_collab-sign_bottom">
                <div class="RozmatAka_Kaara_collab-sign_bottom-left">
                    <h1 class="RozmatAka_Kaara_collab-sign_bottom-right-h1">Your listes</h1>
                    <p class="RozmatAka_Kaara_collab-sign_bottom-right-text">Create a list</p>
                    <p class="RozmatAka_Kaara_collab-sign_bottom-right-text">Find a List or Registy</p>
                </div>
                <div class="RozmatAka_Kaara_collab-sign_bottom-right">
                    <h1 class="RozmatAka_Kaara_collab-sign_bottom-right-h1">Your Account</h1>
                    <p class="RozmatAka_Kaara_collab-sign_bottom-right-text">Account</p>
                    <p class="RozmatAka_Kaara_collab-sign_bottom-right-text">Orders</p>
                    <p class="RozmatAka_Kaara_collab-sign_bottom-right-text">Recommendations</p>
                    <p class="RozmatAka_Kaara_collab-sign_bottom-right-text">Browsing History</p>
                    <p class="RozmatAka_Kaara_collab-sign_bottom-right-text">Watchlist</p>
                    <p class="RozmatAka_Kaara_collab-sign_bottom-right-text">Video Purchases & Rentals</p>
                    <p class="RozmatAka_Kaara_collab-sign_bottom-right-text">Kindle Unlimited</p>
                    <p class="RozmatAka_Kaara_collab-sign_bottom-right-text">Content & Devices</p>
                    <p class="RozmatAka_Kaara_collab-sign_bottom-right-text">Subscribe & Save Items</p>
                    <p class="RozmatAka_Kaara_collab-sign_bottom-right-text">Memberships & Subscriptions</p>
                </div>
            </div>
        </div>
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
