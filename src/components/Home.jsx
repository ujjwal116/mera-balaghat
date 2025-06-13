// --------------- Home.jsx ---------------
import CategoryList from './CategoryList';
import { useState, useEffect } from 'react';

function Home() {
  const [language, setLanguage] = useState('hi');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('meraBalaghatLang');
    if (savedLang) setLanguage(savedLang);

    const savedMode = localStorage.getItem('meraBalaghatDarkMode');
    const prefersDarkMode = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    setDarkMode(savedMode !== null ? JSON.parse(savedMode) : prefersDarkMode);
  }, []);

  useEffect(() => localStorage.setItem('meraBalaghatLang', language), [language]);
  useEffect(() => {
    localStorage.setItem('meraBalaghatDarkMode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <><main ><CategoryList 
        language={language} darkMode={darkMode} />
      </main>    
    </>
  );
}

export default Home;
