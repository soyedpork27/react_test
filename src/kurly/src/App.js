
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Header from './Header.js';
import Footer from './Footer.js';
import NewProduct from './NewProduct.js';
import BestProduct from './BestProduct.js';
import SaleProduct from './SaleProduct.js';
import CheapProduct from './CheapProduct.js';
import Main from './Main.js';
import NotFound from './NotFound';



function App() {


  return (
    <>
      <BrowserRouter>

        <Header />

          <Routes>
            <Route path='/' element={<Main />} />
            <Route path="/newproduct/:productId" element={<NewProduct />} />
            <Route path="/bestproduct/:productId" element={<BestProduct />} />
            <Route path="/cheapproduct/:productId" element={<CheapProduct />} />
            <Route path="/saleproduct/:productId" element={<SaleProduct />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

          

        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
