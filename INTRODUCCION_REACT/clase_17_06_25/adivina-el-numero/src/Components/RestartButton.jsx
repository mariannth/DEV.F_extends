import React from 'react';

function RestartButton({ onRestart }) {
  return (
    <button
      onClick={onRestart}
      style={{
        marginTop: '30px',
        padding: '10px 20px',
        backgroundColor: '#4caf50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Reiniciar Juego
    </button>
  );
}

export default RestartButton;
