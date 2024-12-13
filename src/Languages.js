import { useState } from 'react';
import './Languages.css';

const LanguageDropdown =()=>{
    const[isOpen, setIsOpen] = useState(false);
    const[selectedLanguage, setSelectedLanguage] = useState('Pt');

    const toggleDropdown =()=>{
        setIsOpen(!isOpen);
    };

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };

    return (
        <div className="language-dropdown">
          <button className="dropdown-button" onClick={toggleDropdown}>
            {selectedLanguage === 'Pt' ? 'Português' 
              : selectedLanguage === 'En' ? 'English' 
              : selectedLanguage === 'Es' ? 'Español' 
              : 'Português'}
          </button>
          {isOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => handleLanguageChange('Pt')}>Português</li>
              <li onClick={() => handleLanguageChange('En')}>English</li>
              <li onClick={() => handleLanguageChange('Es')}>Español</li>
            </ul>
          )}
        </div>
      );
    };
    
    export default LanguageDropdown;