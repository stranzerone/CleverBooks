import React from 'react';

const FooterPage = () => {
  return (
    <div className="bg-black text-white p-16">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Logo and Company Description */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h1 className='text-2xl text-gradient mb-2'>CleverBooks</h1>
          <p className="text-sm">
            Crest is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimize space and fulfill every order.
          </p>
        </div>
        
        {/* Explore */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="font-bold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><a href="#feature1" className="text-sm">Product</a></li>
            <li><a href="#feature2" className="text-sm">Pricing</a></li>
            <li><a href="#feature3" className="text-sm">Customer Service</a></li>
            <li><a href="#feature4" className="text-sm">Career</a></li>
          </ul>
        </div>

        {/* Learn */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="font-bold mb-4">Learn</h3>
          <ul className="space-y-2">
            <li><a href="#blog" className="text-sm">About Us</a></li>
            <li><a href="#resources" className="text-sm">Blog</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="font-bold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="text-sm">sales@getcrest.ai</li>
            <li className="text-sm">Registered Office:
1507, Incubex, 11th cross road, 19th Main Road, Bengaluru, India. 560102</li>
            <li className="text-sm">Corporate Office:
291, All Time Space, 4th Floor,
15th A Cross, Sector - 6,
HSR Layout, Bengaluru,
India. 560102</li>
          </ul>
        </div>
      </div>

      {/* Footer Links and Copyright */}
      <div className="mt-8 border-t border-gray-700 justify-between pt-4 py-14 flex flex-col md:flex-row w-1/2 items-center">
        <p className="text-xs">Copyright 2024 CleverBooks</p>
        <p className="text-xs"> Terms of Service</p>
        <p className="text-xs"> Privacy Policy</p>

     
      </div>
      <div>
        <p>
        Conifer Innovations Private Limited <br />
CIN: U72900KA2022PTC163144
        </p>
      </div>
    </div>
  );
};

export default FooterPage;
