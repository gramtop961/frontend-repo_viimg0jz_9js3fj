import React from 'react';
import Hero from './components/Hero';
import WishCard from './components/WishCard';
import HiddenGallery from './components/HiddenGallery';
import FooterNote from './components/FooterNote';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-violet-50 text-rose-900">
      <Hero name="Crush" />
      <main className="space-y-10 pb-12">
        <WishCard />
        <HiddenGallery />
      </main>
      <FooterNote from="Your Secret Admirer" />
    </div>
  );
}

export default App;
