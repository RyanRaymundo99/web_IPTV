import { PaidOutlined, QueryBuilderOutlined } from '@mui/icons-material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { motion } from 'framer-motion';

const Advantages = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden" id='Advantages'>
        <div class="container px-4 pb-10 pt-5 mx-auto overflow-hidden">
          <div class="text-center mb-5">
            <h1 className='sm:text-3xl text-5xl font-medium text-white title-font mb-4'>Advantages</h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400">We offer a wide, high quality and very diverse channel grid! We have fun and entertainment for the whole family!</p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <motion.div class="p-4 md:w-1/3 flex flex-col text-center items-center"
              initial={{y: 200, opacity: 0}}
              whileInView={{y:0, opacity: 1}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-500 mb-5 flex-shrink-0">
                <ContactMailIcon style={{ fontSize: 53 }}/>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">No fidelity</h2>
                <p class="leading-relaxed text-base">You can cancel at any time, without any kind of fee for it!</p>
              </div>
            </motion.div>
            <motion.div class="p-4 md:w-1/3 flex flex-col text-center items-center"
              initial={{y: 200, opacity: 0}}
              whileInView={{y:0, opacity: 1}}
              transition={{ delay: 0.8, duration: 0.3 }}
            >
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-500 mb-5 flex-shrink-0">
                <QueryBuilderOutlined style={{ fontSize: 53 }}/>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Quick access</h2>
                <p class="leading-relaxed text-base">Quality support, ready to reply you immediately and answer any questions about the service!</p>
              </div>
            </motion.div>
            <motion.div class="p-4 md:w-1/3 flex flex-col text-center items-center"
              initial={{y: 200, opacity: 0}}
              whileInView={{y:0, opacity: 1}}
              transition={{ delay: 1, duration: 0.2 }}
            >
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-500 mb-5 flex-shrink-0">
                <PaidOutlined style={{ fontSize: 53 }} />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Reimbursement</h2>
                <p class="leading-relaxed text-base">In cases of dissatisfaction with our service, we will refund your money!</p>
              </div>
            </motion.div>
          </div>
        </div>
     </section>
    </div>
  )
}

export default Advantages