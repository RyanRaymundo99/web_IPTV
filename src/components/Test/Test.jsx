import React from 'react';
import './test.css';

const Test = () => {
  return (
    <div className='test' id='test'>
        <form className="text-gray-400 body-font">
           <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                  <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                  <h1 class="title-font font-medium text-3xl text-white">Faça um teste rápido agora mesmo!</h1>
                  <p class="leading-relaxed text-gray-200 mt-4">insira seu endereço de e-mail e seu nome para que possamos enviar uma amostra gratuita do nosso produto</p>
                  </div>
                  <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                  <h2 class="text-white text-lg font-medium title-font mb-5">Insira aqui</h2>
                  <div class="relative mb-4">
                      <label for="full-name" class="leading-7 text-sm text-gray-400">Nome/Apelido</label>
                      <input type="text" id="full-name" name="full-name" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-purple-900 rounded border border-gray-600 focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  </div>
                  <div class="relative mb-4">
                      <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
                      <input type="email" id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-purple-900 rounded border border-gray-600 focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  </div>
                  <input type='submit' class="text-white button__bg border-0 py-2 px-8 focus:outline-none hover:bg-orange-800 rounded text-lg"/>

                  <p class="text-xs mt-3">A amostra sera enviada em ate 24h.</p>
                  </div>
            </div>   
      </form>
    </div>
  )
}

export default Test
