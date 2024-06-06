// src/pages/NewPage.js
import React from 'react';
import hero from "../Assessts/hero.svg"
const HeroPage = () => {
    const gradientBorder = 'linear-gradient(to right, #a78bfa, #ec4899)';
  return (
<div class="min-h-screen border-b rounded-bl-[100px] rounded-br-[140px] bg-gradient-to-l from-gray-900 to-black">
<div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl  font-bold text-white text-start mb-8">
        Every order <br />
fulfilled,<span className='text-gradient'>on time.</span> 
        </h1>
        
        <div className="flex flex-col md:flex-row items-center">
         
          
          <div >
          <div className="md:w-1/2 md:ml-8">
            <p className="text-white text-start text-lg">
            Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.            </p>
          </div>
          <div class="flex  py-5 bg-transparent  p-0.5 shadow-lg">
    <button class="px-5 mx-10 border-2 border border-purple-500  font-bold text-md bg-transparent text-white  py-3 rounded-3xl">Get Started With Crest</button>
</div>

          </div>
          <div className="md:w-full  mb-8 md:mb-0">
            <img src={hero} alt="Descriptive  Alt Text" className="w-full h-auto bg-cover rounded-lg shadow-lg" />
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
