import React from 'react';
import './global.css';
import HeroPage from './sections/HeroPage';
import AboutPage from './sections/AboutPage';
import LatestArticles from './sections/LatestArticles';
import FooterPage from './sections/FooterPage';

function App() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section>
        <HeroPage />
      </section>
      <section className="bg-[#f8f8f8]">
        <AboutPage />
      </section>
      <section>
        <LatestArticles />
      </section>
      <FooterPage />
    </main>
  );
}

export default App;
