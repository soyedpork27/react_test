import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./routes/Home";
import Intro from "./component/Intro";
import Sub01 from "./component/Sub01";
import NotFound from "./component/NotFound";
import Header from "./Header";

import './App.css';

function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/intro" exact Component={Intro}/>
        <Route path="/sub01" exact Component={Sub01}/>
        <Route path="/*" exact Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;