//import React from 'react';
import { FaInstagram, FaFacebook, FaYelp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#FFF4E5] text-[#38B6FF] py-12">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p>&copy; Only Yolking LLC</p>
        <div className="flex space-x-6 mt-4">
          <a
            href="https://www.instagram.com/Only_Yolking/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-500 hover:text-blue-600"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/people/Only-Yolking/100087416063962/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-500 hover:text-blue-600"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.yelp.com/biz/only-yolking-eugene"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-red-500 hover:text-red-600"
          >
            <FaYelp />
          </a>
        </div>
        <div className="space-x-4 mt-4">
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/terms" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
