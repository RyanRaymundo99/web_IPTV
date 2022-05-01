import './hero.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { BsMessenger } from "react-icons/bs";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='cine-club__header' id='home'>
        <div className='cine-club__header-content'>
            <h4>ENTRETENIMENTO PARA TODA A FAMÍLIA</h4>

            <h1> ASSISTA NA SMART TV, PC, TV BOX E CELULARES</h1>

            <p>A possibilidade de assistir seu programa de TV em qualquer lugar, e em qualquer dispositivo com acesso a internet computadores, TV smart, TV BOX, ANDROID, IOS, não ficando preso a uma instalação de antena ou cabo. Com a qualidade ainda superior aos sistemas convencionais.</p>

            <a className='header_button' href="#Channels">Saiba mais</a>
        </div>

        <div className='zap'>
          <a class="float">
           {toggleMenu
            ?<WhatsAppIcon style={{ fontSize: 35 }} className='my-float' onClick={() => setToggleMenu(false)} />
            :<WhatsAppIcon style={{ fontSize: 35 }} className='my-float' onClick={() => setToggleMenu(true)} />
           }
           {toggleMenu && (
              <div className='cine-club__navbar-menu_container-zap scale-up-center'>
                  <div className='cine-club__navbar-menu_container-links-zap'>
                    <ul className='zap-icons'>
                        <li><WhatsAppIcon className='zap-icon-zap'/><a href='https://wa.me/message/MHFFSJY36MWCP1'>Matutino</a></li>
                        <li><WhatsAppIcon className='zap-icon'/><a href='https://wa.me/message/MHFFSJY36MWCP1'>Vestpertino</a></li>
                        <li><WhatsAppIcon className='zap-icon'/><a href='https://wa.me/message/MHFFSJY36MWCP1'>Noturno</a></li>
                    </ul>
                  </div>
              </div>
           )}
          </a>
        </div>
    </div> 
  )
}

export default Hero