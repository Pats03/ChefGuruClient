import React from 'react';
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonialas'; // Corrected typo from Testimonialas
import Team from '../components/Team';
import Service from '../components/Service';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Home = () => {
  const titles = [
    'Powering your e-commerce with real-time inventory and order tracking from Shopify to Amazon MCF',
    'Effortless order fulfillment and inventory management – Synkro integrates Shopify and Amazon MCF for you.',
     'Connecting Shopify and Amazon MCF for smarter, faster order processing.',
     'Let Synkro handle the integration between Shopify and Amazon MCF.'
  ];

  return (
    <div>
      <Navbar />
      <main className="w-full flex flex-col pt-23 bg-cream">
        <Header
          titles={titles} // Changed from title to titles
          type="home"
        />
        <section
          id="gallery"
          className="md:max-w-[1440px] mx-auto px-4 md:px-20"
        >
          <Gallery />
        </section>
        <section
          id="testimonials"
          className="md:max-w-[1440px] mx-auto px-4 md:px-20"
        >
          <Testimonials />
        </section>
        <section id="team" className="md:max-w-[1440px] mx-auto px-4 md:px-20">
          <Team />
        </section>
        <div className="my-12"></div> {/* Added space here */}
        <section
          id="service"
          className="md:max-w-[1440px] mx-auto px-4 md:px-20"
        >
          <Service />
        </section>
        <div className="my-12"></div> {/* Added space here */}
        <Footer />
      </main>
    </div>
  );
};

export default Home;
