import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils"; // Import cn function if it exists, adjust path accordingly
import { SquareDashedMousePointer } from "lucide-react";

type LogoProps = {
  fontSize?: string;
  iconSize?: number;
};

const Logo = ({ fontSize = "text-2xl", iconSize = 20 }: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn(
        "text-2xl font-extrabold flex items-center gap-2",
        fontSize
      )}
    >
      <div className="rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700">
        <SquareDashedMousePointer size={iconSize} className="stroke-white" />
      </div>
      <div>
        <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
          Flow
        </span>
        <span className="text-stone-800 dark:text-stone-400">Scrape</span>
      </div>
    </Link>
  );
};

export default Logo;
