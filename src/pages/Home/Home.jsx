import { Navbar, Pricing, Advantages, Footer, Channel, Freetrial } from '../../components/export';
import Hero from '../../components/hero/Hero';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Hero/>
      <Pricing />
      <Channel/>
      <Advantages />
      <Freetrial/>
      <Footer/>
    </div>
  )
}

export default Home