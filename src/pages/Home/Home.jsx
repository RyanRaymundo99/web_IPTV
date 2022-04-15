import { Navbar, Brand, Pricing, Canais, Advantages } from '../../components/export';
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
      <Advantages />
    </div>
  )
}

export default Home