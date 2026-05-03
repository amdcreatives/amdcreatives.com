"use client";

import { useState, useRef } from "react";
import { AlertCircle, CheckCircle2, Loader2, Mail, MessageCircle, Send } from "lucide-react";
import Image from "next/image";
import HCaptcha from "@hcaptcha/react-hcaptcha"; // Standard import
import Link from "next/link";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // 1. Safety check for Captcha
    if (!captchaToken) {
      alert("Please complete the captcha");
      return;
    }

    setStatus("loading");

    // 2. Prepare Data
    const formData = new FormData(e.currentTarget);
    
    // Add the required Web3Forms fields
    formData.append("access_key", "37a83d36-3d33-4d4d-aa56-29a1ca773f2f");
    formData.append("h-captcha-response", captchaToken); 

    // 3. Convert FormData to a plain object for JSON submission
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      // Note: Added the trailing slash to the URL to prevent "POST method" redirect errors
      const response = await fetch("https://api.web3forms.com/submit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        
        // 4. Reset Form and Captcha
        (e.target as HTMLFormElement).reset();
        if (captchaRef.current) {
          captchaRef.current.resetCaptcha();
        }
        setCaptchaToken(null);
      } else {
        console.error("Submission failed:", data.message);
        setStatus("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("error");
    }
  }

  return (
    <section id="creativesContact" className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">Have a Project?</h2>
          <p className="text-3xl md:text-5xl font-bold text-gray-500">Let&apos;s Talk</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-[#111111] p-8 md:p-12 rounded-4xl border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="from_name" value="Amd Creatives Contact Form" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
              {/* Full Name */}
              <div className="grid md:grid-cols-1 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                  <input 
                    name="name"
                    required
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Email & Budget */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                  <input 
                    name="email"
                    required
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Project Budget</label>
                  <input 
                    name="budget"
                    type="text"
                    placeholder="Enter your Budget ($)" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-400 text-sm mb-2">Tell us about your projects</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your projects" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <HCaptcha
                ref={captchaRef}
                sitekey="987a78d0-4570-4c7e-8336-ec80a9f22f70"
                onVerify={(token) => setCaptchaToken(token)}
                onExpire={() => setCaptchaToken(null)}
                theme="dark" // Matches your aesthetic
              />

              <button 
                disabled={status === "loading" || !captchaToken} // Disable if no captcha
                type="submit"
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-10 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>Sending... <Loader2 className="w-5 h-5 animate-spin" /></>
                ) : (
                  <>Submit now <Send className="w-4 h-4" /></>
                )}
              </button>

              {/* Feedback Messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 p-4 rounded-xl animate-in fade-in slide-in-from-top-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Message sent successfully! We&apos;ll get back to you soon.</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 p-4 rounded-xl animate-in fade-in slide-in-from-top-2">
                  <AlertCircle className="w-5 h-5" />
                  <span>Something went wrong. Please try again later.</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info Card */}
          <div className="space-y-6">
            <div className="bg-linear-to-br from-purple-900/40 to-blue-900/40 p-8 rounded-4xl border border-white/10 h-full flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <p className="text-gray-400 text-sm mb-2">Email</p>
                  <Link href="mailto:amdcreatives.info@gmail.com" className="text-white text-lg font-medium hover:text-blue-400 transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" /> amdcreatives.info@gmail.com</Link>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2">Whatsapp</p>
                  <Link href="https://wa.me/+8801511658200" className="text-white text-lg font-medium hover:text-green-400 transition-colors flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> +88 015 116 58200</Link>
                </div>
              </div>

              {/* Founder Highlight */}
              <div className="mt-12 p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                    <Image src="/tanvir-ahmed.webp" alt="Tanvir Ahmed" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Tanvir Ahmed</h4>
                    <p className="text-gray-500 text-xs">Founder & CEO</p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">With a passion for storytelling and design, we create high-performing video content that helps brands grow, connect, and convert one edit at a time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
