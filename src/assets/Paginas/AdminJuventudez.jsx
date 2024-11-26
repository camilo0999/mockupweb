import React, { useState, useEffect } from "react";
import "../Estilos/AdminAdolecencia.css";
import Sidebar from "../Componentes/Sidebar";
import Navbar from "../Componentes/Navbar";


const AdminJuventudez = () => {
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
  const [proyectos, setProyectos] = useState([]);

  // Carga inicial de datos desde la API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/proyecto-juventud/lista"); // Cambia por la URL real de tu API
        if (!response.ok) {
          throw new Error('Error al cargar los proyectos');
        }
        const data = await response.json();
        setProyectos(data.proyectos); // Asegúrate de que el acceso a `proyectos` es correcto en la respuesta JSON
      } catch (error) {
        console.error("Error al cargar los proyectos:", error);
      }
    };
    fetchData();
  }, []);

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
    console.log("Nuevo Proyecto:", newRecord);
    setIsModalOpen(false);
  };

  return (
    <div className="main">
      <Sidebar />
      <div className="content">
        <Navbar />
        <div className="admin-adolecencia">
          <div className="grafica">
            <h2>Gráfica de Proyectos</h2>
            {/* Aquí puedes agregar cualquier componente de gráficos */}
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

export default AdminJuventudez;
