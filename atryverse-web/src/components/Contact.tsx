"use client";

import React from "react";
import { Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="px-8 max-w-4xl mx-auto w-full flex flex-col items-center text-center"
    >
      <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
        Let&apos;s build<br />something great.
      </h2>
      <p className="text-lg text-gray-500 mb-16 max-w-2xl">
        Whether you have a specific project in mind or just want to chat about product design, I&apos;d love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
        {/* Email Card */}
        <div className="bg-white p-8 rounded-4xl border border-gray-100 shadow-sm flex flex-col gap-4 group hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Mail size={24} />
          </div>
          <h3 className="text-2xl font-bold">Email me</h3>
          <p className="text-gray-500">I usually respond within 24 hours.</p>
          <a href="mailto:atryverse@gmail.com" className="text-lg font-bold text-blue-600 mt-auto hover:text-blue-700 transition-colors">
            atryverse@gmail.com
          </a>
        </div>

        {/* Social Card */}
        <div className="bg-[#1a1a1a] text-white p-8 rounded-4xl shadow-sm flex flex-col gap-4 group hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <MessageSquare size={24} />
          </div>
          <h3 className="text-2xl font-bold">Book a call</h3>
          <p className="text-gray-400">Schedule a 30-minute discovery chat via Calendly.</p>
          <a href="#" className="bg-white text-black px-6 py-3 rounded-full font-bold w-fit mt-auto hover:bg-gray-200 transition-colors">
            Find a time
          </a>
        </div>
      </div>
    </motion.section>
  );
}
