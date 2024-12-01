import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './assets/Paginas/AdminInicio';
import AdminAdolecencia from './assets/Paginas/AdminAdolecencia';
import AdminInfancia from './assets/Paginas/AdminInfancia';
import AdminVegez from './assets/Paginas/AdminVegez';
import AdminJuventudez from './assets/Paginas/AdminJuventudez';
import ClienteInicio from './assets/Paginas/ClienteInicio';
import ClienteProyectosAdolecencia from './assets/Paginas/ClienteProyectosAdolecencia';
import ClienteProyectosInfancia from './assets/Paginas/ClienteProyectosInfancia';
import ClienteProyectosVejez from './assets/Paginas/ClienteProyectosVejez';
import ClienteProyectosJuventud from './assets/Paginas/ClienteProyectosJuventud';
import VerProyecto from './assets/Paginas/VerProyecto';
import Login from './assets/Paginas/Login';


import './App.css';

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-adolecencia" element={<AdminAdolecencia />} />
        <Route path="/admin-infancia" element={<AdminInfancia />} />
        <Route path="/admin-adulto-mayor" element={<AdminVegez />} />
        <Route path="/admin-juventud" element={<AdminJuventudez />} />
        <Route path="/cliente-inicio" element={<ClienteInicio />} />
        <Route path="/cliente-proyectos-juventud" element={<ClienteProyectosJuventud />} />
        <Route path="/cliente-proyectos-adolecencia" element={<ClienteProyectosAdolecencia />} />
        <Route path="/cliente-proyectos-infancia" element={<ClienteProyectosInfancia />} />
        <Route path="/cliente-proyectos-vejez" element={<ClienteProyectosVejez />} />
        <Route path="/proyecto/:id" element={<VerProyecto />} />
        
      </Routes>
    </Router>

  );
};

export default App;
