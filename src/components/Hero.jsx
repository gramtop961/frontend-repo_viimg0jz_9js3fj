import React from 'react';

function Hero({ name = 'My Favorite Person' }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-violet-100" />
      <div className="relative mx-auto max-w-3xl text-center py-16 px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-rose-600 drop-shadow-sm">
          Happy Birthday, {name}! 🎉
        </h1>
        <p className="mt-4 text-base sm:text-lg text-rose-700/80">
          Wishing you a day as lovely as your smile and as magical as your laugh.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-2 shadow">
          <span className="text-sm text-rose-600">Open this when you need a smile</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
