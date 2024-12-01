
import React from "react";
import NavbarCliente from "../Componentes/NavbarCliente";
import '../Estilos/ClientesProyecto.css';
import Banner from "../Componentes/Banner";
import proyectosData from '../Data/ProyectosAdolecentes.json';
import Footer from "../Componentes/Footer";

function ClienteProyectosAdolecencia() {
    return (
        <div>
            <NavbarCliente />

            <Banner titulo="Proyectos de adolecentes" descripcion="Encuentra los proyectos de adolecentes" />
            <h1 className="titulo-proyectos-principal">Proyectos de Adolecentes</h1>

            <div className="contenedor3">

                <div className="Galeria">

                {proyectosData.map((proyecto, index) => ( 
                    <div key={index} className="cardProyectos"> 
                        <img src={proyecto.imagen} alt={proyecto.titulo} /> 
                        <h3>{proyecto.titulo}</h3> 
                        <p>Fecha de inicio: {proyecto.fechaInicio}</p> 
                        <p>Fecha de fin: {proyecto.fechaFin}</p> 
                        <p>Personas alcanzadas: {proyecto.personasAlcanzadas}</p> 
                        <a href={`/proyecto/${proyecto.id}`} className="btnProyectos">Ver proyecto</a>
                    </div> ))}

                    

                </div>

            </div>

            <Footer />


        </div>
    );
}

export default ClienteProyectosAdolecencia;