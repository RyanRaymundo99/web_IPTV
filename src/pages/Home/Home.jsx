import { Navbar, Brand, Pricing, Advantages, Test, Footer, Channel } from '../../components/export';
import Hero from '../../components/hero/Hero';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Hero/>
      <Brand />
      <Pricing />
      <Channel/>
      <Advantages />
      <Test/>
      <Footer/>
    </div>
  )
}

export default Home