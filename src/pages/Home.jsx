import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainBanner from '../components/MainBanner';
import SliderReviews from '../components/SliderReviews';
import Services from '../components/Services';
import SliderTeam from '../components/SliderTeam';

function Home() {
  return (
    <div>
        <Header />
        <MainBanner/>
        <SliderReviews/>
        <SliderTeam/>
        <Services/>
        <Footer/>
    </div>
  )
}

export default Home