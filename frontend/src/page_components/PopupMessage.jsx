import React from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

const PopupMessage = ({ message, type, onClose }) => {
  // Define styles for success and error types
  const messageStyles = {
    success: {
      backgroundColor: '#4CAF50', // Green background for success
      color: '#ffffff',
      icon: <AiOutlineCheckCircle size={24} />,
    },
    error: {
      backgroundColor: '#f44336', // Red background for error
      color: '#ffffff',
      icon: <AiOutlineCloseCircle size={24} />,
    },
  };

  const currentStyle = messageStyles[type] || messageStyles.success; // Default to success if no type is provided

  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg flex items-center space-x-4 z-50 ${currentStyle.backgroundColor}`}
      style={{ backgroundColor: currentStyle.backgroundColor }}
    >
      {currentStyle.icon}
      <p className="flex-1 text-white text-lg">{message}</p>
      <button
        onClick={onClose}
        className="text-white font-bold hover:text-gray-300 focus:outline-none"
      >
        &times;
      </button>
    </div>
  );
};

export default PopupMessage;
