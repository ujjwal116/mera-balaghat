import React from 'react'
import { Star, ChevronsRight } from 'lucide-react';
import uiText from '../data/uiText.js'; // Assuming you have a JSON file for UI text      
import { Link } from 'react-router-dom';

export default function ProviderCard({ provider, categoryId, handleSelectProvider, language = "hi", darkMode = "false", themeColors }) {
    return (
        <Link to={`/categories/${categoryId}/provider/${provider.id}`}

            className={`p-5 rounded-lg shadow-md transition-all duration-300 flex 
                items-center gap-4 cursor-pointer border 
                ${themeColors.bg} ${themeColors.hoverBg} ${themeColors.border} ${themeColors.cardHover}`}
        >
            <div className='flex items-center w-full' onClick={() =>  handleSelectProvider(provider) }>

                <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${darkMode ? 'bg-black/20' : 'bg-white/60'}`}>
                    <Star className={`w-8 h-8 text-amber-500`} />
                </div>
                <div className="flex-1">
                    <h4 className={`font-bold lang-font ${darkMode ? 'text-white' : 'text-slate-900'}`}>{provider.name[language]}</h4>
                </div>
                
            </div>
            <ChevronsRight className={`w-6 h-6 flex-shrink-0 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`} />
        </Link>
    );
}
