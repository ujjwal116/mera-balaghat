import React from 'react'
import CategoryCard from './CategoryCard';
import serviceData from '../data/mockData.js'; // Assuming you have a mock data file
import uiText from '../data/uiText.js'; // Assuming you have a JSON file for UI text
export default function CategoryList({ onSelectCategory, language, darkMode }){
return (
    <div>
        <h2 className={`text-3xl font-bold text-center mb-8 lang-font ${darkMode ? 'text-white' : 'text-slate-800'}`}>{uiText.categories.title[language]}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.map(cat => (
                <CategoryCard key={cat.id} category={cat} onSelectCategory={onSelectCategory} language={language} darkMode={darkMode} />
            ))}
        </div>
    </div>
);
}
