import React, { useState, useEffect } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';

function Game() {
  const [secretNumber, setSecretNumber] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('Intenta adivinar el número!');
  const [gameOver, setGameOver] = useState(false);
  const [attempts, setAttempts] = useState(0);

  // Generar número aleatorio al iniciar o reiniciar
  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setInputValue('');
    setMessage('Intenta adivinar el número!');
    setGameOver(false);
    setAttempts(0);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (gameOver) return;

    const guess = Number(inputValue);
    setAttempts(attempts + 1);

    if (guess === secretNumber) {
      setMessage(`¡Correcto! Adivinaste en ${attempts + 1} intento(s). 🎉`);
      setGameOver(true);
    } else if (guess < secretNumber) {
      setMessage('El número es mayor 🔼');
    } else {
      setMessage('El número es menor 🔽');
    }

    setInputValue('');
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        border: '2px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h1>Adivina el Número</h1>
      <InputNumber value={inputValue} onChange={handleChange} onSubmit={handleSubmit} />
      <Message text={message} />
      {gameOver && <RestartButton onRestart={resetGame} />}
    </div>
  );
}

export default Game;
