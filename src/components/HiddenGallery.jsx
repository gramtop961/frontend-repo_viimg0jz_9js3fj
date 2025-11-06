import React, { useEffect, useMemo, useState } from 'react';

function HiddenGallery() {
  const [isBirthday, setIsBirthday] = useState(false);
  const [revealed, setRevealed] = useState(false);

  // Configure the birthday here (MM-DD)
  const birthdayKey = 'CRUSH_BDAY_REVEAL_V1';
  const todayKey = new Date().toLocaleDateString('en-CA').slice(5); // MM-DD
  const targetDay = '12-25'; // change to their birthday month-day

  useEffect(() => {
    // Allow reveal only on the birthday or if already revealed once
    const isTarget = todayKey === targetDay;
    const stored = localStorage.getItem(birthdayKey) === 'true';
    setIsBirthday(isTarget || stored);
    setRevealed(stored);
  }, [todayKey]);

  const images = useMemo(
    () => [
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520975922284-8b456906c813?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop',
    ],
    []
  );

  const handleReveal = () => {
    setRevealed(true);
    localStorage.setItem(birthdayKey, 'true');
  };

  return (
    <section className="mx-auto max-w-4xl px-6">
      <div className="rounded-2xl border border-rose-100 bg-rose-50/50 p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold text-rose-700">
            Secret Memory Stash
          </h3>
          {isBirthday ? (
            <button
              onClick={handleReveal}
              className="rounded-full bg-rose-600 px-5 py-2 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-400"
            >
              {revealed ? 'Re-show' : 'Reveal'}
            </button>
          ) : (
            <span className="text-xs text-rose-600/70">
              Hidden until their birthday ✨
            </span>
          )}
        </div>

        {revealed && (
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl bg-white shadow ring-1 ring-rose-100"
              >
                <img
                  src={src}
                  alt={`Memory ${idx + 1}`}
                  className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent" />
              </div>
            ))}
          </div>
        )}

        {!revealed && (
          <p className="mt-4 text-sm text-rose-700/80">
            A few photos are tucked away here. Come back on their birthday to
            unveil them.
          </p>
        )}
      </div>
    </section>
  );
}

export default HiddenGallery;
