import { motion } from 'framer-motion';
import './apps.css';

const Apps = () => {
  return (
    <div className='apps'>
        <section class="text-gray-400 bg-gray-900 body-font">
          <div class="container mx-auto flex flex-col px-5 pb-2 pt-5 justify-center items-center">
              <motion.img 
              class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="https://blueplay.me/wp-content/uploads/2021/02/cel-1433x1536.png"
              initial={{ y:200, opacity: 0}}
              whileInView={{ y:0, opacity: 1}}
              transition={{ duration: 2}}

              />
            <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Watch Wherever You Want</h1>
                <p class="mb-8 leading-relaxed">Cine TV offers a totally exclusive app for you. Just download it and watch whatever you want and whenever you want. Our App offers all types of Series, just choose which one you want to watch.</p>
                <motion.div class="flex text-gray-300 overflow-hidden"
                  initial={{ x: '-50vw'}}
                  whileInView={{ x: 0 }}
                  transition={{ type: 'spring', stiffness: 120}}
                >
                  <a href="https://play.google.com/store/apps/details?id=com.nathnetwork.xciptv&hl=en&gl=US">
                    <button class="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:text-white focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                    </svg>
                    <span class="ml-4 flex items-start flex-col leading-none">
                      <span class="title-font font-medium">Google Play</span>
                    </span>
                    </button>
                  </a>
              </motion.div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Apps