import './App.css';

//1 - config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/Navbar';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* // 2- Links com React Router */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 4- Rota dinâmica */}
          <Route path='/product/:id' element={<Product />} />
          {/* 6- nested route */}
          <Route path='/product/:id/info' element={<Info />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
