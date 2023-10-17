import logo from './images/logosobre.svg';
import './App.css';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Sobre from './pages/Sobre';
import Home from './pages/Home';
import Formacao from './pages/Formacao';
import Hobbies from './pages/Hobbies';
import Experiencia from './pages/experiencia';

const router = createBrowserRouter([
{
  path:"/",
  element: <Home />,
},

{
  path:"/sobre",
  element: <Sobre />,
},

{
  path:"/formacao",
  element: <Formacao />,
},

{
  path:"/experiencia",
  element: <Experiencia />,
},

{
  path:"/hobbies",
  element: <Hobbies />,
},

{
  path: "*",
  element:<div>Página não encontrada</div>,
},
]);

function App() {
  return (
  <React.Fragment>
    <Header /> 
    <RouterProvider router={router} />
  </React.Fragment>
  );
}

export default App;
