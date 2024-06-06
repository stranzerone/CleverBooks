import React from 'react';
import Founder from "../Assessts/founder.webp"
const FounderPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-8">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 relative">
          <img
            src={Founder} // replace with actual image path
            alt="Founders"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bg-red-200 bottom-4 right-4 bg-white text-gray-700 text-sm p-2 rounded-lg shadow-md">
          Rahul Vishwakarma, Akhil Kumar & Yogesh Byahatti - Founders
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">From the Founders</h1>
          <p className="text-lg mb-4">
            We are a young company solving an age-old problem: Supply Chain. Our goal is simple: to eradicate stock outs for businesses that want to grow faster. Our background, tech expertise, and empathy allow us to do just that.
          </p>
          <p className="text-lg mb-8">
            Thank you for checking out Crest, and we hope to help you always be in stock!
          </p>
          <button className="bg-transparent border border-2 border-purple-400 text-gradient  px-4 py-2 rounded-3xl">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default FounderPage;
