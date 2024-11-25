import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="text-white py-10 bg-gradient-to-r from-gray-800 to-black">
      <div className="container mx-auto px-4 lg:px-20 py-10 flex flex-col gap-10 md:flex-row justify-between border-t border-gray-700">
        <div className="flex flex-col items-center md:items-start">
          <p className="font-bold text-center text-2xl">
            Stay<span className="text-green-500 text-2xl">Connected</span> with
            Synkro
          </p>
          <p className="mt-2 text-gray-400">
            Keep your inventory up to date instantly – Synkro ensures seamless
            real-time synchronization across all your channels.
          </p>
        </div>

        <div className="">
          <p className="font-semibold text-lg mb-4">Quick Links</p>
          <div className="flex flex-col text-start mb-4 md:mb-0 space-y-2">
            <a href="#" className="block md:inline-block hover:text-gray-300">
              Home
            </a>
            <a
              href="#features"
              className="block md:inline-block hover:text-gray-300"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block md:inline-block hover:text-gray-300"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="block md:inline-block hover:text-gray-300"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="block md:inline-block hover:text-gray-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div>
          <p className="font-semibold text-lg mb-4">Legal</p>
          <div className="flex flex-col text-start mb-4 md:mb-0 space-y-2 text-[14px]">
            <a href="#" className="block md:inline-block hover:text-gray-300">
              Terms and Conditions
            </a>
            <a href="#" className="block md:inline-block hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="block md:inline-block hover:text-gray-300">
              Cookie Policy
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <p className="font-semibold text-lg mb-4">Follow Us</p>
          <div className="flex mt-4 gap-3">
            <a
              href="https://www.facebook.com/"
              className="bg-blue-600 p-2 rounded-full text-white hover:text-gray-500 hover:scale-110 transition-transform"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/"
              className="bg-pink-600 p-2 rounded-full text-white hover:text-gray-500 hover:scale-110 transition-transform"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://twitter.com/"
              className="bg-blue-600 p-2 rounded-full text-white hover:text-gray-500 hover:scale-110 transition-transform"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://www.youtube.com/"
              className="bg-red-600 p-2 rounded-full text-white hover:scale-110 transition-transform"
            >
              <FaYoutube size={18} />
            </a>
          </div>
          <Button
            title="Get Started"
            btnType="button"
            containerStyle="mt-10 md:block bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-md min-w-[130px]"
          />
        </div>
      </div>
      <div className="flex items-center justify-center py-4">
        <span className="text-gray-400 leading-10">
          Synkro &copy; 2023 | Powered by Amazon MCF and Shopify
        </span>
      </div>
    </footer>
  );
};

export default Footer;
