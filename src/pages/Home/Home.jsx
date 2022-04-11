import { Navbar, Brand, Pricing } from '../../components/export';
import Hero from '../../components/hero/Hero';
import './home.css';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Hero/>
      <Brand />
      <Pricing />
    </div>
  )
}

export default Home