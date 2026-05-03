import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility to merge tailwind classes safely
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  className?: string;
  showArrow?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "lg",
  className,
  showArrow = true,
}: ButtonProps) {
  
  // Base Styles
  const baseStyles = "group inline-flex items-center justify-center gap-2 font-bold transition-all rounded-xl active:scale-95";

  // Variant Styles
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]",
    outline: "bg-transparent border border-white/20 hover:bg-white/5 text-white",
  };

  // Size Styles
  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <Link 
      href={href} 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
      {showArrow && (
        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      )}
    </Link>
  );
}
