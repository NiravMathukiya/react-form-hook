import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        {/* Home Link */}
        <Link to="/" className="text-white text-lg">
          Home
        </Link>
        
        {/* Other Links */}
        <div>
          <Link to="/about" className="text-white mx-4">
            About
          </Link>
          <Link to="/login" className="text-white mx-4">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
