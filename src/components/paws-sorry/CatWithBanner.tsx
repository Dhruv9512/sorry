import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

const CatWithBanner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className={cn("w-64 h-64 animate-breathing", props.className)}
    {...props}
  >
    <g>
      {/* Banner */}
      <path fill="hsl(var(--primary))" d="M10 80h180v40H10z" />
      <path fill="hsl(var(--card))" d="M10 80h5v40h-5z M190 80h-5v40h5z" />
      <text
        x="100"
        y="107"
        fontFamily="Belleza, sans-serif"
        fontSize="24"
        fill="hsl(var(--primary-foreground))"
        textAnchor="middle"
      >
        Sorry
      </text>
      
      {/* Cat Body */}
      <path fill="#d3d3d3" d="M75 110h50v60H75z" />
      <circle fill="#d3d3d3" cx="100" cy="100" r="40" />

      {/* Eyes */}
      <circle fill="#fff" cx="88" cy="95" r="8" />
      <circle fill="#fff" cx="112" cy="95" r="8" />
      <circle fill="#000" cx="88" cy="95" r="4" />
      <circle fill="#000" cx="112" cy="95" r="4" />
      <circle fill="#fff" cx="90" cy="93" r="2" />
      <circle fill="#fff" cx="114" cy="93" r="2" />

      {/* Paws holding banner */}
      <circle cx="65" cy="100" r="10" fill="#d3d3d3" />
      <circle cx="135" cy="100" r="10" fill="#d3d3d3" />

      {/* Ears */}
      <path fill="#d3d3d3" d="M70 65l-15-20h20z" />
      <path fill="#d3d3d3" d="M130 65l15-20h-20z" />
      <path fill="#b0b0b0" d="M72 63l-10-15h15z" />
      <path fill="#b0b0b0" d="M128 63l10-15h-15z" />

      {/* Nose and Mouth */}
      <path fill="#FFB6C1" d="M97 105l3 3 3-3z" />
      <path stroke="#b0b0b0" strokeWidth="1" d="M100 108v3 M95 112q5 3 10 0" fill="none" />
      
      {/* Feet */}
      <ellipse cx="85" cy="170" rx="10" ry="5" fill="#b0b0b0" />
      <ellipse cx="115" cy="170" rx="10" ry="5" fill="#b0b0b0" />
    </g>
  </svg>
);
export default CatWithBanner;
