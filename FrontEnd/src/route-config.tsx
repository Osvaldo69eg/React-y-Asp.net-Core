import { RouteObject } from 'react-router-dom';
import LandingPage from './LandingPage';
import IndiceGeneros from './generos/indiceGeneros';
import CrearGenero from './generos/CrearGeneros';
import EditarGenero from './generos/EditarGenero';

const rutas: RouteObject[] = [
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/generos/crear',
      element: <CrearGenero />
    },
    {
      path: '/generos/editar',
      element: <EditarGenero />
    },
    {
      path: '/generos',
      element: <IndiceGeneros />
    }
  ];
  
export default rutas;