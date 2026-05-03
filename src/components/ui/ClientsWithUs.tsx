import Button from "./Button";

const steps = [
  {
    title: "Ideation & Strategy",
    description: "We take your raw ideas and refine them through expert analysis, ensuring every concept aligns with proven market strategies and audience psychology."
  },
  {
    title: "Writing Content",
    description: "We will give you proven script frameworks that the biggest creators and companies use."
  },
  {
    title: "Editing the Video",
    description: "We transform footage into high-quality videos using advanced editing techniques, motion graphics, and strategic pacing that hold attention."
  },
  {
    title: "Creating thumbnail",
    description: "We analyze other thumbnails in your niche and are able to replicate best performing results."
  },
  {
    title: "Publishing & Performance",
    description: "Once your video is ready, we guide you on optimal posting strategies across platforms, making sure your content gets seen."
  }
];

export default function ProcessSection() {
  return (
    <section id="creativesProcess" className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Static Content */}
        <div className="lg:sticky lg:top-32 space-y-8">
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">Our Streamlined Process</h2>
          <p className="text-gray-400 text-lg max-w-md">At Amd Creatives, we follow a streamlined yet collaborative process to craft high-converting video content that drives real business growth.</p>
          <Button href="#creativesContact" variant="primary" size="lg">Contact us</Button>
        </div>

        {/* Right Side: Step Cards */}
        <div className="relative pl-8 border-l border-white/10 space-y-4">
          {/* Vertical Blue Indicator (Desktop) */}
          <div className="absolute left-[-1.5px] top-0 w-0.75 h-20 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]" />

          {steps.map((step, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-[#111111] border border-white/5 hover:border-blue-600/30 transition-all duration-500 cursor-default"
            >
              <h3 className="text-white text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-500 group-hover:text-gray-300 transition-colors leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
