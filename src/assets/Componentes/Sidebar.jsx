import React from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Panel de control</h2>
      <img src="https://i1.sndcdn.com/avatars-000196543139-b4gxqi-t1080x1080.jpg" alt="" />
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
      </ul>

      <a href="/cliente-inicio" className="sidebar-logout">Cerrar sesión</a>
    </div>
  );
};

export default Sidebar;
