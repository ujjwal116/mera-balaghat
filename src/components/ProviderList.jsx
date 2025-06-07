import React from 'react'
import { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import ProviderCard from './ProviderCard';
import uiText from '../data/uiText.js'; // Assuming you have a JSON file for UI text

export default function ProviderList({ category, onSelectProvider, onBack, language, darkMode }) {
    const [searchTerm, setSearchTerm] = useState('');
    const themeColors = darkMode ? category.colors.dark : category.colors.light;

    const filteredProviders = category.providers.filter(p =>
        Object.values(p.name).some(n => n.toLowerCase().includes(searchTerm.toLowerCase())) ||
        Object.values(p.description).some((n) => n.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    const filteredProviders1 = category.providers.filter(p =>
        Object.values(p.name).some(n => n.toLowerCase().includes(searchTerm.toLowerCase())) ||
        Object.values(p.description).some(n => n.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div>
            <div className="flex items-center mb-8">
                <button onClick={onBack} className={`mr-4 p-2 rounded-full transition ${themeColors.hoverBg}`}>
                    <ArrowLeft className={`w-6 h-6 ${themeColors.text}`} />
                </button>
                <h2 className={`text-3xl font-bold lang-font ${themeColors.text}`}>{category.categoryName[language]}</h2>
            </div>
            <div className={`relative mb-6`}>
                <input
                    type="text"
                    placeholder={uiText.providers.searchPlaceholder[language]}
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className={`w-full p-3 pl-10 rounded-lg border focus:ring-2 focus:outline-none lang-font transition-colors duration-300
                        ${darkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-teal-400'
                            : 'bg-white border-slate-300 text-slate-700 placeholder-slate-400 focus:ring-teal-500'}`}
                />
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${darkMode ? 'text-slate-400' : 'text-slate-400'}`} />
            </div>

            {filteredProviders.length > 0 ? (
                <div className="space-y-4">
                    {filteredProviders.map(p => (
                        <ProviderCard key={p.id} provider={p} onSelectProvider={onSelectProvider} language={language} darkMode={darkMode} themeColors={themeColors} />
                    ))}
                </div>
            ) : (
                <p className={`text-center py-10 lang-font ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{uiText.providers.noResults[language]}</p>
            )}
        </div>
    );
};

