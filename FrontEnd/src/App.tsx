import React from 'react';
import './App.css';
import { pelicula } from './peliculas/peliculas.model';
import PeliculaIndividual from './peliculas/PeliculaIndividual';

function App() {
  const peliculaPrueba:pelicula={
    id:1,titulo:"Spiderman lejos de casa",
    poster:"imagenes/FarFromHome.jpg"
  }
  return (
   <>
   <PeliculaIndividual pelicula={peliculaPrueba}/>
   </>
  );
}

export default App;
