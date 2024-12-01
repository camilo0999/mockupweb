import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import "../Estilos/Graficos.css";

// Registrar componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const Graficas2 = () => {
  // Datos actualizados para el gráfico de barras
  const dataBar = {
    labels: ["Infancia", "Adolescencia", "Juventud", "Adulto Mayor"],
    datasets: [
      {
        label: "Cantidad de Proyectos",
        data: [130, 90, 140, 70],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 206, 86, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Datos actualizados para el gráfico de pastel
  const dataPie = {
    labels: ["Infancia", "Adolescencia", "Juventud", "Adulto Mayor"],
    datasets: [
      {
        label: "Distribución de Beneficiados",
        data: [600, 450, 700, 400],
        backgroundColor: [
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 99, 132, 0.5)",
        ],
        borderColor: [
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Opciones generales
  const optionsBar = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Cantidad de Proyectos por Categoría",
      },
    },
  };

  const optionsPie = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Distribución de Beneficiados",
      },
    },
  };

  return (
    <div className="graficas-container">
      <h2 className="graficas-title">Indicadores de Gestión</h2>
      <div className="graficas">
        {/* Gráfico de Barras */}
        <div className="grafica-item">
          <Bar data={dataBar} options={optionsBar} />
        </div>

        {/* Gráfico de Pastel */}
        <div className="grafica-item">
          <Pie data={dataPie} options={optionsPie} />
        </div>
      </div>
    </div>
  );
};

export default Graficas2;
