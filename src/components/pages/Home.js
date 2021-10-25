import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Partners from '../Partnercopy';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      {/* <Partners/> */}
      <Footer />
    </>
  );
}

export default Home;
