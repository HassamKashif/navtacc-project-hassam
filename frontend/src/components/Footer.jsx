import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} TaskManager Inc. All rights reserved.
        </p>
        <nav className="mt-2 flex justify-center">
          <a href="/terms" className="text-blue-500 hover:underline mx-2">Terms of Service</a>
          <a href="/privacy" className="text-blue-500 hover:underline mx-2">Privacy Policy</a>
          <a href="/contact" className="text-blue-500 hover:underline mx-2">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
