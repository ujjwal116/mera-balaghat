import React from 'react'
import { Star, ChevronsRight } from 'lucide-react';
import uiText from '../data/uiText.js'; // Assuming you have a JSON file for UI text        

export default function ProviderCard ({ provider, onSelectProvider, language, darkMode, themeColors }){
    return (
    <div onClick={() => onSelectProvider(provider)} className={`p-5 rounded-lg shadow-md transition-all duration-300 flex items-center gap-4 cursor-pointer border ${themeColors.bg} ${themeColors.hoverBg} ${themeColors.border} ${themeColors.cardHover}`}>
        <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${darkMode ? 'bg-black/20' : 'bg-white/60'}`}>
            <Star className={`w-8 h-8 text-amber-500`} />
        </div>
        <div className="flex-1">
            <h4 className={`font-bold lang-font ${darkMode ? 'text-white' : 'text-slate-900'}`}>{provider.name[language]}</h4>
            {/* <p className={`text-sm lang-font ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{provider.description[language]}</p> */}
            {/* <div className="flex items-center text-xs mt-1 text-amber-500">
                <Star className="w-4 h-4 mr-1 fill-current" />
                <span className="font-bold">{provider.rating}</span>
            </div> */}
        </div>
        <ChevronsRight className={`w-6 h-6 flex-shrink-0 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`} />
    </div>
);
}
