import React from 'react';
<<<<<<< HEAD

const PricingPage = () => {
  const pricingPlans = [
    {
      title: 'Starter Plan',
      price: '₹999',
      tokens: '50 API KEYS',
      features: [
        'Basic eCommerce platform integration (Shopify, WooCommerce, etc.)',
        'Limited Multi-Channel Fulfillment (MCF) usage',
        'Up to 50 orders/month',
        'Email support',
      ],
      bgColor: 'bg-blue-50', // Light blue background
    },
    {
      title: 'Growth Plan',
      price: '₹2999',
      tokens: '100 API KEYS',
      features: [
        'Full integration with multiple eCommerce platforms (Shopify, eBay, etc.)',
        'Higher token limits and MCF usage',
        'Up to 500 orders/month',
        'Priority email & chat support',
        'Basic analytics and reports',
      ],
      bgColor: 'bg-green-50', // Light green background
    },
    {
      title: 'Enterprise Plan',
      price: '₹7999',
      tokens: '400 API KEYS',
      features: [
        'Unlimited eCommerce platform integrations',
        'Unlimited Multi-Channel Fulfillment (MCF) usage',
        'Up to 5000 orders/month',
        'Premium support (24/7)',
        'Advanced analytics and custom reports',
        'Dedicated account manager',
      ],
      bgColor: 'bg-yellow-50', // Light yellow background
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-5xl font-bold text-white mb-12 text-center">
        Choose Your Plan
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`${plan.bgColor} border border-gray-200 rounded-lg shadow-lg p-8 w-80 transform transition-transform hover:scale-105 hover:shadow-2xl`}
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              {plan.title}
            </h2>
            <p className="text-4xl font-bold text-gray-800 mb-2">
              {plan.price}
            </p>
            <p className="text-lg text-gray-600 mb-6">{plan.tokens}</p>
            <ul className="text-left mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-700 text-base mb-2">
                  - {feature}
                </li>
              ))}
            </ul>
            <button className="bg-blue-600 text-white rounded-md px-6 py-3 font-medium hover:bg-blue-800 transition duration-300">
              Buy Now
            </button>
          </div>
        ))}
=======
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import person1 from '../images/albert.jpg';
import person2 from '../images/isasac.jpg';
import person3 from '../images/kohli.jpg';

const testimonials = [
  {
    name: 'Albert Einstein',
    quote: 'I got more knowledge by eating the suggested recipes of this site',
    image: person1,
  },
  {
    name: 'Isaac Newton',
    quote:
      'I have invented gravity because this site gave me a recipe called apple juice',
    image: person2,
  },
  {
    name: 'Virat Kohli',
    quote:
      'I follow my diet from taking help from my fan boy site that is ChefGuru',
    image: person3,
  },
  {
    name: 'Albert Einstein',
    quote: 'I got more knowledge by eating the suggested recipes of this site',
    image: person1,
  },
  {
    name: 'Virat Kohli',
    quote:
      'I follow my diet from taking help from my fan boy site that is ChefGuru',
    image: person3,
  },
  {
    name: 'Isaac Newton',
    quote:
      'I have invented gravity because this site gave me a recipe called apple juice',
    image: person2,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="py-10 px-4 md:px-20 bg-cream-100">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-black-500">
        Heart From our Happy Stars
      </h2>
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs mx-auto relative">
                <FaQuoteLeft className="absolute top-0 left-0 text-gray-200 text-6xl opacity-25 transform -translate-x-4 -translate-y-4" />
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 text-center">
                  {testimonial.name}
                </h3>
                <p className="text-gray-700 text-center mt-2">
                  {testimonial.quote}
                </p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
>>>>>>> 8db5cde1124f36b515bd386ef793dbc0abdf7995
      </div>
    </div>
  );
};

export default PricingPage;
