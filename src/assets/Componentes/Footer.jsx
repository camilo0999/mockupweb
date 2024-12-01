import React from "react";
import '../Estilos/Footer.css';

const Footer = () => {
    return (
        <footer className="footer"> 
            <div className="footer-container">
                <img src="https://i1.sndcdn.com/avatars-000196543139-b4gxqi-t1080x1080.jpg" alt="Logo" className="footer-logo" />   
                <h3>Transparencia 360</h3>
                <ul className="footer-links">
                    <li><a href="#">Acerca de</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
