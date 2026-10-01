import React from 'react';

export default function AnnouncementBanner() {
  return (
    <div className="w-full bg-[#f8e3e6] py-3 px-4 text-center">
      <p className="font-serif text-sm tracking-wide text-[#70293d]">
        New arrivals every Monday.{' '}
        <a
          href="#"
          className="underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          Get what’s new.
        </a>
      </p>
    </div>
  );
}