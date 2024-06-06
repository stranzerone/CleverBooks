import React from 'react';
import spread from "../Assessts/spread.webp";

const NewPage = () => {
  return (
    <div className="min-h-screen py-20 bg-gray-100 flex flex-col justify-center items-center p-8">
      {/* Center Heading */}
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Things your spreadsheet wishes it could do
      </h1>

      <div className="flex flex-col md:flex-row w-full max-w-6xl py-12">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 pr-8">
          <h2 className="text-2xl font-semibold text-gradient mb-4">Accurate Demand and Forecasting</h2>
          <p className="text-lg mb-4">
            Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. 
          </p>
          <button className="text-gradient px-4 py-2 rounded-lg mb-4">Learn More {'-->'}</button>

          {/* Options with Bottom Border */}
          <div className="mt-4 flex flex-col justify-between ">
            <div className="border-b border-t border-gray-700  text-xl py-8">HELIX: Workflow Automation</div>
            <div className="border-b border-t border-gray-700  text-xl py-8">Automated Purchase Planning</div>
            <div className="border-b border-t border-gray-700  text-xl py-8">Automated Distribution Planning</div>
            <div className="border-b border-t border-gray-700  text-xl py-8">Easy Integration</div>
            <div className="border-b border-t border-gray-700  text-xl py-8">Custom Dashboards</div>
            <div className="border-b border-t border-gray-700  text-xl py-8">Consensus Planning</div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 pl-8 flex justify-center items-center order-first pb-12 bg-red-100 md:order-last">
          <img src={spread} alt="Image Description" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default NewPage;
