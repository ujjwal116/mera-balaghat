// --------------- App.jsx ---------------
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CategoryList from './components/CategoryList';
import ProviderList from './components/ProviderList'; 
import ProviderDetailModal from './components/ProviderDetailModal';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [view, setView] = useState('categories'); // 'categories' or 'providers'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProvider, setSelectedProvider] = useState(null);
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

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setView('providers');
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setView('categories');
  };
  
  const handleSelectProvider = (provider) => setSelectedProvider(provider);
  const handleCloseModal = () => setSelectedProvider(null);

  const toggleLanguage = () => setLanguage(prevLang => (prevLang === 'en' ? 'hi' : 'en'));
  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700&family=Poppins:wght@400;600;700&display=swap');
        .lang-font { font-family: 'Poppins', 'Noto Sans Devanagari', sans-serif; }
        @keyframes modalEnter { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        .animate-modalEnter { animation: modalEnter 0.3s ease-out forwards; }
      `}</style>
      <Header language={language} toggleLanguage={toggleLanguage} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {view === 'categories' && <CategoryList onSelectCategory={handleSelectCategory} language={language} darkMode={darkMode} />}
        {view === 'providers' && <ProviderList category={selectedCategory} onSelectProvider={handleSelectProvider} onBack={handleBackToCategories} language={language} darkMode={darkMode} />}
      </main>
      <Footer language={language} darkMode={darkMode} />
      {selectedProvider && <ProviderDetailModal provider={selectedProvider} category={selectedCategory} onClose={handleCloseModal} language={language} darkMode={darkMode} />}
       <Analytics /> 
    </div>
  );
}

export default App;
