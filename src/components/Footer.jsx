import React from 'react'
import uiText from '../data/uiText.js'; // Assuming you have a JSON file for UI text
function Footer ({ language, darkMode }){

return (
    <footer className={`py-6 mt-auto transition-colors duration-300 ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-teal-600 text-white'}`}>
      <div className="container mx-auto px-4 text-center">
        <p className="lang-font text-sm">&copy; {new Date().getFullYear()} {uiText.header.title[language]}. {uiText.footer.copyright[language]}</p>
        <p className="lang-font text-xs mt-1 opacity-80">{uiText.footer.tagline[language]}</p>
      </div>
    </footer>
);
}

export default Footer;

