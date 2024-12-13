
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './Languages.js';
import './Languages.css';


function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
         <h1>Logo</h1>
          <nav className="nav-bar">
            <ul className={isMenuActive ? 'active' : ''}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Sobre">Sobre</Link></li>
              <li><Link to="/Tratamentos">Tratamentos</Link></li>
              <li><Link to="/Exames">Exames</Link></li>
              <li><Link to="/Contato">Contato</Link></li>
              <li><Link to="/Agende uma consulta">Agende uma consulta</Link></li>
            </ul>
          </nav>
          <div className="hamburger" id="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>

        <main>
        <div className="body">
          <Routes>
            <Route path="/" element={<h2>Home</h2>} />
            <Route path="/Sobre" element={<h2>Sobre</h2>} />
            <Route path="/Tratamentos" element={<h2>Tratamentos</h2>} />
            <Route path="/Exames" element={<h2>Exames</h2>} />
            <Route path="/Contato" element={<h2>Contato</h2>} />
            <Route path="/Agende uma consulta" element={<h2>Agende uma consulta</h2>} />
          </Routes>
          </div>
        </main>
      </div>

    </Router>
  );
}

export default App;
