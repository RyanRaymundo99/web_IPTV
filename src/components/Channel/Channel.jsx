import bg from '../../assets/bg.jpeg';

const Channel = () => {
  return (
    <div className='channel' id='Channels'>
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <p class="text-sm mt-2 text-white mb-8 w-full">+80 thousand movies and series</p>    
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium gradient__text">We offer all Open and Closed Channels, without crashes and in great qualities.</h1>
                    <p class="mb-8 leading-relaxed">Enjoy the big screen on TV or watch on tablet, laptop, cell phone and other devices. Our selection of 4K titles continues to grow. Also, for everyone's happiness, you can configure your login on multiple devices, but in order to be able to watch simultaneously, you need to buy the extra point. If any doubts remain, please contact us.</p>
                    <a href='#Advantages' class="text-sm mt-2 text-orange-500 mb-5 w-full font-semibold">Continue Reading</a>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded" alt="hero" src={bg}/>
                    </div>
            </div>
        </section>
    </div>
  )
};

export default Channel