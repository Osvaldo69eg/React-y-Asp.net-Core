import React, { useEffect, useState } from 'react';
import './App.css';
import Menu from './utils/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndiceGeneros from './generos/indiceGeneros';
import LandingPage from './LandingPage';
import rutas from './route-config';




function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className='container'>
        <Routes>
        {rutas.map((ruta, index) => (
            <Route key={index} path={ruta.path} element={ruta.element} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
