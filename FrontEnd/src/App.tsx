import React, { useEffect, useState } from 'react';
import './App.css';
import Menu from './utils/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndiceGeneros from './generos/indiceGeneros';
import LandingPage from './LandingPage';



function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className='container'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/generos" element={<IndiceGeneros />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
