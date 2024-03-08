import './RozmatJon.css'
import { Outlet } from 'react-router-dom'


function RozmatJon() {
  return (
    <div className='RozmatJon-Qiynarkansizda'>
      <div className='RozmatJon-Qiynarkansizda-Manimcha-Osson'>
        <div className='RozmatJon-Qiynarkansizda-Manimcha-Osson-Bilasizmi_Aka'>
          <p></p>
          <button></button>
          <div>
            <p></p>
            <a href="https://www.amazon.com/ap/register?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fref%3Drhf_sign_in&openid.assoc_handle=usflex">
              <p></p>
            </a>
          </div>
        </div>
      </div>


      <div className='RozmatJon-Qiynarkansizda-one_love_aka'></div>
      <div className='RozmatJon-Qiynarkansizda-Abed_Qimimizmi'></div>
      <div className='RozmatJon-Qiynarkansizda-sorash_esimdan_chiqibQoluradi-Nega_ha_mayli'></div>
      <Outlet/>
    </div>
  )
}
export default RozmatJon