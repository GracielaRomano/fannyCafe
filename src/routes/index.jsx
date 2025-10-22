import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import News from '../pages/News';
import Service from '../pages/Service';
import Events from '../pages/Events';
import EventDetail from '../pages/EventDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/nosotros',
        element: <About />,
      },
      {
        path: '/eventos',
        element: <Events />,
      },
      {
        path: '/eventos/:id',
        element: <EventDetail />,
      },
      {
        path: '/contacto',
        element: <Contact />,
      },
      {
        path: '/novedades',
        element: <News />,
      },
      {
        path: '/servicios',
        element: <Service />,
      },
    ],
  },
]);
