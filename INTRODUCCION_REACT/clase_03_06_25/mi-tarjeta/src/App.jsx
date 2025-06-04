// src/App.jsx
import Tarjeta from './Components/Tarjeta';

function App() {
  const persona = {
    nombre: "Ana Pérez",
    profesion: "Desarrolladora Frontend",
    mensajeInicial: "¡Bienvenido a mi tarjeta de presentación!",
    imagen: "https://randomuser.me/api/portraits/women/44.jpg",
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"]
  };

  return (
    <div className="app">
      <h1>Mi Tarjeta Profesional</h1>
      <Tarjeta {...persona} />
    </div>
  );
}

export default App;
