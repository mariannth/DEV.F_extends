import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function TaskChart({ tasks }) {
  const data = {
    labels: tasks.map(t => t.name),
    datasets: [{
      label: "Duración (min)",
      data: tasks.map(t => t.duration),
      backgroundColor: "#4b9cd3"
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  };

  return (
    <div className="task-chart">
      <h3>📊 Duración de Tareas</h3>
      <Bar data={data} options={options} />
    </div>
  );
}

export default TaskChart;
