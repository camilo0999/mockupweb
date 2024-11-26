import React from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>
      <ul className="sidebar-menu">
        <li>
          <Link to="/admin-adolecencia" className="sidebar-link">Gestion de adolecencia</Link>
        </li>
        <li>
          <Link to="/admin-infancia" className="sidebar-link">Gestion de infancia</Link>
        </li>
        <li>
          <Link to="/admin-adulto-mayor" className="sidebar-link">Gestion de vejez</Link>
        </li>
        <li>
          <Link to="/admin-juventud" className="sidebar-link">Gestion de juventudez</Link>
        </li>
        <li>
          <Link to="/settings" className="sidebar-link">Indicadores</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
