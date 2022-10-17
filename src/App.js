import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from './components/home'
import Shop from './components/home'
import About from './components/about'
import Details from './components/shop/details';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
       <Navbar/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='shop/:id' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
