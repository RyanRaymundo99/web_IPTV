import { Navbar, Brand, Pricing } from '../../components/export';
import Hero from '../../components/Hero/Hero';
import './home.css';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Brand />
      <Hero/>
      <Pricing />
    </div>
  )
}

export default Home