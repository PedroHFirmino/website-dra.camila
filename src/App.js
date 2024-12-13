
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './Languages.js';
import './Languages.css';
import instagram from './icon/instagram-brands-solid.svg';
import facebook from './icon/facebook-f-brands-solid.svg';
import linkedin from './icon/linkedin-brands-solid.svg';


function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
         <h1>Camila Souza</h1>
          <nav className="nav-bar">
            <ul className={isMenuActive ? 'active' : ''}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Sobre">Sobre</Link></li>
              <li><Link to="/Tratamentos">Tratamentos</Link></li>
              <li><Link to="/Exames">Exames</Link></li>
              <li><Link to="/Contato">Contato</Link></li>
              <div className='agendeumaconsulta'>
              <li><Link to="/Agende uma consulta">Agende sua consulta</Link></li>
              </div>
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
            <Route path="/"/>
            <Route path="/Sobre" element={<h2>Sobre</h2>} />
            <Route path="/Tratamentos" element={<h2>Tratamentos</h2>} />
            <Route path="/Exames" element={<h2>Exames</h2>} />
            <Route path="/Contato" element={<h2>Contato</h2>} />
            <Route path="/Agende uma consulta" element={<h2>Agende uma consulta</h2>} />
          </Routes>
          </div>
        </main>
      </div>

      <footer className="footer">
          <div className='icons'>
          <a href="" target="_blank" rel="noopener noreferrer"> 
        <img src={instagram} className='instagramicon' alt='instagramicon'/></a>
        <a href="" target="_blank" rel="noopener noreferrer">
        <img src={facebook} className='facebookicon' alt='facebookicon'/></a>
        <a href="" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} className='linkedinicon' alt='linkedinicon'/></a>
        </div>
        <h1>Dra. Camila Souza</h1>
        <div className='categorias'>
          <div className='categoria'>
            <h2>Endereço</h2>
            <p>Rua abcde 123 - Brasil, Brasil</p>
            </div>
            <div className='categoria'>
            <h2>Tratamentos</h2>
            <p>AAAAAAAA</p>
            <p>BBBBBBBB</p>
            <p>CCCCCCCC</p>
            </div>
            <div className='categoria'>
            <h2>Exames</h2>
            <p>EXAME 1</p>
            <p>EXAME 2</p>
            <p>EXAME 3</p>
          </div>
          </div>
          <div className='creator'>
          <h2>Desenvolvido por: Flippy</h2>
          </div>

        </footer>

    </Router>
  );
}

export default App;
