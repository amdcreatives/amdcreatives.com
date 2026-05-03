import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-sm font-bold text-white">
          <Image src="/logos/amd-creatives-7.webp" className="w-40 sm:w-62" alt="Amd Creatives Logo" width={250} height={30} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#creativesHome" className="text-white border-b border-white">Home</Link>
          <Link href="#creativesAbout" className="hover:text-white transition">About</Link>
          <Link href="#creativesPortfolio" className="hover:text-white transition">Portfolio</Link>
          <Link href="#creativesService" className="hover:text-white transition">Service</Link>
          <Link href="#creativesProcess" className="hover:text-white transition">Process</Link>
          <Link href="#creativesFaqs" className="hover:text-white transition">FAQs</Link>
        </div>

        {/* CTA */}
        <Button href="#creativesContact" variant="primary" size="md">Contact us</Button>
      </nav>
    </header>
  );
}
