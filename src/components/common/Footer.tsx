import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          
          {/* Column 1: Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight">Contact</h4>
            <Link 
              href="mailto:amdcreatives.info@gmail.com" 
              className="text-gray-500 hover:text-white transition-colors"
            >
              amdcreatives.info@gmail.com
            </Link>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight">Navigation</h4>
            <div className="grid grid-cols-2 gap-y-4">
              <Link href="/" className="text-gray-500 hover:text-white transition-colors">Home</Link>
              <Link href="#creativesAbout" className="text-gray-500 hover:text-white transition-colors">About</Link>
              <Link href="#creativesPortfolio" className="text-gray-500 hover:text-white transition-colors">Portfolio</Link>
              <Link href="#creativesService" className="text-gray-500 hover:text-white transition-colors">Service</Link>
              <Link href="#creativesProcess" className="text-gray-500 hover:text-white transition-colors">Process</Link>
              <Link href="#creativesFaqs" className="text-gray-500 hover:text-white transition-colors">FAQs</Link>
            </div>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight">Social Media</h4>
            <div className="flex flex-col gap-4">
              {['Facebook', 'Instagram', 'LinkedIn', 'Twitter'].map((platform) => (
                <Link 
                  key={platform} 
                  href="#" 
                  className="group flex items-center justify-between text-gray-500 hover:text-white transition-colors max-w-37.5"
                >
                  {platform}
                  <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Big Brand Name */}
        <div className="relative mb-20 text-center">
          <h2 className="text-[10vw] sm:text-[6.5vw] font-bold text-transparent bg-clip-text bg-linear-to-b from-white/10 to-transparent leading-none select-none">
            Amd Creatives
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            Copyright @ Amd Creatives | All rights reserved. {currentYear}
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Condition</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
