"use client";

import Link from "next/link";
import { ArrowLeft, Gavel, UserCheck, Scale, CreditCard, Edit3, ShieldAlert, XCircle, Globe, Mail, MessageCircle } from "lucide-react";

export default function TermsAndConditions() {
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
            Terms & Conditions
          </h1>
          <p className="text-gray-500">Effective Date: May 3, 2026</p>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            Welcome to Amd Creatives. By accessing our website and utilizing our video production services, you agree to comply with and be bound by the following terms and conditions.
          </p>
        </header>

        <div className="space-y-10">
          
          {/* 1. Scope of Service */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <Gavel size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">1. Scope of Service</h2>
            </div>
            <p className="leading-relaxed">
              Amd Creatives provides professional video editing, content strategy, and production services. This includes YouTube editing, social media Reels/Shorts, and corporate videos. Services are delivered based on the specific package or custom quote agreed upon at the project start.
            </p>
          </section>

          {/* 2. Client Responsibilities */}
          <section className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <UserCheck size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">2. Client Responsibilities</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Assets", desc: "Provide raw footage and briefs in a timely manner." },
                { title: "Rights", desc: "Ensure you own the legal rights to all provided materials." },
                { title: "Feedback", desc: "Provide clear, constructive feedback during revisions." }
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white/5 border border-white/5 rounded-2xl">
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Intellectual Property */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <Scale size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">3. Intellectual Property</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-blue-500 font-bold">01</span>
                <p><strong className="text-white">Final Edits:</strong> Upon full payment, ownership of the final video transfers to the client.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-500 font-bold">02</span>
                <p><strong className="text-white">Portfolio Rights:</strong> We retain the right to showcase excerpts for promotional purposes unless opted out in writing.</p>
              </li>
              <li className="flex gap-4 text-sm text-gray-500">
                <span className="text-blue-500 font-bold">03</span>
                <p>Raw assets provided by the client remain the client&apos;s property.</p>
              </li>
            </ul>
          </section>

          {/* 4. Payment */}
          <section className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <CreditCard size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">4. Payment & Subscriptions</h2>
            </div>
            <p className="mb-4">One-time projects require payment as outlined in the invoice. Monthly retainers are billed in advance every 30 days. Failure to complete payment may result in a temporary suspension of services.</p>
          </section>

          {/* 5 & 6 Revision & Liability */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
              <div className="flex items-center gap-2 mb-4 text-blue-400">
                <Edit3 size={20} />
                <h3 className="text-lg font-bold text-white">5. Revision Policy</h3>
              </div>
              <p className="text-sm leading-relaxed">Revisions must be requested within 7 days of the draft. Significant changes to the original scope may incur additional fees.</p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
              <div className="flex items-center gap-2 mb-4 text-red-400">
                <ShieldAlert size={20} />
                <h3 className="text-lg font-bold text-white">6. Limitation of Liability</h3>
              </div>
              <p className="text-sm leading-relaxed">We do not guarantee specific lead counts or viral performance. We are not liable for consequential losses from content use.</p>
            </div>
          </div>

          {/* 7 & 8 Termination & Law */}
          <div className="grid md:grid-cols-2 gap-8">
             <div className="flex items-start gap-4">
                <XCircle className="text-gray-600 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-bold mb-2">7. Termination</h4>
                  <p className="text-sm text-gray-500">Either party may terminate if terms are breached. Client is responsible for work completed up to date.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <Globe className="text-gray-600 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-bold mb-2">8. Governing Law</h4>
                  <p className="text-sm text-gray-500">Governed by and construed in accordance with the laws of our operating jurisdiction.</p>
                </div>
             </div>
          </div>

          {/* Footer Contact */}
          <footer className="pt-12 border-t border-white/10 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Legal Support</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm">
              <Link href="mailto:amdcreatives.info@gmail.com" className="text-white text-lg font-medium hover:text-blue-400 transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" /> amdcreatives.info@gmail.com</Link>
              <Link href="https://wa.me/+8801511658200" className="text-white text-lg font-medium hover:text-green-400 transition-colors flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> +88 015 116 58200</Link>
            </div>
          </footer>

        </div>
      </div>
    </main>
  );
}
