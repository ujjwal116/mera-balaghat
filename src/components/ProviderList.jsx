import React from 'react'
import { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import ProviderCard from './ProviderCard';
import uiText from '../data/uiText.js'; // Assuming you have a JSON file for UI text
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import serviceData from '../data/mockData.js';
import ProviderDetailModal from './ProviderDetailModal';
import { useEffect } from 'react';


export default function ProviderList({ language='hi', darkMode=false}) {
    const { categoryId, providerId } = useParams();
    const [selectedProvider, setSelectedProvider] = useState(null);
    const category = serviceData.find(cat => String(cat.id) === String(categoryId));
    useEffect(() => {
        if (providerId && category) {
            const provider = category.providers.find(p => String(p.id) === String(providerId));
            setSelectedProvider(provider || null);
        } else {
            setSelectedProvider(null);
        }
    }, [providerId, category]);

    const [searchTerm, setSearchTerm] = useState('');
    const themeColors = darkMode ? category.colors.dark : category.colors.light;

    const filteredProviders = category.providers.filter(p =>
        Object.values(p.name).some(n => n.toLowerCase().includes(searchTerm.toLowerCase())) ||
        Object.values(p.description).some((n) => n.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className='flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12'>
            <div>
            <div className="flex items-center mb-8">
                <Link to="/categories" className={`mr-4 p-2 rounded-full transition ${themeColors.hoverBg}`}>
                    <ArrowLeft className={`w-6 h-6 ${themeColors.text}`} />
                </Link>
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
                <div className="space-y-4 ">
                    {category.providers.map(p => (
                        <ProviderCard key={p.id} provider={p} categoryId={categoryId} handleSelectProvider={setSelectedProvider} language={language} darkMode={darkMode} themeColors={themeColors} />
                    ))}
                </div>
            ) : (
                <p className={`text-center py-10 lang-font ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{uiText.providers.noResults[language]}</p>
            )}
            {selectedProvider && <ProviderDetailModal provider={selectedProvider} category={category} language={language} darkMode={darkMode} />}
        </div>
        </div>
    );
};

