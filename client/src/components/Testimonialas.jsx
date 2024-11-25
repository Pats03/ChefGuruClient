import React from 'react';

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
      </div>
    </div>
  );
};

export default PricingPage;
