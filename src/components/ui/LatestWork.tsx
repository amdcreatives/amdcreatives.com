"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X, Languages } from "lucide-react"; // Added Languages icon

const categories = ["Ad Creatives & VSL", "Shorts", "YouTube Videos", "SaaS Videos", "Podcast"];

const projects = [
  { 
    id: 1, 
    title: "Neck Massager",
    category: "Ad Creatives & VSL",
    image: "/videos/neck-massager.webp",
    video: "/videos/neck-massager.webm",
    language: "en"
  },
  { 
    id: 2, 
    title: "Wedding Services",
    category: "SaaS Videos", 
    image: "/videos/wedding-services.webp",
    video: "/videos/wedding-services.webm",
    language: "en"
  },
  { 
    id: 3, 
    title: "Launch Pointe",
    category: "Shorts",
    image: "/videos/launch-pointe.webp",
    video: "/videos/launch-pointe.webm",
    language: "en"
  },
  { 
    id: 4, 
    title: "Health Concern",
    category: "Podcast",
    image: "/videos/health-concern.webp",
    video: "/videos/health-concern.webm",
    language: "en"
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Ad Creatives & VSL");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredProjects = projects.filter((p) => p.category === activeTab);

  return (
    <section id="creativesPortfolio" className="bg-[#0a0a0a] py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          Our Latest Work
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border hover:cursor-pointer ${
                activeTab === cat
                  ? "bg-white/10 border-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  : "border-transparent text-gray-500 hover:text-gray-300 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedVideo(project.video)}
              className="group relative aspect-video rounded-2xl sm:rounded-4xl overflow-hidden border border-white/5 bg-gray-900 cursor-pointer"
            >
              {/* --- NEW: Language Tag (Top Right) --- */}
              <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-30 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                <Languages className="w-4 h-4 text-blue-400" />
                <p className="text-white text-xs font-bold uppercase tracking-wider">{project.language}</p>
              </div>

              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-opacity duration-500 group-hover:opacity-0 z-10 text-center"
              />

              <video
                src={project.video}
                loop
                muted
                playsInline
                preload="metadata"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="absolute inset-0 flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                  <Play className="text-white fill-current w-6 h-6 ml-1" />
                </div>
              </div>

              {/* Title Tag (Bottom Left) */}
              <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-30 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <p className="text-white font-medium text-sm">{project.title}</p>
              </div>

              <div className="absolute inset-0 rounded-2xl sm:rounded-4xl border-2 border-transparent group-hover:border-blue-500/30 transition-colors pointer-events-none z-40" />
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL WITH BLURRED BACKGROUND --- */}
      {selectedVideo && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-all"
            onClick={() => setSelectedVideo(null)}
          />
          
          <div className="relative w-full h-full lg:h-auto max-w-5xl max-h-3/4 lg:aspect-video bg-[#111] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-110 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-all border hover:cursor-pointer border-white/10"
            >
              <X size={20} />
            </button>

            {/* Added key attribute to force video re-render when changing source */}
            <video 
              key={selectedVideo}
              controls 
              autoPlay 
              playsInline
              className="w-full h-full object-contain"
            >
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
