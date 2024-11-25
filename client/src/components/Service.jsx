import React from 'react';
import { FaShoppingCart, FaShippingFast, FaSyncAlt } from 'react-icons/fa';

const services = [
  {
    title: 'E-Commerce Integration',
    description:
      'Seamlessly integrate your store with eCommerce platforms like Shopify, eBay, Etsy, and more for efficient order management and fulfillment.',
    icon: <FaShoppingCart className="text-4xl text-purple-500" />,
  },
  {
    title: 'Fast Shipping & Fulfillment',
    description:
      'Leverage Amazon’s Multi-Channel Fulfillment service to ensure fast and reliable shipping for orders from any sales channel, including Shopify, eBay, and your website.',
    icon: <FaShippingFast className="text-4xl text-red-500" />,
  },
  {
    title: 'Inventory Synchronization',
    description:
      'Automatically sync your inventory levels between your online store and Amazon’s fulfillment centers, ensuring accurate stock management across all sales channels.',
    icon: <FaSyncAlt className="text-4xl text-green-500" />,
  },
];

const Service = () => {
  return (
    <section className="py-10 px-4 md:px-20 bg-gray-100">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-gray-800">
        Our E-Commerce Services
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 max-w-xs text-center"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-700 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
