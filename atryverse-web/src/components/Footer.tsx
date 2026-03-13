import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#fafafa] py-8 px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg tracking-tight uppercase text-gray-800">ATRYVERSE © {new Date().getFullYear()}</span>
        </div>
        
        <div className="flex items-center gap-6 font-medium text-sm text-gray-500">
          <Link href="/#services" className="hover:text-black transition-colors">Services</Link>
          <Link href="/#work" className="hover:text-black transition-colors">Projects</Link>
          <Link href="/#contact" className="hover:text-black transition-colors">Contact</Link>
        </div>
        
        <Link href="/#hero" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-black">
          <ArrowUp size={20} />
        </Link>
      </div>
    </footer>
  );
}
