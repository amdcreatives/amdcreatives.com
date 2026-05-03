
const services = [
  {
    title: "YouTube Video Editing",
    description: "From raw footage to fully polished videos intros, transitions, captions, and callouts that keep viewers watching.",
    icon: (
      <div className="w-12 h-12 rounded-full border-2 border-pink-500/50 flex items-center justify-center text-pink-500">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
      </div>
    )
  },
  {
    title: "Social Media Reels & Shorts",
    description: "High impact edits for Instagram, TikTok, and YouTube Shorts designed to grab attention fast and boost engagement.",
    icon: (
      <div className="grid grid-cols-2 gap-1 w-10 h-10">
        <div className="bg-purple-400 rounded-sm"></div>
        <div className="bg-purple-600 rounded-full"></div>
        <div className="bg-pink-500 rounded-full"></div>
        <div className="bg-pink-300 rounded-sm"></div>
      </div>
    )
  },
  {
    title: "Corporate & Promo Videos",
    description: "Clean, branded video edits for presentations, product launches, or marketing campaigns that reflect your professional firm.",
    icon: (
      <div className="w-10 h-10 bg-linear-to-br from-pink-400 to-purple-600 rounded-tr-xl rounded-bl-xl"></div>
    )
  },
  {
    title: "Podcast & Interview Edits",
    description: "Multi cam syncing, noise removal, cutdowns, and highlights optimized for both video and audio platforms.",
    icon: (
      <div className="flex gap-1 items-end">
        <div className="w-3 h-6 bg-pink-400 rounded-full"></div>
        <div className="w-3 h-10 bg-purple-500 rounded-full"></div>
        <div className="w-3 h-4 bg-pink-600 rounded-full"></div>
      </div>
    )
  },
  {
    title: "Ad & Sales Video Editing",
    description: "Performance focused editing for Facebook, YouTube, and Google ads built to convert with strong hooks and CTAs.",
    icon: (
      <div className="w-10 h-10 border-2 border-pink-400 rounded-full flex items-center justify-center overflow-hidden">
        <div className="w-full h-1/2 bg-pink-500 self-start"></div>
      </div>
    )
  },
  {
    title: "Course & Tutorial Editing",
    description: "Structured, distraction free edits that make learning smooth and professional for your students or audience.",
    icon: (
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 border-2 border-purple-400 rotate-45"></div>
        <div className="absolute inset-0 flex items-center justify-center text-pink-400 text-2xl font-bold">*</div>
      </div>
    )
  }
];

export default function CoreServices() {
  return (
    <section id="creativesService" className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-16 tracking-tight">Our Core Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-10 rounded-4xl bg-[#111111] border border-white/5 hover:border-pink-500/20 transition-all duration-500"
            >
              <div className="mb-8 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-white text-xl font-bold mb-4 tracking-wide">
                {service.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
