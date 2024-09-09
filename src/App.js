import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './page/Home/Home';
import DetailProduct from './page/DetailProduct/DetailProduct';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>

            <Route path="/detail-product" element={<DetailProduct />}/>

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;