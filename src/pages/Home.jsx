import React from 'react';
import CardReview from '../components/CardReview';
import NavBar from '../components/Header';
import MainBanner from '../components/MainBanner';

function Home() {
  return (
    <div>
        <NavBar />
        <MainBanner/>
        <CardReview />
    </div>
  )
}

export default Home