import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai'; // Left arrow icon for back navigation
import mockData from './data'; // Assuming the mockData is imported here

const InterviewExperiencePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Destructuring the experience data passed from the previous page
  const { experience } = state;

  // Fetch roles with the same title (role) as the current experience
  const similarRoles = mockData.filter(
    (ex) => ex.role === experience.role && ex.id !== experience.id
  );

  return (
    <div className="p-6 max-w-5xl mx-auto bg-gradient-to-r from-white-100 to-purple-100 shadow-lg rounded-lg">
      {/* Go Back Button (Icon positioned next to Company Name) */}
      <div className="flex items-center mb-6">
        <AiOutlineArrowLeft
          onClick={() => navigate(-1)}
          className="text-purple-700 cursor-pointer hover:text-purple-900 text-2xl mr-4"
        />
        <h2 className="text-4xl font-bold text-purple-700">{experience.company}</h2>
      </div>

      {/* Main Interview Details Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-3xl font-semibold text-gray-800 mb-3">{experience.title}</h3>
        <p className="text-lg text-gray-600 italic mb-6">{experience.role}</p>

        <div className="mb-6">
          <h4 className="text-xl font-medium text-gray-800 mb-2">Description</h4>
          <p className="text-gray-700">{experience.description}</p>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-medium text-gray-800 mb-2">Questions Asked</h4>
          <ul className="space-y-3">
            {experience.questions.map((question, index) => (
              <li
                key={index}
                className="bg-gradient-to-r from-purple-50 to-purple-200 text-purple-700 p-4 rounded-lg shadow-sm transition-transform hover:scale-105"
              >
                {question}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Similar Roles Section (Roles with the Same Title) */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Roles with the Same Title</h3>

        <div className="space-y-6">
          {similarRoles.length > 0 ? (
            similarRoles.map((role, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-lg hover:bg-gradient-to-r from-purple-50 to-purple-200 transition duration-300"
              >
                <h4 className="text-xl font-semibold text-purple-700">
                  {role.company} - {role.role}
                </h4>
                <p className="text-gray-600">{role.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No similar roles available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterviewExperiencePage;
