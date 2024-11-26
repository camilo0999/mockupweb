import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './assets/Paginas/AdminInicio';
import AdminAdolecencia from './assets/Paginas/AdminAdolecencia';
import AdminInfancia from './assets/Paginas/AdminInfancia';
import AdminVegez from './assets/Paginas/AdminVegez';
import AdminJuventudez from './assets/Paginas/AdminJuventudez';
import ClienteInicio from './assets/Paginas/ClienteInicio';
import './App.css';

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/admin-adolecencia" element={<AdminAdolecencia />} />
        <Route path="/admin-infancia" element={<AdminInfancia />} />
        <Route path="/admin-adulto-mayor" element={<AdminVegez />} />
        <Route path="/admin-juventud" element={<AdminJuventudez />} />
        <Route path="/cliente-inicio" element={<ClienteInicio />} />
      </Routes>
    </Router>

  );
};

export default App;
