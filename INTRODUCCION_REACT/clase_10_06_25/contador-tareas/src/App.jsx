import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskChart from './components/TaskChart';

function App() {
  const [tasks, setTasks] = useState([]);

  // Cargar tareas desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  // Guardar tareas en localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), seconds: 0 }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const updateTask = (id, updatedData) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, ...updatedData } : t)));
  };

  const exportToJSON = () => {
    const dataStr = JSON.stringify(tasks, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    downloadFile(url, "tareas.json");
  };

  const exportToCSV = () => {
    const headers = "Nombre,Duración (min),Tiempo activo (s)\n";
    const rows = tasks.map(t => `${t.name},${t.duration},${t.seconds}`).join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    downloadFile(url, "tareas.csv");
  };

  const downloadFile = (url, filename) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      <h1>🧠 Gestor de Tareas</h1>
      <TaskForm addTask={addTask} />
      <div className="btn-export">
        <button onClick={exportToJSON}>Exportar JSON</button>
        <button onClick={exportToCSV}>Exportar CSV</button>
      </div>
      <TaskChart tasks={tasks} />
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
}

export default App;
