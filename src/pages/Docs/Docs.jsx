import { Navbar } from '../../components/export';
import TvIcon from '@mui/icons-material/Tv';
import { BsWindows } from "react-icons/bs";
import { FaLinux } from "react-icons/fa";
import { ImWindows } from "react-icons/im";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { MdDesktopMac } from "react-icons/md";
import './docs.css';

const Docs = () => {
  
  return (
    <div className='docs'>
      <Navbar/>
      
        <div class="mb-5 flex justify-center border-b border-gray-200">
          <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab"        data-tabs-toggle="#myTabContent" role="tablist">

            <li class="mr-2" role="presentation">
              <button class="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Smart TV</button>
            </li>

            <li class="mr-2" role="presentation">
              <button class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Notebooks/Smartphones</button>
            </li>

            {/*  
            <li class="mr-2" role="presentation">
              <button class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
            </li>

            <li role="presentation">
              <button class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
            </li>
            */}

         </ul>
        </div>

        <div id="myTabContent">
          <div class="p-10 bg-white dark:bg-white" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <section class="text-white-100 body-font">
              <div class="container px-5 py-10 mx-auto">
                <div class="flex flex-col text-center w-full mb-10">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Compatibilidade</h1>
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

        <div class="hidden p-10 bg-white dark:bg-white" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
         <section class="text-white-100 body-font">
              <div class="container px-5 py-10 mx-auto">
                <div class="flex flex-col text-center w-full mb-10">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Compatibilidade</h1>
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

       {/*
        <div class="hidden p-4 bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
          <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
        <div class="hidden p-4 bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
          <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
        */}
       </div>
    </div>
  )
}

export default Docs