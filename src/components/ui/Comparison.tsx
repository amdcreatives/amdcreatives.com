import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/src/lib/utils"; // Uses the utility we created earlier
import Image from "next/image";
import Button from "./Button";

export default function Comparison() {
  return (
    <section id="creativesComparison" className="bg-[#0a0a0a] py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-from)_0%,transparent_65%)] from-purple-900/10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-center text-white text-3xl md:text-5xl font-bold mb-16 tracking-tight">Why Our Clients Stick With Us</h2>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Amd Creatives Column */}
          <div className="relative p-px rounded-[2.5rem] bg-linear-to-b from-red-500/40 via-blue-500/40 to-transparent">
            <div className="h-full bg-[#0d1117] rounded-[2.5rem] p-8 md:p-12">
              <div className="pt-1 mb-10.5">
                <Image src="/logos/amd-creatives-7.webp" alt="Amd Creatives Logo" width={200} height={22} />
              </div>

              <ul className="space-y-6">
                <ListItem icon={<CheckCircle2 className="text-gray-400 w-5 h-5" />} text="In-house team of 5+ Experts" />
                <ListItem icon={<CheckCircle2 className="text-gray-400 w-5 h-5" />} text="Results oriented" />
                <ListItem icon={<CheckCircle2 className="text-gray-400 w-5 h-5" />} text="Experience with 50+ Clients" />
                <ListItem icon={<CheckCircle2 className="text-gray-400 w-5 h-5" />} text="Personalized CRM" />
                <ListItem icon={<CheckCircle2 className="text-gray-400 w-5 h-5" />} text="Proven DFY Content Funnel" />
                <ListItem icon={<CheckCircle2 className="text-gray-400 w-5 h-5" />} text="24/7 Support, Anytime you need us" />
              </ul>

              {/* Bonus Box */}
              <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Bonus service you get with us</p>
                <ul className="space-y-3">
                  <ListItem icon={<CheckCircle2 className="text-blue-500 w-4 h-4" />} text="Free Go High level subscription" isSmall />
                  <ListItem icon={<CheckCircle2 className="text-blue-500 w-4 h-4" />} text="Free 1 to 1 consultancy" isSmall />
                </ul>
              </div>
            </div>
          </div>

          {/* Other Agency Column */}
          <div className="bg-[#111111] rounded-[2.5rem] p-8 md:p-12 border border-white/5">
            <h3 className="text-xl font-bold text-white mb-10 tracking-wide">Other Agency</h3>
            <ul className="space-y-6">
              <ListItem icon={<XCircle className="text-gray-600 w-5 h-5" />} text="Edits that fail to convert or perform" isDimmed />
              <ListItem icon={<XCircle className="text-gray-600 w-5 h-5" />} text="Weak thumbnails and titles with no CTR strategy" isDimmed />
              <ListItem icon={<XCircle className="text-gray-600 w-5 h-5" />} text="Lack of proper distribution systems" isDimmed />
              <ListItem icon={<XCircle className="text-gray-600 w-5 h-5" />} text="No expertise in funnels or lead capture systems" isDimmed />
              <ListItem icon={<XCircle className="text-gray-600 w-5 h-5" />} text="Limited revisions with no client-focused approach" isDimmed />
              <ListItem icon={<XCircle className="text-gray-600 w-5 h-5" />} text="Guesswork instead of data-driven decisions" isDimmed />
              <ListItem icon={<XCircle className="text-gray-600 w-5 h-5" />} text="No system, just random edits, every time" isDimmed />
              <ListItem icon={<XCircle className="text-gray-600 w-5 h-5" />} text="Inconsistent quality that doesn't reflect your brand" isDimmed />
              <ListItem icon={<XCircle className="text-gray-600 w-5 h-5" />} text="Delayed responses and poor communication." isDimmed />
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <Button href="https://wa.me/+8801511658200" variant="primary" size="lg">Book A Call</Button>
        </div>
      </div>
    </section>
  );
}

function ListItem({ 
  icon, 
  text, 
  isDimmed = false, 
  isSmall = false 
}: { 
  icon: React.ReactNode, 
  text: string, 
  isDimmed?: boolean, 
  isSmall?: boolean 
}) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-0.5 shrink-0">{icon}</div>
      <span className={cn(
        "font-medium",
        isSmall ? "text-sm" : "text-base",
        isDimmed ? "text-gray-500" : "text-gray-300"
      )}>
        {text}
      </span>
    </li>
  );
}
