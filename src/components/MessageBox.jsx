import React from 'react';

export const MessageBox = ({ message, isVisible }) => {
  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-5 py-3 rounded-lg shadow-lg z-50 transition-opacity duration-300"
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      {message}
    </div>
  );
};