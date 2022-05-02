import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import {FiMenu, FiX} from 'react-icons/fi';
import './navbar.css';

const Menu = () => (
  <>
  <Link to="/"><p><a>Home</a></p></Link>
  <p><a href='/#Pricing'>Planos</a></p>
  <p><a href='/#Channels'>Vantagens</a></p>
  <Link to="/Docs"> <p><a>Documentação</a></p></Link>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
      <div className='cine-club__navbar gradient__bg'>

          <div className='cine-club__navbar-links'>
              <div className='cine-club__navbar-links_logo'>
                  <div className='logo'><LiveTvOutlinedIcon style={{ fontSize: '50' }} /></div>
                  <h1>CINE TV</h1>
              </div>

              <div className='cine-club__navbar-links_container'>
                 <Menu />
              </div>
              
          </div>

          <div className='download_button'>
            <p><a href="https://wa.me/message/MHFFSJY36MWCP1">contato</a></p>
          </div>

          <div className='cine-club__navbar-menu'>
              {toggleMenu
                  ?<FiX color="#FF4820" size="27" onClick={() => setToggleMenu(false)}/>
                  :<FiMenu color="#FF4820" size="27" onClick={() => setToggleMenu(true)}/>
              }
              {toggleMenu && (
                  <div className='cine-club__navbar-menu_container scale-up-center'>
                      <div className='cine-club__navbar-menu_container-links'>
                          <Menu />
                      </div>
                  </div>
              )

              }
          </div>      

      </div>
  )
}

export default Navbar