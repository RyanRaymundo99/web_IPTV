import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {FiMenu, FiX} from 'react-icons/fi';
import './navbar.css';

const Menu = () => (
  <>
  <Link to="/"><p><a>Home</a></p></Link>
  <p><a href='/#Pricing'>Pricing</a></p>
  <p><a href='/#Channels'>Advantages</a></p>
  <Link to="/Docs"> <p><a>Docs</a></p></Link>
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
        
          <Link to="/Cart">        
          <button type='button' className='cart_button'>
            <ShoppingCartIcon style={{ fontSize: 40 }}/>
          </button>
          </Link>

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