import React from 'react';
import { inventory, procesreturns, products, orders } from '../images';

const features = [
  {
    title: 'Real-Time Inventory Sync',
    description:
      'Keep your inventory up to date instantly – Synkro ensures seamless real-time synchronization across all your channels.',
    image: inventory,
  },
  {
    title: 'Product Returns Processing',
    description:
      'Simplify returns with Synkro’s automated processing system – Hassle-free returns management for your peace of mind.',
    image: procesreturns,
  },
  {
    title: 'Product Management',
    description:
      'Effortlessly manage your product listings and updates with Synkro – Real-time sync between your store and Amazon MCF.',
    image: products,
  },
  {
    title: 'Order Management',
    description:
      'Track every order in real-time with Synkro – Complete visibility and control from checkout to delivery.',
    image: orders,
  },
];

const FeaturesPage = () => {
  return (
    <div className="py-10 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Features</h2>\
      <p className="text-3xl font-bold text-white mb-8 text-center">
        Discover the powerful features of SYNKRO
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-6"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-20 h-20 rounded-md bg-gray-200 mb-4"
            />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-500 text-sm mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
