import './canais.css';
import Popcorn from '../../assets/Popcorn.png';

const Canais = () => {
  return (
    <div className='talk-hub__technology' id='vantagens'>

            <div className='talk-hub__technology-content'>
                <h4>+80 Mil Conteúdos</h4>

                <h1 className='gradient__text'> Oferecemos todos os Canais Abertos e Fechados, sem travamentos e em ótimas qualidades.</h1>

                <p>Aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos. Nossa seleção de títulos em 4K não para de crescer. Além disso, para a felicidade de todos, Você pode configurar seu login em diversos dispositivos, mas para que consiga assistir simultaneamente, é preciso que você adquira o ponto extra. Se alguma dúvida permanecer, nos contate</p>

                <h4><a href="#">Continuar lendo</a></h4>
            </div>

            <div className='talk-hub__technology-image'>
                <img src={Popcorn} alt="popcorn" />
            </div>
        </div>
  )
}

export default Canais