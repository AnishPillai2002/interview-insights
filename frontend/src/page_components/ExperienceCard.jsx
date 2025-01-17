import React from "react";
import { useNavigate } from "react-router-dom";

const ExperienceCard = ({ experience }) => {
  const navigate = useNavigate();

  // Function to navigate to the InterviewExperiencePage
  const handleViewDetails = () => {
    navigate(`/interview-experience/${experience.id}`, { state: { experience } });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{experience.title}</h2>
      <p className="text-gray-600 mb-1">
        <strong>Company:</strong> {experience.company}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Role:</strong> {experience.role}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Description:</strong> {experience.description}
      </p>
      {/* Button to view full details */}
      <button
        onClick={handleViewDetails}
        className="text-purple-700 hover:text-purple-900 font-semibold"
      >
        View
      </button>
    </div>
  );
};

export default ExperienceCard;
