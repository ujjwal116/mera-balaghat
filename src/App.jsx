import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const darkMode=false;
  return (
     <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
    <Header/>
    <Outlet />
    <Footer/>
    </div>
  );
}

export default App;
