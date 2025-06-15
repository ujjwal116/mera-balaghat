import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { useState } from 'react';
import { ThemeProvider } from './context/theme';
import { useEffect } from 'react';
import { LanguageProvider } from './context/language';

function App() {
  const [darkMode,setDarkMode] = useState(false);
  const [language, setLanguage] = useState('hi');
  const defaulstlanguage = 'hi';
    useEffect(() => {  
      const savedMode = Boolean(JSON.parse(localStorage.getItem('meraBalaghatDarkMode')));
      localStorage.setItem('meraBalaghatDarkMode', savedMode);
      setDarkMode(savedMode);
      const savedLang = localStorage.getItem('meraBalaghatLanguage')
       if(savedLang === null ) {   
        localStorage.setItem('meraBalaghatLanguage', defaulstlanguage);
       }else{
        localStorage.setItem('meraBalaghatLanguage', savedLang); 
       }
      setLanguage(pre=>savedLang );
    }, []);
    useEffect(() => {
      localStorage.setItem('meraBalaghatDarkMode', darkMode);
      if(darkMode) 
        document.querySelector('html').classList.add('dark');
      else
        document.querySelector('html').classList.remove('dark');
    }, [darkMode]);
  useEffect(() => {
    localStorage.setItem('meraBalaghatLanguage', language);
  }, [language]);
  return (
    <LanguageProvider value={{ language, setLanguage }}>
      <ThemeProvider value={{ darkMode, setDarkMode }}>
        <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </ThemeProvider>
      </LanguageProvider>
  );
}

export default App;
