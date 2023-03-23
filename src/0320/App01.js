import React from 'react';
import Main from './Main';
// import MapPage from './MapPage';
import Header from './Header';
import Footer from './Footer';
import Map from './Map';
import NotFound from './NotFound';
import Component from './Component';
import App from '../App';


import './Base.css';



import { BrowserRouter, Routes, Route } from 'react-router-dom';





function App01(props) {
  return (
    <BrowserRouter>
      <Header/>
  
        <Routes>

          <Route path='/' element={<Main />} />

          <Route path='/map' element={<Map />}/>
          <Route path='/App' element={<App />}/>
          <Route path='/Component' element={<Component />}/>

          <Route path="*" element={<NotFound/>}/>

          {/* <Route path='/main' element={<App />} /> */}

        </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App01;