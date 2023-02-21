import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainBanner from '../components/MainBanner';
import SliderReviews from '../components/SliderReviews';
function Home() {
  return (
    <div>
        <Header />
        <MainBanner/>
        <SliderReviews/>
        <Footer/>
    </div>
  )
}

export default Home