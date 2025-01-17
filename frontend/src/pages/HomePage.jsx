import React from "react";
import Navbar from "../page_components/Navbar";
import Hero from "../page_components/Hero";
import Footer from "../page_components/Footer";
import FeatureCard from "../page_components/FeatureCard";
import Testimonial from "../page_components/Testimonial";

const HomePage = () => {
  return (
    <div className="flex flex-col ">
      
      <Hero />

      <section id="features" className=" py-16 bg-gray-50">
        <div className="px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Features
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Personalized Content"
              description="Get tailored interview experiences based on your interests and career goals."
              icon="⭐"
            />
            <FeatureCard
              title="Collaborative Learning"
              description="Engage with the community by sharing insights and receiving feedback."
              icon="🤝"
            />
            <FeatureCard
              title="Real-Time Insights"
              description="Stay updated with the latest industry interview trends."
              icon="📈"
            />
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            What Our Users Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Testimonial
              name="Aditi Rao"
              text="This platform helped me crack my dream job by learning from real experiences!"
            />
            <Testimonial
              name="Rahul Verma"
              text="I love the community here—everyone is so supportive and insightful."
            />
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default HomePage;
