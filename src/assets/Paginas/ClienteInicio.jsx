import React from "react";
import NavbarCliente from "../Componentes/NavbarCliente";
import Carrusel from "../Componentes/Carrusel";
import '../Estilos/ClienteInicio.css';
import Footer from "../Componentes/Footer";

const ClienteInicio = () => {
    return (
        <div>
            {/* Barra de navegación */}
            <NavbarCliente />

            {/* Carrusel */}
            <Carrusel />

            {/* Sección: Accesos rápidos */}
            <h2 className="titulo-sesion">Accesos rápidos</h2>
            <p className="parrafo-sesion">Encuentra la información de manera ágil</p>
            <div className="sesion-acceso-rapido">
                <div className="contenedor-acceso-rapido">
                    {/* Elementos de acceso rápido */}
                    <div className="acceso-rapido-items">
                        <img 
                            width="100" 
                            height="100" 
                            src="https://img.icons8.com/ios/100/children--v1.png" 
                            alt="children icon" 
                        />
                        <a href="/cliente-proyectos-infancia">Infancia</a>
                    </div>
                    <div className="acceso-rapido-items">
                        <img 
                            width="100" 
                            height="100" 
                            src="https://img.icons8.com/plumpy/100/old-man-smiling.png" 
                            alt="old man icon" 
                        />
                        <a href="/cliente-proyectos-vejez">Adulto Mayor</a>
                    </div>
                    <div className="acceso-rapido-items">
                        <img 
                            width="100" 
                            height="100" 
                            src="https://img.icons8.com/external-justicon-lineal-justicon/100/external-woman-woman-day-justicon-lineal-justicon.png" 
                            alt="woman icon" 
                        />
                        <a href="/cliente-proyectos-adolecencia">Adolescencia</a>
                    </div>
                    <div className="acceso-rapido-items">
                        <img 
                            width="100" 
                            height="100" 
                            src="https://img.icons8.com/external-linector-lineal-linector/100/external-young-man-avatar-linector-lineal-linector.png" 
                            alt="young man icon" 
                        />
                        <a href="/cliente-proyectos-juventud">Juventud</a>
                    </div>
                </div>
            </div>

            {/* Sección: La Gobernación en cifras */}
            <h2 className="titulo-sesion">La Gobernación en cifras</h2>
            <div className="sesion-cifras-rapido">
                <div className="cifras-items">
                    {/* Tarjeta: Infancia */}
                    <div className="card-acceso">
                        <h3>Infancia</h3>
                        <div className="card-cifras-content-img">
                            <img 
                                width="100" 
                                height="100" 
                                src="https://img.icons8.com/color/100/children--v1.png" 
                                alt="children icon" 
                            />
                        </div>
                        <p className="card-cifras-content-text">
                            Cantidad de dinero invertido: <span>$1,000,000</span>
                        </p>
                        <p className="card-cifras-content-text">
                            Nivel de efectividad: <span>99</span>%
                        </p>
                        <p className="card-cifras-content-text">
                            Cantidad de personas beneficiadas: <span>100</span>
                        </p>
                        <p className="card-cifras-content-text">
                            Cantidad de proyectos: <span>109</span>
                        </p>
                    </div>

                    {/* Tarjeta: Adulto Mayor */}
                    <div className="card-acceso">
                        <h3>Adulto Mayor</h3>
                        <div className="card-cifras-content-img">
                        <img width="100" height="100" src="https://img.icons8.com/color/100/grandmother-with-a-boy.png" alt="grandmother-with-a-boy"/>
                        </div>
                        <p className="card-cifras-content-text">
                            Cantidad de dinero invertido: <span>$1,000,000</span>
                        </p>
                        <p className="card-cifras-content-text">
                            Nivel de efectividad: <span>99</span>%
                        </p>
                        <p className="card-cifras-content-text">
                            Cantidad de personas beneficiadas: <span>100</span>
                        </p>
                        <p className="card-cifras-content-text">
                            Cantidad de proyectos: <span>109</span>
                        </p>
                    </div>

                    {/* Tarjeta: Adolescencia */}
                    <div className="card-acceso">
                        <h3>Adolescencia</h3>
                        <div className="card-cifras-content-img">
                            <img 
                                width="100" 
                                height="100" 
                                src="https://img.icons8.com/color/100/teenager-male.png" 
                                alt="adolescencia icon" 
                            />
                        </div>
                        <p className="card-cifras-content-text">
                            Cantidad de dinero invertido: <span>$1,000,000</span>
                        </p>
                        <p className="card-cifras-content-text">
                            Nivel de efectividad: <span>99</span>%
                        </p>
                        <p className="card-cifras-content-text">
                            Cantidad de personas beneficiadas: <span>100</span>
                        </p>
                        <p className="card-cifras-content-text">
                            Cantidad de proyectos: <span>109</span>
                        </p>
                    </div>

                    {/* Tarjeta: Juventud */}
                    <div className="card-acceso">
                        <h3>Juventud</h3>
                        <div className="card-cifras-content-img">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <path fill="#FFA726" d="M14 27c0 2.209-1.791 4-4 4s-4-1.791-4-4 1.791-4 4-4S14 24.791 14 27M42 27c0 2.209-1.791 4-4 4s-4-1.791-4-4 1.791-4 4-4S42 24.791 42 27"></path><path fill="#FFB74D" d="M9,20c0-12.725,30-8.284,30,0v10c0,8.284-6.716,15-15,15S9,38.284,9,30V20z"></path><path fill="#424242" d="M40.891,19.338C40.417,13.365,38.33,7.482,31,6l-2-3h-5C14.772,3,7,10.48,7,21v3.4l3,3.6v-6l21-7l7,6v7l3-3.6V21C41,20.436,40.957,19.883,40.891,19.338"></path><path fill="#784719" d="M33 28c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2S33 26.895 33 28M19 28c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2S19 26.895 19 28"></path><path fill="#FB8C00" d="M19,37h10c0,0-2,3-5,3S19,37,19,37z"></path>
                        </svg>
                        </div>
                        <p className="card-cifras-content-text">
                            Cantidad de dinero invertido: <span>$1,000,000</span>
                        </p>
                        <p className="card-cifras-content-text">
                            Nivel de efectividad: <span>99</span>%
                        </p>
                        <p className="card-cifras-content-text">
                            Cantidad de personas beneficiadas: <span>100</span>
                        </p>
                        <p className="card-cifras-content-text">
                            Cantidad de proyectos: <span>109</span>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ClienteInicio;
