import React, {useState} from 'react';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import {FiMenu, FiX} from 'react-icons/fi';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#aboutus'>About us</a></p>
  <p><a href='#experience'>Experience</a></p>
  <p><a href='#pricing'>Pricing</a></p>
  <p><a href='#docs'>Docs</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
      <div className='talk-hub__navbar'>

          <div className='talk-hub__navbar-links'>
              <div className='talk-hub__navbar-links_logo'>
                  <div className='logo'><LiveTvOutlinedIcon /></div>
                  <h1>IPTV Club</h1>
              </div>

              <div className='talk-hub__navbar-links_container'>
                 <Menu />
              </div>
              
          </div>

          <div className='download_button'>
            <p><a href="">contato</a></p>
          </div>

          <div className='talk-hub__navbar-menu'>
              {toggleMenu
                  ?<FiX color="#FF4820" size="27" onClick={() => setToggleMenu(false)}/>
                  :<FiMenu color="#FF4820" size="27" onClick={() => setToggleMenu(true)}/>
              }
              {toggleMenu && (
                  <div className='talk-hub__navbar-menu_container scale-up-center'>
                      <div className='talk-hub__navbar-menu_container-links'>
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