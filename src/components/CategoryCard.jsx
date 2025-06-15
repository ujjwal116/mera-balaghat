import React from 'react'
import { Wrench, Zap, HardHat, SprayCan,Drill } from 'lucide-react'; // Ensure you have these icons installed
import { GiDominoTiles } from "react-icons/gi";
import uiText from '../data/uiText.js'; // Assuming you have a JSON file for UI text    
import { GiHandSaw } from "react-icons/gi";
import { useLanguage } from '../context/language.js';

function CategoryCard({ category }) {
    const themeColors = category.colors;
    const iconMap = { Wrench, Zap,GiDominoTiles,GiHandSaw };
    const Icon = iconMap[category.categoryIcon];
    const {language} = useLanguage();

    return (
        <div 
            className={`p-6 rounded-xl shadow-lg border ${themeColors.border} ${themeColors.bg} 
            transform transition-all duration-300 ${themeColors.hoverBg} 
            hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col items-center text-center h-full`}
        >
            <div className={`mb-4 text-5xl ${themeColors.text}`}>
                {Icon && <Icon className="w-12 h-12" />}
            </div>
            <h3 className='text-xl font-bold lang-font mb-2 dark:text-white text-slate-800'>{category.categoryName[language]}</h3>
            <div className={`mt-auto text-sm px-3 py-1 rounded-full lang-font ${themeColors.text} bg-color: 'rgba(255,255,255,0.1)'`} >
                {category.providers.length} {uiText.categories.providersAvailable[language]}
            </div>
        </div>
    );
}

export default CategoryCard
