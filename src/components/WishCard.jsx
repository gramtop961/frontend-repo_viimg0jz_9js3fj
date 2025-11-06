import React from 'react';

function WishCard() {
  return (
    <section className="mx-auto max-w-3xl px-6">
      <div className="rounded-2xl bg-white shadow-xl ring-1 ring-rose-100/60 overflow-hidden">
        <div className="p-6 sm:p-8">
          <p className="text-lg leading-relaxed text-rose-900/90">
            On your special day, I just want to say: you make the ordinary feel
            extraordinary. May this year bring you small joys, bold adventures,
            and moments that feel like sunshine.
          </p>
          <p className="mt-4 text-rose-700">
            P.S. I might have a tiny crush on you. Okay, not that tiny. 💗
          </p>
        </div>
      </div>
    </section>
  );
}

export default WishCard;
