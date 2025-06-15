import React from 'react'
import { Globe, Sun, Moon, Heart } from 'lucide-react';
import uiText from '../data/uiText.js'; // Assuming you have a JSON file for UI text  
import { Link } from 'react-router-dom';
import { useTheme } from '../context/theme.js';
import { useLanguage } from '../context/language.js';
function Header( ) {
  const {language, setLanguage} = useLanguage();  
  const { darkMode,setDarkMode } = useTheme();
  return (
    <header className={`shadow-md sticky top-0 z-50 transition-colors duration-300 ${darkMode ? 'bg-slate-800 text-white' : 'bg-teal-600 text-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
             <Heart className={`h-10 w-10 mr-3 ${darkMode ? 'text-teal-400' : 'text-white'}`} />
            <Link to="/" className="text-lg sm:text-xl font-bold lang-font">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight lang-font">{uiText.header.title["hi"]}</h1>
              <p className="text-sm sm:text-md lang-font opacity-90">{uiText.header.subtitle[language]}</p>
            </Link>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')} className={`p-2 rounded-full font-semibold flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300 ${darkMode ? 'bg-slate-700 hover:bg-slate-600 focus:ring-teal-400 focus:ring-offset-slate-800' : 'bg-teal-500 hover:bg-teal-400 focus:ring-white focus:ring-offset-teal-600'}`}>
                <Globe className="h-5 w-5 mr-2" /><span className="text-sm">{language === 'en' ? 'हिंदी' : 'English'}</span>
            </button>
            <button onClick={() => setDarkMode((pre) => !pre)} className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${darkMode ? 'bg-slate-700 hover:bg-slate-600 focus:ring-teal-400 focus:ring-offset-slate-800' : 'bg-teal-500 hover:bg-teal-400 focus:ring-white focus:ring-offset-teal-600'}`}>
                {darkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-slate-300" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;