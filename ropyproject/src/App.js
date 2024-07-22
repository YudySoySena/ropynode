import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './paginas/auth/login'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <link
            className="App-link"
            to="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </link>
        </header>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

