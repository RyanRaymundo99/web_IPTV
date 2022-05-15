import './hero.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { BsMessenger } from "react-icons/bs";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import qr from '../../assets/qr.jpg'

const Hero = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='cine-club__header' id='home'>
        <motion.div className='cine-club__header-content'
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
        >
            <h4>ENTERTAINMENT FOR THE WHOLE FAMILY</h4>

            <h1> WATCH ON SMART TV, PC, TV BOX AND CELL PHONES</h1>

            <p>The possibility to watch your TV show anywhere, and on any device with internet access computers, smart TV, TV BOX, ANDROID, IOS, not being tied to an antenna or cable installation. With the quality even superior to conventional systems.The possibility to watch your TV show anywhere, and on any device with internet access computers, smart TV, TV BOX, ANDROID, IOS, not being tied to an antenna or cable installation.</p>

            <a className='header_button' href="#Channels">Keep reading</a>
        </motion.div>

        <div className='zap'>
          <a class="float">
           {toggleMenu
            ?<WhatsAppIcon style={{ fontSize: 35 }} className='my-float' onClick={() => setToggleMenu(false)} />
            :<WhatsAppIcon style={{ fontSize: 35 }} className='my-float' onClick={() => setToggleMenu(true)} />
           }
           {toggleMenu && (
              <div className='cine-club__navbar-menu_container-zap scale-up-center'>
                  <div className='cine-club__navbar-menu_container-links-zap'>
                       <a href='https://wa.me/message/MHFFSJY36MWCP1'>Direct link</a>
                       <p>Or use our QR code:</p>
                       <img className='cine-club__navbar-menu_container-links-zap-img' src={qr} alt="qr" />
                  </div>
              </div>
           )}
          </a>
        </div>
    </div> 
  )
}

export default Hero