import React from 'react';
import samosa from "../Assessts/samosa.webp"
import profile from "../Assessts/profile.webp"

const ProfilePage = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto py-10">
      {/* Right Side */}
      <div className="md:w-1/3 bg-gray-400 flex justify-center items-center md:order-last mb-4 md:mb-0">
        <img src={samosa} alt="Profile" className="w-full md:object-cointain md:w-auto h-full" />
      </div>
      {/* Left Side */}
      <div className="md:w-2/3 flex flex-col justify-center items-center p-8">
        <p className="text-lg font-semibold mb-4">
          D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.
        </p>
        <div className="flex items-center self-start">
          <img src={profile} alt="Small Profile" className="w-8 h-8 rounded-full mr-2" />
          <div>
            <p className="text-sm font-semibold mb-1">Diksha Pande</p>
            <p className="text-sm font-semibold">Co-founder and Owner</p>
          </div>
        </div>
        <div className="flex self-start space-x-4 mt-4">
          <button className="bg-transparent border border-4 text-gradient border-purple-300 font-bold text-red-300 px-3 py-1 rounded-3xl">{"<"}</button>
          <button className="bg-transparent border border-4 text-gradient border-purple-300 font-bold text-red-300 px-3 py-1 rounded-3xl">{">"}</button>
        </div>
        {/* Additional Divs */}
        <div className="flex flex-col md:flex-row justify-between py-8 w-full mt-4">
          <div className="w-full md:w-auto p-6 bg-purple-200 flex flex-col justify-start rounded-lg mb-4 md:mb-0">
            <h1 className="mb-2 text-start text-xl font-bold text-gradient">
              Up to 95% Off
            </h1>
            <p className="text-start">
              Demand Fulfilled
            </p>
          </div>
          <div className="w-full md:w-auto p-6 bg-purple-200 flex flex-col justify-start rounded-lg mb-4 md:mb-0">
            <h1 className="mb-2 text-start text-xl font-bold text-gradient">
              {"< 3%"}
            </h1>
            <p className="text-start">
              Demand Fulfilled
            </p>
          </div>
          <div className="w-full md:w-auto p-6 bg-transparent border border-4 border-purple-300 flex flex-col justify-center rounded-lg">
            <h1 className="mb-2 text-center text-xl font-bold text-gradient">
              Read Story <br />
              {"->"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
