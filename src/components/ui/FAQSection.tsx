"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/src/lib/utils";

const faqs = [
  {
    question: "What kind of videos do you edit?",
    answer: "We specialize in high-impact short-form content (Reels, TikToks, Shorts), YouTube long-form, corporate promos, and performance-based ad creatives."
  },
  {
    question: "How do I get started with your service?",
    answer: "Just reach out via our contact form or booking link. We'll set up a quick discovery call or message to understand your needs, then get your first video in the pipeline."
  },
  {
    question: "What's your usual turnaround time?",
    answer: "Our standard turnaround is 24-48 hours for short-form content and 3-5 business days for more complex long-form projects."
  },
  {
    question: "How do I send you my raw footage?",
    answer: "We use streamlined cloud folders (Google Drive, Dropbox, or Frame.io) where you can simply drag and drop your raw files."
  },
  {
    question: "Can I request revisions?",
    answer: "Absolutely. Every project includes revisions to ensure the final edit perfectly matches your vision and brand voice."
  },
  {
    question: "Do you add subtitles and captions?",
    answer: "Yes, we provide high-engagement, dynamic captions tailored to your brand style, which is proven to increase watch time on social platforms."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Default to first question open

  return (
    <section id="creativesFaqs" className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-16 tracking-tight">
          Frequently Asked Question
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={cn(
                "rounded-2xl border transition-all duration-300",
                openIndex === index 
                  ? "bg-[#161b22] border-white/20" 
                  : "bg-[#111111] border-white/5 hover:border-white/10"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-white font-medium md:text-lg">
                  {faq.question}
                </span>
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                  openIndex === index ? "bg-blue-600" : "bg-blue-600/80"
                )}>
                  {openIndex === index ? (
                    <Minus className="text-white w-5 h-5" />
                  ) : (
                    <Plus className="text-white w-5 h-5" />
                  )}
                </div>
              </button>

              <div className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              )}>
                <p className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
