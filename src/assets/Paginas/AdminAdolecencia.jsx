import React, { useState } from "react";
import "../Estilos/AdminAdolecencia.css";
import Sidebar from "../Componentes/Sidebar";
import Navbar from "../Componentes/Navbar";
import Graficas from "../Componentes/Graficas";

const AdminAdolecencia = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newRecord, setNewRecord] = useState({
        nombre: "",
        entidad: "",
        fechaInicio: "",
        fechaFin: "",
        metaInicial: "",
        metaFinal: "",
        gastosPublicos: "",
        presupuesto: "",
        total: "",
    });
    const [proyectos, setProyectos] = useState([
        {
            _id: "1",
            nombre: "Proyecto de Salud Infantil",
            entidad: "Gobierno",
            fechaInicio: "2023-01-01",
            fechaFin: "2023-12-31",
            metaProductoInicial: 1000,
            metaProductoFinal: 2000,
            gastos: 100000,
            presupuesto: 150000,
        },
        {
            _id: "2",
            nombre: "Proyecto de Educación para Jóvenes",
            entidad: "ONG",
            fechaInicio: "2023-02-01",
            fechaFin: "2023-11-30",
            metaProductoInicial: 500,
            metaProductoFinal: 1500,
            gastos: 80000,
            presupuesto: 120000,
        },
    ]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRecord((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProyecto = {
            ...newRecord,
            _id: (proyectos.length + 1).toString(), // Generar un ID nuevo
        };
        setProyectos([...proyectos, newProyecto]);
        setNewRecord({
            nombre: "",
            entidad: "",
            fechaInicio: "",
            fechaFin: "",
            metaInicial: "",
            metaFinal: "",
            gastosPublicos: "",
            presupuesto: "",
            total: "",
        });
        setIsModalOpen(false);
    };

    return (
        <div className="main">
            <Sidebar />
            <div className="content">
                <Navbar />
                <div className="admin-adolecencia">
                    <div className="grafica">
                        <Graficas />
                    </div>

                    <div className="acciones-globales">
                        <button className="boton-primario" onClick={openModal}>
                            Agregar
                        </button>
                    </div>

                    {isModalOpen && (
                        <div className="modal-overlay">
                            <div className="modal-content">
                                <h2>Registrar Proyecto</h2>
                                <form onSubmit={handleSubmit}>
                                    <label>Nombre</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={newRecord.nombre}
                                        onChange={handleInputChange}
                                        required
                                    />

                                    <label>Entidad</label>
                                    <input
                                        type="text"
                                        name="entidad"
                                        value={newRecord.entidad}
                                        onChange={handleInputChange}
                                        required
                                    />

                                    <label>Fecha de Inicio</label>
                                    <input
                                        type="date"
                                        name="fechaInicio"
                                        value={newRecord.fechaInicio}
                                        onChange={handleInputChange}
                                        required
                                    />

                                    <label>Fecha de Fin</label>
                                    <input
                                        type="date"
                                        name="fechaFin"
                                        value={newRecord.fechaFin}
                                        onChange={handleInputChange}
                                        required
                                    />

                                    <label>Meta Inicial</label>
                                    <input
                                        type="number"
                                        name="metaInicial"
                                        value={newRecord.metaInicial}
                                        onChange={handleInputChange}
                                        required
                                    />

                                    <label>Meta Final</label>
                                    <input
                                        type="number"
                                        name="metaFinal"
                                        value={newRecord.metaFinal}
                                        onChange={handleInputChange}
                                        required
                                    />

                                    <label>Gastos Públicos</label>
                                    <input
                                        type="number"
                                        name="gastosPublicos"
                                        value={newRecord.gastosPublicos}
                                        onChange={handleInputChange}
                                        required
                                    />

                                    <label>Presupuesto</label>
                                    <input
                                        type="number"
                                        name="presupuesto"
                                        value={newRecord.presupuesto}
                                        onChange={handleInputChange}
                                        required
                                    />

                                    <label>Total</label>
                                    <input
                                        type="number"
                                        name="total"
                                        value={newRecord.total}
                                        onChange={handleInputChange}
                                        required
                                    />

                                    <div className="modal-actions">
                                        <button type="submit">Registrar</button>
                                        <button type="button" onClick={closeModal}>
                                            Cancelar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    <div className="tabla">
                        <h1 className="table-title">Datos de Adolescencia</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Entidad</th>
                                    <th>Fecha inicio</th>
                                    <th>Fecha fin</th>
                                    <th>Meta inicial</th>
                                    <th>Meta final</th>
                                    <th>Gastos públicos</th>
                                    <th>Presupuesto</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {proyectos.map((proyecto) => (
                                    <tr key={proyecto._id}>
                                        <td>{proyecto.nombre}</td>
                                        <td>{proyecto.entidad}</td>
                                        <td>{new Date(proyecto.fechaInicio).toLocaleDateString()}</td>
                                        <td>{new Date(proyecto.fechaFin).toLocaleDateString()}</td>
                                        <td>{proyecto.metaProductoInicial}</td>
                                        <td>{proyecto.metaProductoFinal}</td>
                                        <td>{proyecto.gastos}</td>
                                        <td>{proyecto.presupuesto}</td>
                                        <td>
                                            <button className="boton-acciones">Editar</button>
                                            <button className="boton-acciones">Eliminar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default AdminAdolecencia;

