import React from 'react';
import './global.css';
import HeroPage from './sections/HeroPage';
import AboutPage from './sections/AboutPage';
import LatestArticles from './sections/LatestArticles';
import FooterPage from './sections/FooterPage';

function App() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="w-full">
        <HeroPage />
      </section>
      <section className="bg-[#F0F1F7] w-full md:mt-24">
        <AboutPage />
      </section>
      <section className="w-full md:mt-5">
        <LatestArticles />
      </section>
      <FooterPage />
    </main>
  );
}

export default App;
