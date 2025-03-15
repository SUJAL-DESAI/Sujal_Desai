import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-200 shadow-md">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">Sujal Desai</span>
        </div>
        <div className="md:hidden">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-gray-200 p-4 md:static md:w-auto md:flex md:space-x-6 text-gray-600`}
        >
          <a href="#" className="block py-2 px-4 hover:text-green-500">Home</a>
          <a href="#" className="block py-2 px-4 hover:text-green-500">About</a>
          <a href="#" className="block py-2 px-4 hover:text-green-500">Services</a>
          <a href="#" className="block py-2 px-4 hover:text-green-500">Projects</a>
          <a href="#" className="block py-2 px-4 hover:text-green-500">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
