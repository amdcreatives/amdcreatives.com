"use client";

import Link from "next/link";
import { ArrowLeft, RotateCcw, CreditCard, RefreshCw, FileWarning, Mail, MessageCircle } from "lucide-react";

export default function RefundPolicy() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-gray-300 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Refund Policy
          </h1>
          <p className="text-gray-500">Last Updated: May 3, 2026</p>
        </header>

        <div className="space-y-12">
          
          {/* Intro Section */}
          <section>
            <p className="text-lg leading-relaxed text-gray-400">
              At Amd Creatives, we strive to provide high-quality video production services that align with your brand&apos;s goals. Because our services involve custom creative labor and dedicated personnel time, we operate under the following refund guidelines:
            </p>
          </section>

          {/* 1. Revisions */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <RefreshCw size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">1. Service Satisfaction & Revisions</h2>
            </div>
            <p className="leading-relaxed">
              We are committed to getting your content right. Every project includes a set number of revisions (as specified in your service agreement) to ensure the final edit matches your vision. We encourage open communication during the <span className="text-white font-medium">&quot;Ideation & Strategy&quot;</span> phase to minimize the need for significant changes later.
            </p>
          </section>

          {/* 2. Eligibility Grid */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <RotateCcw size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">2. Eligibility for Refunds</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
                <h3 className="text-blue-400 font-bold mb-3 text-lg">Full Refund</h3>
                <p className="text-sm leading-relaxed">Issued if a cancellation request is received before any work has commenced on your project.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
                <h3 className="text-yellow-500/80 font-bold mb-3 text-lg">Partial Refund</h3>
                <p className="text-sm leading-relaxed">Offered if a project is cancelled after strategy/scripting but before final editing begins.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
                <h3 className="text-red-500/80 font-bold mb-3 text-lg">Non-Refundable</h3>
                <p className="text-sm leading-relaxed">Once final files are delivered and the revision period has closed, no refunds will be issued.</p>
              </div>
            </div>
          </section>

          {/* 3. Subscriptions */}
          <section className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <CreditCard size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">3. Subscription Services</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <p>You may cancel your monthly content retainer at any time.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <p>Refunds are not provided for partial months; service continues until the end of the current billing cycle.</p>
              </li>
              <li className="flex gap-3 text-gray-400 text-sm italic">
                <span className="text-blue-500 font-bold">•</span>
                <p>Note: &quot;Free Bonus&quot; subscriptions (e.g., Go High Level) are terminated upon primary service cancellation.</p>
              </li>
            </ul>
          </section>

          {/* 4. Performance Disclaimer */}
          <section className="p-8 bg-white/5 border border-white/10 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <FileWarning size={20} className="text-yellow-500" />
              <h3 className="text-xl font-bold text-white">4. Performance & Raw Files</h3>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Refunds will not be granted based on the subjective &quot;performance&quot; of a video (e.g., views or lead count), as external factors influence social media algorithms. Our guarantee covers the quality and delivery of production assets.
            </p>
          </section>

          {/* 5. Contact / Request */}
          <footer className="pt-12 border-t border-white/10">
            <div className="bg-linear-to-br from-blue-600/20 to-transparent p-10 rounded-4xl border border-blue-500/20 text-center">
              <div className="inline-flex p-3 bg-blue-600 rounded-2xl text-white mb-6">
                <Mail size={32} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">How to Request a Refund</h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                Contact our support team with your project details. We aim to review and respond to all inquiries within 3-5 business days.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <Link href="mailto:amdcreatives.info@gmail.com" className="text-white text-lg font-medium hover:text-blue-400 transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" /> amdcreatives.info@gmail.com</Link>
                <div className="hidden md:block w-px h-8 bg-white/10" />
                <Link href="https://wa.me/+8801511658200" className="text-white text-lg font-medium hover:text-green-400 transition-colors flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> +88 015 116 58200</Link>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </main>
  );
}
