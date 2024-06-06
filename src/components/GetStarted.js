import React from 'react';

const GetStartedPage = () => {
  return (
    <div className="min-h-full py-12 bg-black flex justify-center items-center">
      <div className="w-11/12 h-[100vh] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold text-white text-center mb-4">You can grow faster than you think!</h1>
        <p className="text-lg text-white text-center mb-8">
          Plan with Crest to fulfil your demand today, and dreams tomorrow. We bring the methods and technologies of large global companies to help brands of all sizes scale.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg">Get Started</button>
      </div>
    </div>
  );
};

export default GetStartedPage;
