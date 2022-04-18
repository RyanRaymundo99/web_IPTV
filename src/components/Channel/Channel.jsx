import './channel.css';
import bg from '../../assets/bg.jpeg';

const Channel = () => {
  return (
    <div className='channel' id='Channels'>
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <p class="text-sm mt-2 text-white mb-8 w-full">+80 mil conteudos</p>    
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium gradient__text">Oferecemos todos os Canais Abertos e Fechados, sem travamentos e em ótimas qualidades.</h1>
                    <p class="mb-8 leading-relaxed">Aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos. Nossa seleção de títulos em 4K não para de crescer. Além disso, para a felicidade de todos, Você pode configurar seu login em diversos dispositivos, mas para que consiga assistir simultaneamente, é preciso que você adquira o ponto extra. Se alguma dúvida permanecer, nos contate</p>
                    <a href='#advantages' class="text-sm mt-2 text-orange-500 mb-5 w-full font-semibold">Continuar Lendo</a>
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