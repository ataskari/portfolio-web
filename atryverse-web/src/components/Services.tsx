"use client";

import React from "react";
import { Code2, Sparkles, Database, Layers } from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
  const services = [
    {
      id: "01",
      title: "AI Integration",
      desc: "Seamlessly connecting LLMs and machine learning models into your existing applications to automate workflows and create magical user experiences.",
      icon: <Sparkles className="text-blue-500" size={20} />,
      bg: "bg-blue-50"
    },
    {
      id: "02",
      title: "Full-Stack Dev",
      desc: "Building reliable, scalable web applications from the ground up using modern frameworks like Next.js, React, and robust backend architectures.",
      icon: <Code2 className="text-blue-500" size={20} />,
      bg: "bg-blue-50"
    },
    {
      id: "03",
      title: "Data Engineering",
      desc: "Designing secure, high-performance data pipelines and vector databases to feed clean, context-rich data into intelligent systems.",
      icon: <Database className="text-blue-500" size={20} />,
      bg: "bg-blue-50"
    },
    {
      id: "04",
      title: "Product Strategy",
      desc: "Translating ambiguous business requirements into clear, technical roadmaps focused on delivering scalable, AI-driven MVPs fast.",
      icon: <Layers className="text-blue-500" size={20} />,
      bg: "bg-blue-50"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="px-8 max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-start"
    >
      <div className="w-full lg:w-[300px] shrink-0 flex flex-col justify-start pt-2">
        <h2 className="text-5xl font-medium tracking-tight leading-tight">
          How Can I<br />Assist You?
        </h2>
      </div>
      
      <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative">
        {services.map((srv) => (
          <div key={srv.id} className="bg-white rounded-4xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between h-full min-h-[250px] transition-transform hover:-translate-y-1">
            <div className="flex items-start gap-4">
               <div className={`p-3 rounded-2xl ${srv.bg}`}>
                 {srv.icon}
               </div>
               <p className="text-gray-500 text-sm leading-relaxed flex-1">
                 {srv.desc}
               </p>
            </div>
            
            <div className="flex items-end justify-between mt-8">
              <h3 className="font-bold text-xl">{srv.title}</h3>
              <span className="text-gray-400 font-medium">{srv.id}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
