import React from 'react';
import { Users, MapPin, Zap, Star, Wrench, Phone, MessageSquare } from 'lucide-react'; 
import uiText from '../data/uiText.js'; // Assuming you have a JSON file for UI text
import { Link } from 'react-router-dom';
export default function ProviderDetailModal({ provider, category, language, darkMode }) {
  if (!provider) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-[60] backdrop-blur-sm">
      <div className={`${darkMode ? 'bg-slate-800 text-slate-100' : 'bg-white text-slate-800'} rounded-xl shadow-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto relative transition-all duration-300 scale-95 animate-modalEnter`}>
        <Link
          to={`/categories/${category.id}`}
          className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${darkMode ? 'text-slate-300 hover:bg-slate-700' : 'text-slate-500 hover:bg-slate-100'}`}
          aria-label={uiText.modal.close[language]}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </Link>

        <h2 className={`text-3xl font-bold mb-1 lang-font ${darkMode ? 'text-teal-300' : 'text-teal-600'}`}>{provider.name[language]}</h2>
        <p className={`text-md mb-4 lang-font ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{provider.description[language]}</p>

        <div className="space-y-3 text-sm mb-6">
          <p className="lang-font flex items-center"><Users className="w-5 h-5 mr-2 text-gray-400" /> <strong>{uiText.modal.category[language]}</strong> {category.categoryName[language]}</p>
          <p className="lang-font flex items-center"><MapPin className="w-5 h-5 mr-2 text-gray-400" /> <strong>{uiText.modal.location[language]}</strong> {provider.location[language]}</p>
          <p className="lang-font flex items-center"><Zap className="w-5 h-5 mr-2 text-gray-400" /> <strong>{uiText.modal.availability[language]}</strong> {provider.availability[language]}</p>
          <p className="lang-font flex items-center"><Star className="w-5 h-5 mr-2 text-amber-400" /> <strong>{uiText.modal.rating[language]}</strong> {provider.rating} / 5</p>
          <div className="lang-font flex items-start pt-1">
            <Wrench className="w-5 h-5 mr-2 mt-1 text-gray-400" />
            <div>
              <strong>{uiText.modal.tags[language]}</strong>
              <div className="flex flex-wrap gap-2 mt-1">
                {provider.tags[language].map(tag => <span key={tag} className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>{tag}</span>)}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a href={`tel:${provider.contact}`} className={`flex-1 text-center font-semibold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 flex items-center justify-center ${darkMode ? 'bg-teal-500 hover:bg-teal-400 text-white' : 'bg-teal-600 hover:bg-teal-700 text-white'}`}>
            <Phone className="w-5 h-5 mr-2" /> {uiText.modal.call[language]} ({provider.contact})
          </a>
          <a href={`sms:${provider.contact}`} className={`flex-1 text-center font-semibold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 flex items-center justify-center ${darkMode ? 'bg-sky-500 hover:bg-sky-400 text-white' : 'bg-sky-600 hover:bg-sky-700 text-white'}`}>
            <MessageSquare className="w-5 h-5 mr-2" /> {uiText.modal.message[language]}
          </a>
        </div>
      </div>
    </div>
  );
};

