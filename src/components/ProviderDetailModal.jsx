import React from 'react';
import { Users, MapPin, Zap, Star, Wrench, Phone, MessageSquare } from 'lucide-react';
import uiText from '../data/uiText.js'; // Assuming you have a JSON file for UI text
import { Link } from 'react-router-dom';
export default function ProviderDetailModal({ provider, category, language }) {
  if (!provider) return null;

  return (
    <div className="fixed inset-0 bg-opacity-75 flex items-center justify-center p-4 z-[60] backdrop-blur-sm">
      <div className='dark:bg-slate-800 dark:text-slate-100 bg-white text-slate-800 rounded-xl shadow-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto relative transition-all duration-300 scale-95 animate-modalEnter'>
        <Link
          to={`/categories/${category.id}`}
          className='absolute top-4 right-4 p-2 rounded-full transition-colors dark:text-slate-300 dark:hover:bg-slate-700 text-slate-500 hover:bg-slate-100'
          aria-label={uiText.modal.close[language]}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </Link>

        <h2 className='text-3xl font-bold mb-1 lang-font dark:text-teal-300 text-teal-600'>{provider.name[language]}</h2>
        <p className='text-md mb-4 lang-font dark:text-slate-400 text-slate-500'>{provider.description[language]}</p>

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
                {provider.tags[language].map(tag => <span key={tag} className='px-2 py-1 text-xs rounded-full dark:bg-slate-700 dark:text-slate-300 bg-slate-100 text-slate-600'>{tag}</span>)}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {provider.contact && (
            <a
              href={`tel:${provider.contact}`}
              className='flex-1 text-center font-semibold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 flex items-center justify-center dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-white bg-teal-600 hover:bg-teal-700 text-white min-w-0'
            >
              <Phone className="w-5 h-5 mr-2" /> {uiText.modal.call[language]} ({provider.contact})
            </a>
          )}
          <a
            href={`https://wa.me/?text=${encodeURIComponent(uiText.modal.whatsappShareText ? uiText.modal.whatsappShareText[language] : 'Check out this awesome service!')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center font-semibold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white min-w-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.098 3.205 5.077 4.372.711.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"
                fill="currentColor"
              />
            </svg>
            {uiText.modal.whatsappShareButton ? uiText.modal.whatsappShareButton[language] : 'Share on WhatsApp'}
          </a>
        </div>
      </div>
    </div>
  );
};

