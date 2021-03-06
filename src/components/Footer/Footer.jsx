import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
            <footer class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <LiveTvOutlinedIcon style={{ fontSize: '50' }} />
        <span class="ml-3 text-xl">CINE TV</span>
      </a>
      <p class="mt-2 text-sm text-gray-500">Watch Movies and Series in HD and 4K without loading screens</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">LINKS</h2>
        <nav class="list-none mb-10">
          <li>
            <a href='#home' class="text-gray-400 hover:text-white">Home</a>
          </li>
          <li>
            <a href='#Pricing' class="text-gray-400 hover:text-white">Pricing</a>
          </li>
          <li>
            <a href='#Channels' class="text-gray-400 hover:text-white">Advantages</a>
          </li>
          <li>
            <a href='#test' class="text-gray-400 hover:text-white">Free trial</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">DOCS</h2>
        <nav class="list-none mb-10">
          <li>
          <Link to="/Docs"> <a class="text-gray-400 hover:text-white">Pc & SmartPhone</a> </Link>
          </li>
          <li>
          <Link to="/Docs"> <a class="text-gray-400 hover:text-white">Smart TV</a> </Link>
          </li>
        </nav>
      </div>
      
    </div>
  </div>
  <div class="bg-gray-800 bg-opacity-75">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-400 text-sm text-center sm:text-left">?? 2022 CINE TV ???
        <a href="https://github.com/RyanRaymundo99" rel="noopener noreferrer" class="text-gray-500 ml-1" target="_blank">Created with love By Ryan Raymundo99</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-400">
          <GitHubIcon/>
        </a>
      </span>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer