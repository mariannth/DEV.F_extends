import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !duration) return;
    addTask({ name, duration: parseInt(duration) });
    setName('');
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-task">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Nombre" />
      <input type="number" value={duration} onChange={e => setDuration(e.target.value)} placeholder="Duración (min)" />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskForm;
