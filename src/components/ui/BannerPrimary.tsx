import Image from 'next/image';
import Button from './Button';
import { Play } from 'lucide-react';

const avatars = [
  "/avatars/avatar-1.webp", 
  "/avatars/avatar-2.webp", 
  "/avatars/avatar-3.webp"
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Glow Gradient */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-8">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <div 
                  key={i} 
                  className="relative w-7 h-7 rounded-full border-2 border-[#0a0a0a] overflow-hidden bg-gray-800"
                >
                  <Image
                    src={src}
                    alt={`User ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              Loved by <span className="text-blue-400 font-semibold">+50</span> users worldwide
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">Get More Leads with <span className="text-gray-400">Pro Video Content</span></h1>

          <p className="text-lg text-gray-400 max-w-lg leading-relaxed">Amd Creatives is a professional video production agency that crafts high-impact, organic content systems designed to scale brands and grow your audience.</p>

          <div className="flex flex-wrap gap-4">
            <Button href="https://wa.me/+8801511658200" variant="primary" size="lg">Book A Call</Button>
            <Button href="#creativesPortfolio" variant="outline" size="lg">View Portfolio</Button>
          </div>
        </div>

        {/* Right Image/Video Container */}
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-600/20 rounded-4xl blur-2xl group-hover:bg-blue-600/30 transition duration-500" />
          <div className="relative aspect-square overflow-hidden rounded-4xl border border-white/10">
            <Image
              src="/shooting-video.jpg" // Add your image to public/ folder
              alt="Professional video production team on set"
              fill
              className="object-cover"
              priority
            />
            {/* Optional Overlay Play Button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition">
               <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white">
                  <Play />
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
