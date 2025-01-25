import React from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const UserExperienceCard = ({ experience, onEdit, onDelete }) => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
      {/* Company Name */}
      <h2 className="text-3xl font-bold text-purple-700 mb-2">{experience.company}</h2>

      {/* Role */}
      <p className="text-xl text-gray-600 font-medium mb-4">{experience.role}</p>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-6">{experience.description}</p>

      {/* Questions Asked */}
      <h4 className="text-sm font-semibold text-gray-800 mb-3">Questions Asked</h4>
      <ul className="space-y-2">
        {experience.questions.map((question, index) => (
          <li
            key={index}
            className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition duration-300"
          >
            {question}
          </li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div className="flex justify-end items-center space-x-3 mt-6">
        <button
          className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 focus:ring-2 focus:ring-blue-300"
          onClick={() => onEdit(experience.id)}
          aria-label="Edit"
        >
          <AiOutlineEdit className="text-xl" />
        </button>
        <button
          className="p-2 bg-red-50 text-red-600 rounded-full hover:bg-red-100 focus:ring-2 focus:ring-red-300"
          onClick={() => onDelete(experience.id)}
          aria-label="Delete"
        >
          <AiOutlineDelete className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default UserExperienceCard;
