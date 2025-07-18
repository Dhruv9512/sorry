import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

const ShyCat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className={cn("w-64 h-64 animate-breathing", props.className)}
    {...props}
  >
    <g>
      {/* Body */}
      <path fill="#d3d3d3" d="M60 110h80v60H60z" />
      <circle fill="#d3d3d3" cx="100" cy="100" r="45" />

      {/* Eyes (shy) */}
      <path stroke="#000" strokeWidth="3" d="M85 95q5 5 10 0 M105 95q5 5 10 0" fill="none" strokeLinecap="round"/>
      
      {/* Blushing cheeks */}
      <ellipse cx="75" cy="108" rx="12" ry="6" fill="#FFB6C1" opacity="0.8" />
      <ellipse cx="125" cy="108" rx="12" ry="6" fill="#FFB6C1" opacity="0.8" />

      {/* Paws together */}
      <path d="M90 130 C 80 145, 90 155, 100 150 C 110 155, 120 145, 110 130" fill="#b0b0b0" />

      {/* Ears */}
      <path fill="#d3d3d3" d="M65 65l-15-20h25z" />
      <path fill="#d3d3d3" d="M135 65l15-20h-25z" />
      <path fill="#b0b0b0" d="M68 63l-10-15h20z" />
      <path fill="#b0b0b0" d="M132 63l10-15h-20z" />

      {/* Nose and Mouth */}
      <path fill="#FFB6C1" d="M98 108l2 2 2-2z" />
      <path stroke="#b0b0b0" strokeWidth="1" d="M100 110v3 M96 114q4 2 8 0" fill="none" />
      
      {/* Feet */}
      <ellipse cx="80" cy="170" rx="12" ry="6" fill="#b0b0b0" />
      <ellipse cx="120" cy="170" rx="12" ry="6" fill="#b0b0b0" />
    </g>
  </svg>
);
export default ShyCat;
