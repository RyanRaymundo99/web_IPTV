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
      <motion.div className='cine-club__navbar gradient__bg'
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0}}
        transition={{ ease: 'easeInOut', duration: 1, delay: 0.6 }}
        >

          <div className='cine-club__navbar-links'>
              <Link to="/">
                <div className='cine-club__navbar-links_logo'>
                    <div className='logo'><LiveTvOutlinedIcon style={{ fontSize: '50' }} /></div>
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

      </motion.div>
  )
}

export default Navbar