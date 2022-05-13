import mc from '../../assets/mc.webp';
import './channel.css';
import { motion } from 'framer-motion'; 
import ReactPlayer from 'react-player';

const Channel = () => {
  return (
    <div className='channel overflow-hidden' id='Channels'>
        <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center overflow-hidden">
                    <div class="lg:flex-grow sm:w-1/2 md:w-auto lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <p class="text-sm mt-2 text-white mb-8 w-full">+80 thousand movies and series</p>    
                    <motion.h1 class="title-font sm:text-4xl text-4xl mb-5 font-medium gradient__text pb-1"
                      initial={{x: -200}}
                      whileInView={{x: 0}}
                      transition={{ delay: 0.2, duration: 0.5 }}

                    >We offer all Open and Closed Channels, without crashes and in great qualities.
                    </motion.h1>

                    <motion.p class="mb-8 leading-relaxed overflow-hidden"
                      initial={{x: 200, opacity: 0}}
                      whileInView={{x:0, opacity: 1}}
                      transition={{ delay: 0.2, duration: 0.5 }}

                    >Enjoy the big screen on TV or watch on tablet, laptop, cell phone and other devices. Our selection of 4K titles continues to grow. Also, for everyone's happiness, you can configure your login on multiple devices, but in order to be able to watch simultaneously, you need to buy the extra point. If any doubts remain, please contact us.
                    </motion.p>

                    <a href='#Advantages' class="text-sm mt-2 text-orange-500 mb-5 w-full font-semibold">Continue Reading</a>
                    </div>
                    <motion.div class="lg:max-w-lg lg:block lg:w-full md:w-1/2 w-5/6 channel-hero"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1 }}
                    >
                    <ReactPlayer playing muted loop width="600px" height="400px" url="https://youtu.be/UCTzH8jhkp8" controls={false}/>
                    </motion.div>
            </div>
        </section>
    </div>
  )
};

export default Channel