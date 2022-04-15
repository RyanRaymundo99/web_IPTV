import { Navbar, Brand, Pricing, Canais } from '../../components/export';
import Hero from '../../components/hero/Hero';
import './home.css';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Hero/>
      <Brand />
      <Pricing />
      <Canais />
    </div>
  )
}

export default Home