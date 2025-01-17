import React from "react";

const Hero = () => {
  return (
    <section className="py-20 flex flex-col items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      
        
          <h1 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-red text-center font-extrabold">
            Share and Learn from Real Interview Experiences
          </h1>
          <p className="mb-6 text-lg sm:text-xl lg:text-2xl text-center">
            Empower yourself and others by exchanging interview stories, tips, 
            and strategies.
          </p>
          <button className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100">
            Get Started
          </button>
        
    </section>
  );
};

export default Hero;
