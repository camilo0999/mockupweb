import React, { useState } from "react";
import '../Estilos/Navbar2.css';

const NavbarCliente = () => {
    const [menuActivo, setMenuActivo] = useState(false);

    const toggleMenu = () => {
        setMenuActivo(!menuActivo);
    };

    return (
        <div className="navbar2">
            <nav className="navbar-menu">
                <div className="navbar2-logo">
                    <img
                        src="https://i1.sndcdn.com/avatars-000196543139-b4gxqi-t1080x1080.jpg"
                        alt="Logo"
                    />
                    <span>Transparecia 360</span>
                </div>

                {/* Botón de menú en pantallas pequeñas */}
                <button
                    className="navbar2-menu-toggle"
                    onClick={toggleMenu}
                >
                    ☰
                </button>

                {/* Menú */}
                <ul className={`navbar2-links ${menuActivo ? 'active' : ''}`}>
                    <li><a href="/cliente-inicio">Inicio</a></li>
                    <li><a href="/publico-sobre">Sobre</a></li>
                    <li><a href="/publico-contacto">Contacto</a></li>
                    {/* Botón de login en pantallas pequeñas */}
                    <li className="navbar2-login-small"><a href="/login">Iniciar sesión</a></li>
                </ul>

                {/* Botón de login en pantallas grandes */}
                <div className="navbar2-login">
                    <a href="/login">Iniciar sesión</a>
                </div>
            </nav>
        </div>
    );
};

export default NavbarCliente;
