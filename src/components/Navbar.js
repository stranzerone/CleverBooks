import React, { useState } from 'react';
import logo from "../Assessts/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-gradient text-white">CleverBooks</span>
          </div>
          {/* Responsive Menu Button */}
          <div className="flex ">
            <button 
              className="text-gray-300 lg:hidden hover:text-white focus:outline-none" 
              onClick={toggleMenu}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          {/* Navigation Links */}
       {/* Navigation Links */}
{/* Navigation Links */}
<div className={`flex  flex-col lg:flex-row lg:space-x-5 lg:items-center lg:block md:space-y-0 ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 lg:static left-0 right-0 bg-black lg:bg-transparent`}>
  <a href="#product" className="text-white hover:text-gradient block lg:inline-block">Product</a>
  <a href="#pricing" className="text-white hover:text-gradient block lg:inline-block">Pricing</a>
  <a href="#industry" className="text-white hover:text-gradient block lg:inline-block">Industry</a>
  <a href="#customer-service" className="text-white hover:text-gradient block lg:inline-block">Customer Service</a>
  <a href="#about" className="text-white hover:text-gradient block lg:inline-block">About</a>
  <a href="#blog" className="text-white hover:text-gradient block lg:inline-block">Blog</a>
  <a href="#login" className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 block lg:inline-block">Login</a>
  <a href="#talk-to-us" className="bg-gradient-to-r from-purple-400 to-pink-600 hover:bg-blue-600 text-white px-3 py-2 rounded-2xl block lg:inline-block">Talk to Us</a>
</div>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
