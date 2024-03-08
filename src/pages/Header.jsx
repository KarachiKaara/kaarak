import { Link, Outlet} from "react-router-dom"
import React from 'react'
import './Header.css'
import Icon from './images/icon.png'
import Flag from './images/flag.png'
import Gray from './images/gray.png'
import BoshOgrigi from './images/BoshOgrigi.png'
import Search from './images/search.png'
import Camera from './images/Camera.png'
import Locatsion from './images/locatsion.png'
import Rozmatchik from './images/Rozmatchik.png'

export default function Header() {
  return (
    <>
    <header className='Header'>
        <button className='Header_lv1'>
            <Link to="/DiplomKKKKemas">
                <img className='Header_lv1-img' src={Icon} alt="not info" />
            </Link>
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
         <a className="Header_lv6_Rozmat_Sila" href="https://www.amazon.com/ap/signin?_encoding=UTF8&accountStatusPolicy=P1&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss%2Forder-history%3Fie%3DUTF8%26ref_%3Dnav_orders_first&pageId=webcs-yourorder&showRmrMe=1">
            <p className='Header_lv6-text'>Returns</p>
            <p className='Header_lv6-text2'>& Orders</p>
            </a>
       </div>
       <div className='Header_lv7'>
            <p className='Header_lv7-raqam'>0</p>
            <img className='Header_lv7-img' src={BoshOgrigi} alt="not info" />
            <p className='Header_lv7-text'>Cart</p>
       </div>

    </header>
    <div className='RozmatCity_div'>
        <ul className='RozmatCity_div_Gitarani'>
                <li className='RozmatCity_div_Gitarani-aytmagan1'> <img className="RozmatCity_div_Gitarani-aytmagan1-Rozmatchik" src={Rozmatchik} alt="not info" />All</li>
            <Link className="Rozmat_Aka_Sila" to='/Manbirinchi'>
                <li className='RozmatCity_div_Gitarani-aytmagan2'>Today's Deals</li>
            </Link>
            <Link className="Rozmat_Aka_Sila" to='/Olamanmidipni'>
                <li className='RozmatCity_div_Gitarani-aytmagan3'>Customer Service</li>
            </Link>
            <Link className="Rozmat_Aka_Sila" to='/Qolizdan'>
            <li className='RozmatCity_div_Gitarani-aytmagan4'>Registry</li>
            </Link>
            <Link className="Rozmat_Aka_Sila" to='/Omonatizni'>
            <li className='RozmatCity_div_Gitarani-aytmagan5'>Gift Cards</li>
            </Link>
            <Link className="Rozmat_Aka_Sila" to='/Olasiz'>
            <li className='RozmatCity_div_Gitarani-aytmagan6'>Sell</li>
            </Link>
        </ul>
    </div>
    <Outlet/>
   
    </>
  )
}
