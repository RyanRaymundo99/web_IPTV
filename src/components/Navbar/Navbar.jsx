import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {FiMenu, FiX} from 'react-icons/fi';
import './navbar.css';

const Menu = () => (
  <>
  <Link to="/"><p>Home</p></Link>
  <p><a href='/#Pricing'>Pricing</a></p>
  <p><a href='/#Channels'>Advantages</a></p>
  <Link to="/Docs"> <p>Docs</p></Link>
  </>
)

const pathVariant = {
    initial: {
        opacity: 0,
        pathLength: 0
    },

    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: "easeInOut"
        }
    }
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
      <div className='cine-club__navbar gradient__bg'>

          <div className='cine-club__navbar-links'>
              <Link to="/">
                <div className='cine-club__navbar-links_logo'>
                    <div className='logo'><motion.svg width="76" height="56" viewBox="0 0 76 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path  d="M63.1336 7.71173H55.8011L58.529 3.67492C59.3192 2.58737 58.8481 1.19875 57.4804 0.572032C56.1126 -0.0546887 54.365 0.313971 53.5747 1.40152L49.3196 7.71173H26.6456C26.5849 7.52126 26.4861 7.33079 26.3493 7.1526L22.0106 2.10197C21.2279 1.039 19.4727 -0.460214 18.1049 0.154218C16.7372 0.76865 16.2661 2.1204 17.0563 3.18337L20.2325 7.71173H12.4516C6.1373 7.71173 0.559998 11.0112 0.559998 16.1909V45.7881C0.559998 50.8449 6.19808 55.404 12.4516 55.404H64.5394C70.9373 55.404 75.0253 50.894 75.0253 45.7881V16.1848C75.0253 11.0112 69.448 7.71173 63.1336 7.71173ZM70.1699 45.782C70.1699 48.6698 68.1107 51.4716 64.5394 51.4716H12.4516C8.88036 51.4716 5.41544 48.6698 5.41544 45.782V16.1848C5.41544 13.2969 8.88036 11.6318 12.4516 11.6318H63.1336C66.7049 11.6318 70.1699 13.2908 70.1699 16.1848V45.782Z" fill="white" variants={pathVariant} initial="initial" animate="visible"/>
                    <motion.path d="M49.2968 31.5825C47.9443 30.925 33.925 24.6947 33.1272 24.3137C32.1318 23.8345 31.1288 24.4427 31.1288 25.2661V39.8466C31.1288 40.7498 32.2382 41.186 33.0816 40.7928C34.2366 40.2521 48.3166 33.9849 49.2968 33.4995C50.1782 33.0571 50.1934 32.0187 49.2968 31.5825Z" fill="white"/>
                    </motion.svg></div>
                    <h1>CINE TV</h1>
                </div>
              </Link>

              <div className='cine-club__navbar-links_container'>
                 <Menu />
              </div>
              
          </div>
        
          <Link to="/Cart">        
          <button type='button' className='cart_button'>
            <ShoppingCartIcon className='cart-icon'/>
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