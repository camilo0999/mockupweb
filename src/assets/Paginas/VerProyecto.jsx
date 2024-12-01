import React from "react";
import { useParams } from "react-router-dom";
import NavbarCliente from "../Componentes/NavbarCliente";
import '../Estilos/VerProyecto.css';
import proyectosData from '../Data/ProyectosGeneral.json';
import Footer from "../Componentes/Footer";
import Graficas1 from "../Componentes/Graficas1";


const VerProyecto = () => {
    const { id } = useParams();
    const proyecto = proyectosData.find(p => p.id.toString() === id);

    if (!proyecto) {
        return <p>Proyecto no encontrado</p>;
    }

    return (
        <div>
            <NavbarCliente />
            <h1 className="titulo-proyecto">{proyecto.titulo}</h1>
            <p className="descripcion-proyecto">{proyecto.descripcion}</p>

            <section className="tiempos">
                <h2>Tiempos del Proyecto</h2>
                <ul>
                    <li>Inicio: {proyecto.fechaInicio}</li>
                    <li>Fin: {proyecto.fechaFin}</li>
                </ul>
            </section>

            <section className="imagenes">
                <h2>Imágenes</h2>
                <div>
                    {proyecto.imagenes.map((img, index) => (
                        <img key={index} src={img} alt={`Imagen ${index + 1}`} />
                    ))}
                </div>
            </section>

            <Graficas1 />

            <Footer />

            
        </div>
    );
};

export default VerProyecto;

