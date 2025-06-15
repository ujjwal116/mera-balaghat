import React from 'react'
import CategoryCard from './CategoryCard';
import serviceData from '../data/mockData.js'; // Assuming you have a mock data file
import uiText from '../data/uiText.js'; // Assuming you have a JSON file for UI text
import { Link } from 'react-router-dom';
import { use } from 'react';
import { useTheme } from '../context/theme.js';
import { useLanguage } from '../context/language.js';
export default function CategoryList() {
    const { language,setLanguage } = useLanguage();
    const getCategories = () => {
        return serviceData.map(cat => ({
            ...cat,
            id: cat.id,
            categoryName: {
                ...cat.categoryName,
                [language]: uiText.categories[cat.id]?.title[language] || cat.categoryName[language]
            },
            description: uiText.categories[cat.id]?.description[language] || cat.description,
            categoryIcon: cat.categoryIcon || 'Wrench',
        }));
    };
    const categories = getCategories();
    return ( <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <h2 className={`text-3xl font-bold text-center mb-8 lang-font  dark:text-white text-slate-800`}>
                {uiText.categories.title[language]}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map(cat => (
                    <Link to={`/categories/${cat.id}`}
                        className="hover:scale-105 transition-transform duration-300"
                        key={cat.id}
                    ><div>  <CategoryCard category={cat} language={language} catId={cat.id} /></div>
                    </Link>
                ))}
            </div>
            </div>
    );
}
