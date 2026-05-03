import { ChartNoAxesCombined, SatelliteDish, UserPlus } from "lucide-react";
import Button from "./Button";

export default function AboutSection() {
  return (
    <section id="creativesAbout" className="relative bg-[#0a0a0a] py-24 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <h2 className="text-center text-white text-4xl md:text-5xl font-semibold mb-20 tracking-tight">
          We are Amd Creatives
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          {/* Left Column: Stats */}
          <div className="space-y-12">
            <StatItem
              icon={<ChartNoAxesCombined size={40} />}
              percentage="200%" 
              label="More Engagement" 
              description="Every video is crafted with a clear marketing goal."
            />
            <StatItem 
              icon={<SatelliteDish size={40} />}
              percentage="10%" 
              label="More Reach" 
              description="Tailored for YouTube, Reels, TikTok, and more."
            />
            <StatItem 
              icon={<UserPlus size={40} />}
              percentage="55%" 
              label="More Leads" 
              description="From raw clips to ready-to-post edits."
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start gap-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">High-Impact Video Content. Built to Grow Your Brand.</h3>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-xl">
              <p>At Amd Creatives, we specialize in strategic editing for YouTube, Reels, and TikTok, transforming raw footage into high-converting assets through expert storytelling and data-driven marketing.</p>
              <p>We blend storytelling, strategy, and speed to deliver done-for-you content systems that perform so you can stay focused on running your business while we handle the editing magic behind the scenes.</p>
            </div>

            <Button href="#creativesContact" variant="primary" size="lg">Contact us</Button>
          </div>

        </div>
      </div>
    </section>
  );
}

// Sub-component for clean mapping/reusability
function StatItem({ percentage, label, description, icon }: { percentage: string, label: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="group relative pb-8 border-b border-white/10 last:border-0">
      {/* Hover Gradient Line Effect */}
      <div className="absolute -bottom-px left-0 w-0 h-px bg-linear-to-r from-blue-600 to-transparent group-hover:w-full transition-all duration-700" />
      
      <div className="flex items-center gap-6">
        {/* Placeholder for Icon - Use Lucide or SVG */}
        <div className="w-20 h-20 shrink-0 border border-white/20 rounded-md flex items-center justify-center text-gray-400">
          {icon}
        </div>

        <div>
          <div className="flex items-baseline gap-3 mb-1">
            <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
              {percentage}
            </span>
            <span className="text-sm md:text-base font-medium text-gray-400">
              {label}
            </span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
