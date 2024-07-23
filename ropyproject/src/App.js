import React, {Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './paginas/auth/login.js';
import Register from './paginas/auth/register.js';
import './styles/adminlte.css';
import './styles/adminlte.css.map';
import './styles/adminlte.min.css';
import './styles/adminlte.min.css.map';

function App() {
  return (
    <Fragment>
    <Router>
      <Routes>
        <Route path="/" exact element={<Login/>}/>
        <Route path="/register" exact element={<Register/>}/>
      </Routes>
    </Router>
    </Fragment>
  );
}

export default App;

