import React, { useEffect } from 'react';

function TaskList({ tasks, deleteTask, updateTask }) {
  useEffect(() => {
    const intervals = tasks.map(task => {
      const id = setInterval(() => {
        updateTask(task.id, { seconds: task.seconds + 1 });
      }, 1000);
      return id;
    });

    return () => intervals.forEach(clearInterval);
  }, [tasks]);

  return (
    <div className="task-list">
      <h2>📋 Lista de Tareas</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <strong>{task.name}</strong> - {task.duration} min
            <span> ⏱ {task.seconds}s</span>
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
