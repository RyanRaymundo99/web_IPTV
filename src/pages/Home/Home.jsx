import { Navbar, Pricing, Advantages, Footer, Channel, Apps, Freetrial } from '../../components/export';
import Hero from '../../components/hero/Hero';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Hero/>
      <Pricing />
      <Channel/>
      <Apps/>
      <Advantages />
      <Freetrial/>
      <Footer/>
    </div>
  )
}

export default Home