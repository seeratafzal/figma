// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white p-6 border-2 border-purple-200">
      <div className="flex flex-wrap justify-between">
        <div className="mb-6">
          <h3 className="text-lg font-bold">Funiro.</h3>
          <p>400 University Drive Suite 200 Coral Gables,</p>
          <p>FL 33134 USA</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold">Links</h3>
          <a href="#" className="block text-sm text-black mb-1">Home</a>
          <a href="#" className="block text-sm text-black mb-1">Shop</a>
          <a href="#" className="block text-sm text-black mb-1">About</a>
          <a href="#" className="block text-sm text-black mb-1">Contact</a>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold">Help</h3>
          <a href="#" className="block text-sm text-black mb-1">Payment Options</a>
          <a href="#" className="block text-sm text-black mb-1">Returns</a>
          <a href="#" className="block text-sm text-black mb-1">Privacy Policies</a>
        </div>
        <div className="newsletter mb-6">
          <h3 className="text-lg font-bold">Newsletter</h3>
          <input type="email" placeholder="Enter Your Email Address" className="p-2 text-sm border border-gray-300 rounded w-48 mb-2"/>
          <button className="p-2 text-sm bg-black text-white rounded">SUBSCRIBE</button>
        </div>
      </div>
      <div className="text-center text-sm text-black mt-6">
        <p>2023 funiro. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
