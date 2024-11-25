import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSignInClick = () => {
    navigate('./login'); // Use navigate to redirect to the login page
  };

  return (
    <header className="w-full fixed z-10 bg-black opacity-90">
      <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
        <a
          href="/"
          className="flex items-center justify-center text-white text-lg cursor-pointer"
        >
          SYN<span>KRO</span>
        </a>

        <ul className="hidden md:flex text-white gap-6">
          <li>
            <a className="hover:font-extrabold" href="/">
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:font-extrabold"
              href="#gallery"
              onClick={(e) => handleScroll(e, 'gallery')}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="hover:font-extrabold"
              onClick={(e) => handleScroll(e, 'testimonials')}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              className="hover:font-extrabold"
              href="#team"
              onClick={(e) => handleScroll(e, 'team')}
            >
              Companies
            </a>
          </li>
          <li>
            <a
              className="hover:font-extrabold"
              href="#service"
              onClick={(e) => handleScroll(e, 'service')}
            >
              Service
            </a>
          </li>
        </ul>
        <button
          onClick={handleSignInClick} // Add the onClick handler here
          className="text-white bg-transparent border-2 border-white hover:bg-black hover:text-white py-2 px-4 rounded"
        >
          Sign In
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
