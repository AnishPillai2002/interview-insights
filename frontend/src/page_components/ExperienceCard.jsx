import React from "react";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{experience.title}</h2>
      <p className="text-gray-600 mb-1">
        <strong>Company:</strong> {experience.company}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Role:</strong> {experience.role}
      </p>
      <p className="text-gray-600">
        <strong>Description:</strong> {experience.description}
      </p>
    </div>
  );
};

export default ExperienceCard;
