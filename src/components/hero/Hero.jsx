import './hero.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Hero = () => {
  return (
    <div className='cine-club__header' id='home'>
        <div className='cine-club__header-content'>
            <h4>ENTRETENIMENTO PARA TODA A FAMÍLIA</h4>

            <h1> ASSISTA NA SMART TV, PC, TV BOX E CELULARES</h1>

            <p>A possibilidade de assistir seu programa de TV em qualquer lugar, e em qualquer dispositivo com acesso a internet computadores, TV smart, TV BOX, ANDROID, IOS, não ficando preso a uma instalação de antena ou cabo. Com a qualidade ainda superior aos sistemas convencionais.</p>

            <a className='header_button' href="#Channels">Saiba mais</a>
        </div>

        <div className='zap'>
          <a href="https://api.whatsapp.com/message/MHFFSJY36MWCP1?autoload=1&app_absent=0" class="float">
            <WhatsAppIcon style={{ fontSize: 35 }} className='my-float'/>
          </a>
        </div>
    </div> 
  )
}

export default Hero