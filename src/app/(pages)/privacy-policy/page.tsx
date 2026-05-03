import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, Mail, MessageCircle } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-gray-300 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
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
            Privacy Policy
          </h1>
          <p className="text-gray-500">Effective Date: May 3, 2026</p>
        </header>

        <div className="space-y-12">
          
          {/* Introduction */}
          <section>
            <p className="text-lg leading-relaxed italic border-l-2 border-blue-500 pl-6 text-gray-400">
              At Amd Creatives, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or use our video production services.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <FileText size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
            </div>
            <p className="mb-6">We collect information that helps us provide a personalized and efficient experience. This includes:</p>
            <ul className="space-y-4 list-disc pl-5 text-gray-400">
              <li><strong className="text-white">Personal Identification Information:</strong> Name, email address, and contact details provided via our contact forms or project inquiries.</li>
              <li><strong className="text-white">Project Data:</strong> Raw footage, brand assets, scripts, and creative briefs uploaded to our secure storage folders.</li>
              <li><strong className="text-white">Usage Data:</strong> Information on how you interact with our site, including IP addresses, browser types, and pages visited, collected through cookies and analytics tools.</li>
            </ul>
          </section>

          {/* 2. How We Use Information */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <Eye size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Deliver high-quality video editing and content strategy services.",
                "Communicate regarding project updates, revisions, and consultations.",
                "Optimize our website performance and user experience.",
                "Process subscriptions and manage access to bonus tools (e.g., Go High Level)."
              ].map((item, index) => (
                <div key={index} className="p-4 bg-white/5 border border-white/5 rounded-xl">
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Data Security */}
          <section className="bg-blue-600/5 border border-blue-500/20 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <Lock size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">3. Data Security & Storage</h2>
            </div>
            <p className="leading-relaxed">
              We prioritize the security of your creative assets. All raw files and finished edits are stored using industry-standard cloud solutions (such as Google Drive, Dropbox, or Frame.io) with restricted access. 
              <span className="block mt-4 font-semibold text-blue-400">We do not sell, trade, or rent your personal information to third parties.</span>
            </p>
          </section>

          {/* 4 & 5 Rights & Third Parties */}
          <div className="grid md:grid-cols-2 gap-8">
            <section className="p-8 bg-white/5 border border-white/10 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-4">4. Third-Party Services</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Our website utilizes third-party tools for CRM and subscription management. Please note that external sites have their own privacy policies.
              </p>
            </section>
            <section className="p-8 bg-white/5 border border-white/10 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-4">5. Your Rights</h3>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Request access to personal data</li>
                <li>• Correction or deletion of info</li>
                <li>• Withdraw marketing consent</li>
              </ul>
            </section>
          </div>

          {/* Contact Section */}
          <footer className="pt-12 border-t border-white/10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full mb-6">
              <ShieldCheck size={16} />
              <span className="text-sm font-medium">Verified Privacy Standard</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Questions?</h2>
            <p className="text-gray-500 mb-8">If you have any questions about this Privacy Policy, please contact us at:</p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
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
