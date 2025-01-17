import React from "react";

const Testimonial = ({ name, text }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <p className="italic text-gray-700 mb-4">"{text}"</p>
      <p className="font-bold text-purple-700">- {name}</p>
    </div>
  );
};

export default Testimonial;
