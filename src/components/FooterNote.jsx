import React from 'react';

function FooterNote({ from = 'Someone who cares' }) {
  return (
    <footer className="mx-auto max-w-3xl px-6 py-10 text-center text-rose-700/80">
      <p>
        With love,
        <span className="ml-2 font-semibold text-rose-700">{from}</span>
      </p>
      <p className="mt-2 text-xs">Made with a sprinkle of courage and a lot of admiration ✨</p>
    </footer>
  );
}

export default FooterNote;
