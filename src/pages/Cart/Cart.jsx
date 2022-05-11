import CartMenu from '../../components/CartMenu/CartMenu';
import { Navbar } from '../../components/export';

function Cart() {
  return (
    <div className='cart'>
        <Navbar />
        <CartMenu />
    </div>
  )
}

export default Cart