import { Navbar, Hero, Brand, Pricing } from '../../components/export';
import './home.css';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Hero />
      <Brand/>
      <Pricing />
    </div>
  )
}

export default Home