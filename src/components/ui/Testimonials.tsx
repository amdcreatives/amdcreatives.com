import Image from "next/image";
import { Quote } from "lucide-react"; // npm i lucide-react

const reviews = [
  {
    name: "Maya Rodriguez",
    role: "Content Creator",
    image: "/avatars/avatar-1.webp",
    text: "They just get it. I send raw clips, and within days, I get polished videos that are ready to post. Super reliable and top quality every time."
  },
  {
    name: "Alfie Harrison",
    role: "Agency Owner",
    image: "/avatars/avatar-2.webp",
    text: "Our engagement rates doubled after working with them. Their edits are not just clean they're strategic."
  },
  {
    name: "Sophie Bennett",
    role: "eCommerce Brand Owner",
    image: "/avatars/avatar-3.webp",
    text: "What stood out most? The fast communication and quality. They treat your content like their own."
  },
  // Add more as needed
];

export default function Testimonials() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-16 tracking-tight">Kind Words from Our Clients</h2>

        {/* Scrollable Container */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar md:grid md:grid-cols-3 md:overflow-visible">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="min-w-75 flex flex-col snap-center p-8 rounded-4xl bg-[#111111] border border-white/5 relative group transition-all duration-500 hover:border-blue-500/30"
            >
              {/* Gradient Border Glow (Matches your previous sections) */}
              <div className="absolute inset-0 rounded-4xl border border-transparent group-hover:border-blue-500/20 transition-all pointer-events-none" />

              <Quote className="text-blue-500 w-10 h-10 mb-6 opacity-80" fill="currentColor" />

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                “{review.text}”
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                  <Image 
                    src={review.image} 
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold">{review.name}</h3>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
