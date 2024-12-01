import React from "react";
import '../Estilos/Banner.css';

const Banner = ({titulo, descripcion}) => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
            </div>
        </div>
    );
};

export default Banner;