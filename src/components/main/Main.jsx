import React from 'react'
import "./main.css"
import {FiFacebook,FiLinkedin,FiInstagram} from "react-icons/fi"
import { AiOutlinePlayCircle } from "react-icons/ai"
const Main = () => {
  return (
    <div className="main">
      <video autoPlay muted loop className='bg-video'>
        <source src='https://r7---sn-u0g3uxax3-xnc6.googlevideo.com/videoplayback?expire=1678879866&ei=GlgRZO_oGpCVv_IP_dqU8AQ&ip=2a06%3Ac006%3A4792%3A8b9c%3Af4ed%3A1d32%3A9adf%3A6f8a&id=o-AAkQQd6pSwALGQdtCA-Qswc5dIX7sBQGFkt21HMEaPIc&itag=18&source=youtube&requiressl=yes&spc=H3gIhhFNq_KQayc4AMwRCObJ9iOPK3c&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=9325850&ratebypass=yes&dur=183.414&lmt=1673427901963627&fexp=24007246&c=ANDROID&txp=5538434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgFSpdVOj_3sVDhgYv2vYfEY9YkkdetE_o1vOA2z-3_W8CICEB9aKEHsco4XKrYQoUTzbpv7uHqnTz9b7-JPUGxw6_&title=sakiler-yalani-birak_(VideoMon.Biz)&cms_redirect=yes&mh=nP&mip=88.224.4.186&mm=31&mn=sn-u0g3uxax3-xnc6&ms=au&mt=1678857206&mv=m&mvi=7&pl=21&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgODYqkTNmdB5sK-1JBc2WKKxWsOemc55ctVnK7loib-ACICv7bArL4n7201aGfqxZYB4X47SMntUwfpSmAIGK3DZl' type='video/mp4' />
      </video>
      <div className="main-text">
        <div className="main-text-icon">
          <AiOutlinePlayCircle />
        </div>
        <div className="main-text-title">
          <p>Ferhan <span>Şensoy</span></p>
        </div>
        <div className="main-text-info">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse omnis earum ex amet, autem quidem porro et ipsum suscipit iure atque aliquam facilis in hic id accusantium dolorem consequuntur cumque.
          </p>
        </div>
        <div className="main-text-btn">
          <a href="#">Free Consultation</a>
        </div>
      </div>
      <div className="main-text-contact">
          <div className="main-text-contact-icons">
            <div className="main-text-contact-icon">
              <FiFacebook/>
            </div>
            <div className="main-text-contact-icon">
              <FiLinkedin/>
            </div>
            <div className="main-text-contact-icon">
              <FiInstagram/>
            </div>           
          </div>
          <div className="main-text-contact-user">
            <a href="#">502.629.103</a>
          </div>
        </div>
    </div>
  )
}

export default Main