import { Link } from 'react-router-dom';
import './cartmenu.css';
import cart from '../../assets/cart.svg';

function CartMenu() {
  return (
    <div className='cart-menu'>
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
            <div className='svg-container'>
                <img className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center' src={cart} alt="cart" />
            </div>
            <div class="text-center lg:w-2/3 w-full">
            <h1 class="sm:text-4xl text-base mb-4 font-medium text-gray-900">Seems like there aren't any items in your cart</h1>
            <p class="mb-8 leading-relaxed"> No problem. Keep scrolling to choose a plan!</p>
            <div class="flex justify-center">
                <Link to="/">
                <button class="ml-4 inline-flex text-white button__bg border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 rounded text-lg">Go back to main menu!</button>
                </Link>
             </div>
            </div>
        </div>
        </section>    
    </div>
  )
}

export default CartMenu