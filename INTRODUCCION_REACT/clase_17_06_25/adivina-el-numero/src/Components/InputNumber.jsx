import React from 'react';

function InputNumber({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="number"
        min="1"
        max="100"
        value={value}
        onChange={onChange}
        placeholder="Escribe un número entre 1 y 100"
        required
        style={{ padding: '8px', fontSize: '1rem', width: '250px', backgroundColor: '#a3cef1', color: '#121212' }}
      />
      <button type="submit" style={{ marginLeft: '10px', padding: '8px 15px' }}>
        Adivinar
      </button>
    </form>
  );
}

export default InputNumber;
