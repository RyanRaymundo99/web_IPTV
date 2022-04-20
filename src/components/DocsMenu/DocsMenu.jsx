import './docsmenu.css';

import TvIcon from '@mui/icons-material/Tv';
import { BsWindows } from "react-icons/bs";
import { FaLinux } from "react-icons/fa";
import { ImWindows } from "react-icons/im";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { MdDesktopMac } from "react-icons/md";

function DocsMenu() {
  return (
    <div className='docs-menu__header'>
      <div className='docs-menu'>
        <nav className="body-font navMenu">
            <a href="#Tvs">Smart TV</a>
            <a href="#others">Pc & SmartPhone</a>
            <a href="#instalation">Instalacao</a>
        </nav>
      </div>  


        <div id="Tvs">
          <div class="p-10 bg-white dark:bg-white">
            <section class="text-white-100 body-font">
              <div class="container px-5 py-5 mx-auto">
                <div class="flex flex-col text-center w-full mb-10">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Compativel com Smart TVs</h1>
                </div>
                <div class="flex flex-wrap -m-4 text-center">
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      <TvIcon className='text-indigo-500 '  style={{ fontSize: 50 }} />
                      <p class="leading-relaxed">Android TV</p>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      <TvIcon className='text-indigo-500 '  style={{ fontSize: 60 }} />
                      <p class="leading-relaxed">Samsung TV</p>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      <TvIcon className='text-indigo-500 '  style={{ fontSize: 60 }} />
                      <p class="leading-relaxed">LG TV</p>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      <TvIcon className='text-indigo-500 ' style={{ fontSize: 60 }} />
                      <p class="leading-relaxed">Tizen</p>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      <TvIcon className='text-indigo-500 ' style={{ fontSize: 60 }} />
                      <p class="leading-relaxed">Web OS</p>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      <TvIcon className='text-indigo-500 ' style={{ fontSize: 60 }} />
                      <p class="leading-relaxed">Apple TV</p>
                    </div>
                  </div>
                </div>
              </div>
          </section>
          </div>

        <div class=" p-10 bg-white dark:bg-white" id='others'>
         <section class="text-white-100 body-font">
              <div class="container px-5 py-10 mx-auto">
                <div class="flex flex-col text-center w-full mb-10">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Compativel om PCs & Smartphones</h1>
                </div>
                <div class="flex flex-wrap -m-4 text-center">
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-5 py-6 flex rounded-lg">
                      <BsWindows className='py-2 text-indigo-500' style={{ fontSize: 60 }} />
                      <p class="leading-relaxed px-5 py-3">Windows</p>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-5 py-6 flex rounded-lg">
                      <AiFillAndroid className='py-2 text-indigo-500 '  style={{ fontSize: 60 }} />
                      <p class="leading-relaxed px-5 py-3">Android</p>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 flex rounded-lg">
                      <AiFillApple className='text-indigo-500 '  style={{ fontSize: 60 }} />
                      <p class="leading-relaxed px-5 py-3">IOS</p>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 flex rounded-lg">
                      <FaLinux className='text-indigo-500 ' style={{ fontSize: 60 }} />
                      <p class="leading-relaxed px-5 py-3">Linux</p>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 flex rounded-lg">
                      <MdDesktopMac className='text-indigo-500 ' style={{ fontSize: 60 }} />
                      <p class="leading-relaxed px-5 py-3">Mac</p>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 flex rounded-lg">
                      <ImWindows className='text-indigo-500 ' style={{ fontSize: 60 }} />
                      <p class="leading-relaxed px-5 py-3">Windows phone</p>
                    </div>
                  </div>
                </div>
              </div>
          </section>
        </div>
       </div> 

    </div>
  )
}

export default DocsMenu