import React from 'react';
import './App.css';
import HeroPage from './sections/HeroPage';
import AboutPage from './sections/AboutPage';
import LatestArticles from './sections/LatestArticles';
import FooterPage from './sections/FooterPage';

function App() {
  return (
    <main className="bg">
      <section>
        <HeroPage />
      </section>
      <section className="bg-gray">
        <AboutPage />
      </section>
      <section>
        <LatestArticles />
      </section>
      <section className="bg-gray">
        <FooterPage />
      </section>
    </main>
  );
}

export default App;
