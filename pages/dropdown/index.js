// MegaMenu.js

import React from 'react';

const MegaMenu = () => {
  return (
    <div className="relative bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            {/* Your logo or brand */}
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 space-x-8">
            {/* Navigation links */}
            <a href="#" className="text-gray-300 hover:text-white">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Services
            </a>
            {/* Add more links as needed */}
            <div className="group">
              <a href="#" className="text-gray-300 hover:text-white ">
                Mega Menu
              </a>
              {/* Mega Menu Content */}
              <div className="absolute hidden mt-2 space-y-2 bg-white rounded-md shadow-lg w-64">
                {/* Mega Menu items */}
                <div className="flex items-start space-x-4 p-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Section 1</h3>
                    <a href="#" className="block text-sm text-gray-500 hover:text-gray-700">
                      Item 1
                    </a>
                    <a href="#" className="block text-sm text-gray-500 hover:text-gray-700">
                      Item 2
                    </a>
                    {/* Add more items as needed */}
                  </div>
                  {/* Add more sections as needed */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MegaMenu;
