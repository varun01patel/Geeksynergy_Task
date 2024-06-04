import React, { useState } from 'react';

const Header = () => {
  const [showCompanyInfo, setShowCompanyInfo] = useState(false);

  return (
    <div>
      <header className="bg-white shadow w-full">
        <nav className="w-full px-6 py-3 flex items-center justify-between">
          <div className="flex items-center">
            {/* <img src="/logo.png" alt="Logo" className="h-8 mr-4" /> */}
            <span className="text-lg font-bold">My Company</span>
          </div>
          <div>
            <button
              className="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none px-4 py-2 rounded-md"
              onClick={() => setShowCompanyInfo(!showCompanyInfo)}
            >
              Company Info
            </button>
          </div>
        </nav>
      </header>

      {showCompanyInfo && (
        <div className="w-full px-6 py-8 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">Company Information</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <p>Company: Geeksynergy Technologies Pvt Ltd</p>
            <p>Address: Sanjayanagar, Bengaluru-56</p>
            <p>Phone: XXXXXXXXX09</p>
            <p>Email: XXXXXX@gmail.com</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
