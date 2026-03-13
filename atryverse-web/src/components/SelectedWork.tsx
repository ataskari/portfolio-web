"use client";

import React, { useState } from "react";
import { projectsData, Project } from "@/lib/mockData";
import { X, ExternalLink, Github, PlayCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function SelectedWork() {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Derive unique categories from exactly what's available
  const allTags = Array.from(new Set(projectsData.flatMap(p => p.tags)));
  const filters = ["ALL", ...allTags];

  // Apply filter and sort by date (year) descending
  const filteredProjects = projectsData.filter(p => 
    activeFilter === "ALL" ? true : p.tags.includes(activeFilter)
  ).sort((a, b) => Number(b.year) - Number(a.year));

  // Apply limits
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4); // showing top 4 by default

  return (
    <>
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="px-8 max-w-[1400px] mx-auto w-full pb-24"
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative items-start w-full">
          {/* Sidebar */}
          <div className="w-full lg:w-[250px] shrink-0 flex flex-col gap-6 md:gap-8 items-start relative lg:sticky lg:top-32 z-10 self-start">
            <h2 className="text-5xl font-medium tracking-tight leading-none">
              Selected<br />work
            </h2>
            
            {/* Filter Pills */}
            <div className="flex flex-col gap-2 w-full">
              {filters.map(filter => (
                <button 
                  key={filter}
                  onClick={() => { setActiveFilter(filter); setShowAll(false); }}
                  className={`text-left px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
                    activeFilter === filter 
                      ? "bg-[#1a1a1a] text-white" 
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {filteredProjects.length > 4 && (
              <button 
                onClick={() => setShowAll(!showAll)}
                className="bg-white border-2 border-[#1a1a1a] text-[#1a1a1a] px-6 py-2.5 rounded-full font-bold hover:bg-[#1a1a1a] hover:text-white transition-colors text-sm w-full mt-4"
              >
                {showAll ? "Show Less" : "See All Projects"}
              </button>
            )}
          </div>

          {/* Gallery Grid */}
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* AnimatePresence allows animating components as they appear/disappear */}
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((work) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={work.id} 
                  className="bg-white p-4 rounded-4xl border border-gray-100 shadow-sm hover:shadow-md flex flex-col gap-4 cursor-pointer group w-full"
                  onClick={() => setSelectedProject(work)}
                >
                  {/* Image Container */}
                  <div className={`w-full rounded-3xl overflow-hidden ${work.imageBg} aspect-4/3 relative transition-transform duration-500 group-hover:scale-[0.98]`}>
                     <div className="absolute inset-0 flex items-center justify-center text-white/50 font-bold uppercase tracking-widest text-center px-4">
                       {work.title} Image preview
                     </div>
                  </div>
                  
                  {/* Meta */}
                  <div className="flex flex-col gap-3 px-2">
                    <div className="flex items-center justify-between uppercase text-sm font-bold tracking-wider">
                      <h3>{work.title}</h3>
                      <span className="text-gray-500">{work.year}</span>
                    </div>
                    
                    <div className="flex gap-2 flex-wrap">
                      {work.tags.map(tag => (
                        <span key={tag} className="bg-[#f1f5f9] text-[#0f172a] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {visibleProjects.length === 0 && (
               <div className="col-span-12 text-center py-24 text-gray-400 font-medium">
                 No projects found for {activeFilter}
               </div>
            )}
          </div>
        </div>
      </motion.section>

      {/* Interactive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
              className="bg-white rounded-4xl w-full max-w-6xl p-8 lg:p-12 relative overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2 gap-12">
                <div className={`rounded-2xl ${selectedProject.imageBg} h-64 md:h-full min-h-[300px] flex items-center justify-center text-white font-bold opacity-80 uppercase tracking-widest`}>
                  Media Preview
                </div>
                
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                     {selectedProject.tags.map(tag => (
                        <span key={tag} className="bg-[#f1f5f9] text-[#0f172a] text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                          {tag}
                        </span>
                     ))}
                  </div>
                  
                  <h3 className="text-4xl font-bold tracking-tight mb-2">{selectedProject.title}</h3>
                  <p className="text-gray-500 mb-8 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  <div className="flex gap-4">
                    <button className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full font-medium hover:bg-black/80 transition-colors flex items-center gap-2 flex-1 justify-center">
                      <PlayCircle size={18} /> Watch Demo
                    </button>
                    <button className="bg-gray-100 text-[#1a1a1a] hover:bg-gray-200 px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 justify-center">
                      <Github size={18} /> Code
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
