import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

const ShyCat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className={cn("w-64 h-64 animate-breathing", props.className)}
    {...props}
  >
    <defs>
      <style>
        {`
          @keyframes sob {
            0%, 100% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(5px); opacity: 0; }
          }
          .tear {
            animation: sob 2s ease-in-out infinite;
            fill: #a7c7e7;
          }
          .tear-1 {
            animation-delay: 0s;
          }
          .tear-2 {
            animation-delay: 1s;
          }
        `}
      </style>
    </defs>
    <g>
      {/* Body */}
      <path fill="#FFC0CB" d="M60 110h80v60H60z" />
      <circle fill="#FFC0CB" cx="100" cy="100" r="45" />

      {/* Eyes (sad) */}
      <path stroke="#a0a0a0" strokeWidth="3" d="M85 100q5 -5 10 0 M105 100q5 -5 10 0" fill="none" strokeLinecap="round"/>
      
      {/* Tears */}
      <path className="tear tear-1" d="M88 105 c -2 2 -2 5 0 7 c 2 2 4 -2 0 -7z" />
      <path className="tear tear-2" d="M112 105 c -2 2 -2 5 0 7 c 2 2 4 -2 0 -7z" />

      {/* Paws together */}
      <path d="M90 130 C 80 145, 90 155, 100 150 C 110 155, 120 145, 110 130" fill="#FFE4E1" />

      {/* Ears */}
      <path fill="#FFC0CB" d="M65 65l-15-20h25z" />
      <path fill="#FFC0CB" d="M135 65l15-20h-25z" />
      <path fill="#FFE4E1" d="M68 63l-10-15h20z" />
      <path fill="#FFE4E1" d="M132 63l10-15h-20z" />

      {/* Nose and Mouth (sad) */}
      <path fill="#FFB6C1" d="M98 112l2 2 2-2z" />
      <path stroke="#a0a0a0" strokeWidth="1" d="M100 114v3 M96 118q4 -2 8 0" fill="none" />
      
      {/* Feet */}
      <ellipse cx="80" cy="170" rx="12" ry="6" fill="#FFE4E1" />
      <ellipse cx="120" cy="170" rx="12" ry="6" fill="#FFE4E1" />
    </g>
  </svg>
);
export default ShyCat;
