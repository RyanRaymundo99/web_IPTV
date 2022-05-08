import "@stripe/stripe-js";
import Home from './pages/Home/Home';
import Docs from './pages/Docs/Docs'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route path='/Docs' element={ <Docs/>  } />
      </Routes>
    </div>
  );
}

export default App;
