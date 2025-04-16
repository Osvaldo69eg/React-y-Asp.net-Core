import React from 'react';
import './App.css';
import { pelicula } from './peliculas/peliculas.model';
import PeliculaIndividual from './peliculas/PeliculaIndividual';

function App() {
  const peliculaPrueba:pelicula={
    id:1,titulo:"Spiderman lejos de casa",
    poster:'https://ntsi1415juannavarro.wordpress.com/wp-content/uploads/2015/01/ntsi.jpg'
  }
  return (
   <>
   <PeliculaIndividual pelicula={peliculaPrueba}/>
   </>
  );
}

export default App;
