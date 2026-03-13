"use client";

import React from "react";
import { ArrowRight, Linkedin, Github, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  const [sequenceKey, setSequenceKey] = React.useState(0);

  React.useEffect(() => {
    // Restart the animation sequence every 7 seconds
    const interval = setInterval(() => {
      setSequenceKey(prev => prev + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="px-8 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center"
    >
      {/* Left Column */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-8 lg:col-span-5 w-full">
        <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Available for work
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-none lg:leading-[0.9]">
          Hi, I&apos;m an<br />
          <span className="text-blue-600">AI product</span><br />
          engineer
        </h1>

        <p className="text-gray-500 max-w-md text-base sm:text-lg leading-relaxed">
          I build intelligent applications by seamlessly integrating cutting-edge AI into scalable product experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-2 w-full sm:w-auto">
          <a href="/resume.pdf" target="_blank" className="inline-flex justify-center bg-[#1a1a1a] text-white px-8 py-4 w-fit sm:w-auto rounded-full font-medium hover:bg-blue-600 transition-colors items-center gap-2 group">
            Download Resume
            <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
          </a>

          <div className="flex gap-3">
            {[
              { icon: Linkedin, color: "text-[#0A66C2]", link: "#linkedin" },
              { icon: Github, color: "text-[#181717]", link: "#github" },
              { icon: Mail, color: "text-[#EA4335]", link: "#email" },
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.link} 
                className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-gray-100 group"
              >
                 <item.icon size={20} className={`${item.color} group-hover:scale-110 transition-transform`} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Mock IDE */}
      <div className="h-[400px] lg:h-[550px] relative w-full lg:col-span-7 flex items-center justify-center mt-8 lg:mt-0">
        
        {/* Code Terminal Abstract Element */}
        <div className="w-full h-full bg-[#0a0a0a] rounded-4xl relative overflow-hidden shadow-2xl border border-gray-800 flex flex-col group">
          
          {/* Mock Window Header */}
          <div className="h-12 w-full bg-[#111111] border-b border-gray-800 flex items-center px-4 md:px-6 gap-2 shrink-0">
            <div className="w-3 h-3 rounded-full bg-gray-700 group-hover:bg-red-500 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-gray-700 group-hover:bg-yellow-500 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-gray-700 group-hover:bg-green-500 transition-colors"></div>
            <span className="ml-auto text-gray-500 text-xs font-mono font-medium">~/ai_product_engine</span>
          </div>
          
          {/* Animated Code Lines */}
          <div key={sequenceKey} className="p-6 md:p-8 flex flex-col gap-3 md:gap-4 font-mono text-sm md:text-base overflow-hidden relative w-full h-full">
            <div className="flex gap-2">
              <span className="text-blue-500 font-bold">~</span>
              <span className="text-white">./initialize_agent.sh</span>
            </div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5, duration: 0.5 }}
               className="text-gray-400 mt-2"
            >
               <span className="text-purple-400">import</span> {`{ CoreModel, Agent }`} <span className="text-purple-400">from</span> &apos;@ai/core&apos;;
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1, duration: 0.5 }}
               className="text-gray-400"
            >
               <span className="text-blue-400">const</span> system = <span className="text-blue-400">new</span> Agent({`{`}<br/>
               <span className="ml-4 md:ml-6">model: CoreModel.GPT5,</span><br/>
               <span className="ml-4 md:ml-6">memory: <span className="text-orange-400">true</span>,</span><br/>
               <span className="ml-4 md:ml-6">tools: [<span className="text-green-400">&apos;search&apos;</span>, <span className="text-green-400">&apos;execute&apos;</span>]</span><br/>
               {`}`});
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1.5, duration: 0.5 }}
               className="text-gray-400 mt-2"
            >
               <span className="text-yellow-400">await</span> system.start();
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, scale: [1, 1.02, 1] }}
               transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
               className="text-green-400 mt-auto flex items-center gap-2 font-bold bg-green-500/10 w-fit px-4 py-2 rounded-xl border border-green-500/20"
            >
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               System optimal and ready.
            </motion.div>
            
            {/* Soft Ambient Glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
          </div>
        </div>
        
      </div>
    </motion.section>
  );
}
