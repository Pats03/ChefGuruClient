import React from 'react';
<<<<<<< HEAD
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { shopify, ebay, woo } from '../images'; // Make sure to import actual images for these platforms
=======
import teja from '../images/teja.jpeg';
import ras from '../images/ras.jpeg';
import nish from '../images/nish.jpeg';
import mo from '../images/mo.jpeg';
import nit from '../images/nit.jpeg';
import fah from '../images/fah.jpeg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
>>>>>>> 8db5cde1124f36b515bd386ef793dbc0abdf7995

const companies = [
  {
<<<<<<< HEAD
    name: 'Shopify',
    position: 'Top E-commerce Platform',
    image: shopify, // Replace with actual Shopify image
    description:
      'Powering millions of online stores with customizable e-commerce solutions.',
  },
  {
    name: 'eBay',
    position: 'Global Marketplace',
    image: ebay, // Replace with actual eBay image
    description:
      'Connecting buyers and sellers worldwide with a diverse range of products.',
  },
  {
    name: 'WooCommerce',
    position: 'Flexible WordPress Plugin',
    image: woo  , // Replace with actual WooCommerce image
    description:
      'Empowering small and large businesses to build online stores on WordPress.',
  },
];

const CompaniesSlider = () => {
=======
    name: 'Ananth',
    position: 'Frontend Developer',
    image: teja,
    description: 'Specializes in creating intuitive user interfaces.',
  },
  {
    name: 'Rasmitha',
    position: 'Backend Developer',
    image: ras,
    description: 'Expert in server-side logic and database management.',
  },
  {
    name: 'Mohith',
    position: 'Frontend Developer',
    image: mo,
    description: 'Focused on enhancing user experience through design.',
  },
  {
    name: 'Nishanth',
    position: 'Backend Developer',
    image: nish,
    description: 'Handles server-side functionalities efficiently.',
  },
  {
    name: 'Nithin',
    position: 'Machine Learning Engineer',
    image: nit,
    description: 'Applies machine learning algorithms to solve problems.',
  },
  {
    name: 'Fahad',
    position: 'Frontend Developer',
    image: fah,
    description: 'Passionate about creating responsive web designs.',
  },
];

const Team = () => {
>>>>>>> 8db5cde1124f36b515bd386ef793dbc0abdf7995
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
<<<<<<< HEAD
    autoplay: true,
    autoplaySpeed: 3000,
=======
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
>>>>>>> 8db5cde1124f36b515bd386ef793dbc0abdf7995
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
<<<<<<< HEAD
    <section className="py-10 px-4 md:px-20 bg-gray-900">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-white">
        Meet Our Partnering E-commerce Platforms
      </h2>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {companies.map((company, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-800 rounded-lg shadow-lg text-center flex flex-col max-w-xs mx-auto">
                <div className="flex flex-1">
                  <div className="w-1/2 bg-white text-gray-900 flex flex-col items-center justify-center p-4 rounded-l-lg">
                    <img
                      src={company.image}
                      alt={company.name}
                      className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white"
                    />
                    <h3 className="text-lg font-semibold">{company.name}</h3>
                  </div>
                  <div className="w-1/2 bg-gray-800 text-white p-4 rounded-r-lg flex flex-col justify-between">
                    <h4 className="text-md font-semibold">
                      {company.position}
                    </h4>
                    <p className="text-gray-400 mb-4">{company.description}</p>
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-100">
                      Learn More
                    </button>
                  </div>
                </div>
=======
    <section className="py-10 px-4 md:px-20 bg-white-100">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-black-800">
        Meet Our Team
      </h2>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-lg shadow-lg text-center flex flex-col max-w-xs mx-auto">
                <div className="flex flex-1">
                  <div className="w-1/2 bg-blue-500 text-white flex flex-col items-center justify-center p-4 rounded-l-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white"
                    />
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                  </div>
                  <div className="w-1/2 bg-white text-gray-900 p-4 rounded-r-lg flex flex-col justify-between">
                    <h4 className="text-md font-semibold">{member.position}</h4>
                    <p className="text-gray-700 mb-4">{member.description}</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                      Know More
                    </button>
                  </div>
                </div>
                <div className="flex-grow"></div>{' '}
                {/* Ensures equal height for both sections */}
>>>>>>> 8db5cde1124f36b515bd386ef793dbc0abdf7995
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CompaniesSlider;
