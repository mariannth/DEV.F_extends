import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Planetas from './Planetas';
import Bitacora from './Bitacora';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', background: '#282c34', color: 'white' }}>
        <Link to="/" style={{ marginRight: 20, color: 'white' }}>Planetas</Link>
        <Link to="/bitacora" style={{ color: 'white' }}>Bitácora</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Planetas />} />
        <Route path="/bitacora" element={<Bitacora />} />
      </Routes>
    </Router>
  );
}

export default App;
