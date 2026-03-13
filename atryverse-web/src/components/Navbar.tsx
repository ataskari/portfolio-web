import React from "react";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="pt-6 px-4 md:px-8 w-full flex justify-center fixed top-0 z-50">
      <nav aria-label="Main navigation" className="flex items-center justify-between py-2 pl-4 pr-2 bg-white/80 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 rounded-full max-w-[1400px] w-full">
        <Link href="/#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform">
            A
          </div>
          <span className="font-bold text-lg tracking-tight uppercase group-hover:text-gray-700 transition-colors">ATRYVERSE</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
          <Link href="/#services" className="hover:text-black transition-colors">Services</Link>
          <Link href="/#work" className="hover:text-black transition-colors">Projects</Link>
          <Link href="/#contact" className="hover:text-black transition-colors">Contact</Link>
        </div>
        <Link href="/#contact" className="bg-[#1a1a1a] text-white px-7 py-3 rounded-full font-medium hover:bg-black/80 transition-colors text-sm shadow-sm group">
          <span className="group-hover:-translate-y-0.5 transition-transform inline-block">Book a call</span>
        </Link>
      </nav>
    </div>
  );
}
