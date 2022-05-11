import CartMenu from '../../components/CartMenu/CartMenu';
import { Navbar, SmallFooter } from '../../components/export';

function Cart() {
  return (
    <div className='cart'>
        <Navbar />
        <CartMenu />
        <SmallFooter/>
    </div>
  )
}

export default Cart