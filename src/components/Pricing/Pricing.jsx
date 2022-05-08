import { ConstructionOutlined } from "@mui/icons-material";
import { loadStripe } from "@stripe/stripe-js";


let stripePromise

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

const Pricing = () => {

  const item = {
    price: "price_1Kwu5qG9qsOXpOrw5M7OOpK2",
    quantity: 1
  };

  const item2 = {
    price: "price_1Kwv1CG9qsOXpOrwbI8aRRQQ",
    quantity: 1
  };

  const item3 = {
    price: "price_1Kwv9vG9qsOXpOrwBhxM5nAB",
    quantity: 1
  };

  const item4 = {
    price: "price_1KwvAoG9qsOXpOrwg7Qc7Jr5",
    quantity: 1
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}`
  }
  const checkoutOptions2 = {
    lineItems: [item2],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}`
  }
  const checkoutOptions3 = {
    lineItems: [item3],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}`
  }
  const checkoutOptions4 = {
    lineItems: [item4],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}`
  }

  const redirectToCheckout = async () => {
    console.log("redirectToCheckout")

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout(checkoutOptions)
    console.log("stripe checkout error", error)
  }
  const redirectToCheckout2 = async () => {
    console.log("redirectToCheckout")

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout(checkoutOptions2)
    console.log("stripe checkout error", error)
  }
  const redirectToCheckout3 = async () => {
    console.log("redirectToCheckout")

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout(checkoutOptions3)
    console.log("stripe checkout error", error)
  }
  const redirectToCheckout4 = async () => {
    console.log("redirectToCheckout")

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout(checkoutOptions4)
    console.log("stripe checkout error", error)
  }

  return (
    <div className='pricing' id='Pricing'>
        <section className="text-gray-300 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Pricing</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">pay less with no-contract monthly plans</p>
          <div className="flex mx-auto rounded overflow-hidden mt-6">
            <p className="py-1 px-4 button__bg text-white">Monthly and Yealy</p>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-grey-500 flex flex-col relative overflow-hidden">
              <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>R$35</span>
                <span className="text-lg ml-1 font-normal text-gray-500">/monthly</span>
              </h1>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Suport 4K and HD​
              </p>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Movies and series
              </p>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Cartoon
              </p>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Sport
              </p>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Adult
              </p>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Reimbursement
              </p>
              <p className="flex items-center text-gray-400 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Support 24h/7
              </p>
              <button className="flex items-center mt-auto text-white bg-gray-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-400 rounded" onClick={redirectToCheckout}>Sign up
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p className="text-xs text-gray-500 mt-3">Customer service is fee-free.</p>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-lime-500 flex flex-col relative overflow-hidden">
              <span className="bg-lime-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
              <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>R$80</span>
                <span className="text-lg ml-1 font-normal text-gray-500">/quarterly</span>
              </h1>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Support 4K and HD​
              </p>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Movies and series
              </p>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Cartoon
              </p>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Sport
              </p>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Adult
              </p>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Reimbursement
              </p>
              <p className="flex items-center text-gray-400 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Support 24h/7
              </p>
              <button className="flex items-center mt-auto text-white bg-lime-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-lime-400 rounded" onClick={redirectToCheckout2}>Sign up
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p className="text-xs text-gray-500 mt-3">Customer service is fee-free.</p>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-blue-400 flex flex-col relative overflow-hidden">
              <span className="bg-blue-400 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">BEST SELLER</span>
              <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$150</span>
                <span className="text-lg ml-1 font-normal text-gray-500">/semiannual</span>
              </h1>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Support 4K and HD​
              </p>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Movies and series
              </p>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Cartoon
              </p>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Sport
              </p>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Adult
              </p>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Reimbursement
              </p>
              <p className="flex items-center text-gray-400 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Support 24h/7
              </p>
              <button className="flex items-center mt-auto text-white bg-blue-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-700 rounded" onClick={redirectToCheckout3}>Sign up
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p className="text-xs text-gray-500 mt-3">Customer service is fee-free.</p>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-purple-500 flex flex-col relative overflow-hidden">
              <span className="bg-purple-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">BEST PRICE</span>
              <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$280</span>
                <span className="text-lg ml-1 font-normal text-gray-500">/yearly</span>
              </h1>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Support 4K and HD​
              </p>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Movies and series
              </p>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Cartoon
              </p>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Sport
              </p>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Adult
              </p>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Reimbursement
              </p>
              <p className="flex items-center text-gray-400 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Support 24h/7
              </p>
              <button className="flex items-center mt-auto text-white bg-purple-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-purple-400 rounded" onClick={redirectToCheckout4}>Sign up
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p className="text-xs text-gray-500 mt-3">Customer service is fee-free.</p>
            </div>
          </div>
        </div>
      </div>
</section>
    </div>
  )
}

export default Pricing