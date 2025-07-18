
"use client";

import { useState, useRef } from 'react';
import { Heart, ChevronsRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AudioPlayer from './AudioPlayer';
import FallingFlowers from './FallingFlowers';
import ShyCat from './ShyCat';
import CatWithBanner from './CatWithBanner';
import { cn } from '@/lib/utils';

type Step = 'intro' | 'slideshow' | 'final' | 'forgiven';

const apologySlides = [
  { 
    text: "I know I'm dumb sometimes... I don’t always understand what you're trying to tell me.",
    image: {
      src: "https://mphkxojdifbgafp1.public.blob.vercel-storage.com/Mitsuha/WhatsApp%20Image%202025-07-18%20at%2014.41.58_95180d90.jpg",
      alt: "A picture of the person being apologized to",
      hint: "woman thinking"
    }
  },
  { 
    text: "I take things the wrong way and let my anger speak before my heart does...",
    image: {
      src: "https://mphkxojdifbgafp1.public.blob.vercel-storage.com/Mitsuha/Being_you-5bsdi0XgqqdZlPBCX7g9ayXd3xh6Bq.jpg",
      alt: "A picture of the person being apologized to",
      hint: "woman concerned"
    }
  },
  { 
    text: "I said things I didn’t mean... I wish I could take them all back.",
    image: {
      src: "https://mphkxojdifbgafp1.public.blob.vercel-storage.com/Mitsuha/Birthday-hxSKIAm0BI4itaWNdyO5hLqPH3UDuv.jpg",
      alt: "A picture of the person being apologized to",
      hint: "woman looking down"
    }
  },
  { 
    text: "Please believe me — those words meant nothing. You, *you* mean everything to me.",
    image: {
      src: "https://mphkxojdifbgafp1.public.blob.vercel-storage.com/Mitsuha/M3-YuddJAdbHFU6wlOS1a0Dtlm4z3EAva.jpg",
      alt: "A picture of the person being apologized to",
      hint: "woman sad"
    }
  },
  { 
    text: "I'm truly sorry for hurting you... and for fighting with you all the time.",
    image: {
      src: "https://mphkxojdifbgafp1.public.blob.vercel-storage.com/Mitsuha/WhatsApp%20Image%202025-05-09%20at%2010.59.43_494225fc-bm5rOdDBukCrFdXdezP8fuJaKc3Lpu.jpg",
      alt: "A picture of the person being apologized to",
      hint: "woman cute"
    }
  },
  { 
    text: "You mean so much to me... more than I can ever truly say.",
    image: {
      src: "https://mphkxojdifbgafp1.public.blob.vercel-storage.com/Mitsuha/WhatsApp%20Image%202025-07-18%20at%2014.41.48_be2db70a.jpg",
      alt: "A picture of the person being apologized to",
      hint: "woman pensive"
    }
  },
  {
    text: "Nushu, my favorite human — I’m really sorry. I never meant to hurt you. I promise to be more thoughtful, because you mean the world to me.",
    image: {
      src: "https://mphkxojdifbgafp1.public.blob.vercel-storage.com/Mitsuha/Love-eDQy8tQtyuEu15yepajOPeo15YgmVX.jpg",
      alt: "A picture of the person being apologized to",
      hint: "woman smiling"
    },
  },
];


const collageLayout = [
    { top: '10%', left: '15%', transform: 'rotate(-10deg) scale(1)', size: 'medium' },
    { top: '15%', left: '55%', transform: 'rotate(8deg) scale(1.1)', size: 'large' },
    { top: '30%', left: '80%', transform: 'rotate(15deg) scale(0.9)', size: 'small' },
    { top: '45%', left: '5%', transform: 'rotate(5deg) scale(1.05)', size: 'large' },
    { top: '65%', left: '30%', transform: 'rotate(-12deg) scale(1)', size: 'medium' },
    { top: '50%', left: '60%', transform: 'rotate(2deg) scale(0.95)', size: 'medium' },
    { top: '75%', left: '75%', transform: 'rotate(-8deg) scale(1.1)', size: 'large' },
    { top: '80%', left: '10%', transform: 'rotate(10deg) scale(0.9)', size: 'small' },
];
  
const imageSizes = {
    large: "w-32 h-32 md:w-40 md:h-40",
    medium: "w-28 h-28 md:w-32 md:h-32",
    small: "w-24 h-24 md:w-28 md:h-28",
}

export default function PawsitivelySorry() {
  const [step, setStep] = useState<Step>('intro');
  const [slideIndex, setSlideIndex] = useState(0);
  const [showSlide, setShowSlide] = useState(true);
  const audioRef = useRef<{ playMeow: () => void; startMusic: () => void }>(null);

  const handleNextSlide = () => {
    setShowSlide(false);
    setTimeout(() => {
      if (slideIndex < apologySlides.length - 1) {
        setSlideIndex(slideIndex + 1);
        setShowSlide(true);
      } else {
        setStep('final');
      }
    }, 700);
  };

  const handleIntroClick = () => {
    audioRef.current?.startMusic();
    audioRef.current?.playMeow();
    setStep('slideshow');
  };

  const handleForgiveClick = () => {
    setStep('forgiven');
  }

  const renderContent = () => {
    switch (step) {
      case 'intro':
        return (
          <div className="flex flex-col items-center text-center animate-fade-in">
            <ShyCat />
            <h1 className="text-4xl md:text-5xl font-headline mt-4">Um... hey,</h1>
            <p className="text-xl md:text-2xl mt-4 max-w-md">
              I know I messed up... and I'm really, really sorry.
            </p>
            <Button onClick={handleIntroClick} className="font-headline mt-8" size="lg">
              <Heart className="mr-2" /> Tap to hear my apology
            </Button>
          </div>
        );
     case 'slideshow':
  const currentSlide = apologySlides[slideIndex];
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-8 w-full h-full bg-cover bg-center rounded-2xl">
      <div className={cn(
        "bg-white/90 dark:bg-card/90 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-2xl w-full max-w-2xl border-4 border-primary transition-opacity duration-500",
        showSlide ? "opacity-100" : "opacity-0"
      )}>
        {currentSlide.image && (
         <div className="mb-6 flex justify-center">
          <Image
            src={currentSlide.image.src}
            alt={currentSlide.image.alt}
            width={350}
            height={350}
            className="rounded-3xl border-4 border-pink-300 shadow-2xl object-cover w-80 h-80 sm:w-96 sm:h-96 transition-transform duration-500 ease-in-out"
            data-ai-hint={currentSlide.image.hint}
          />
        </div>
        )}
        <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed text-gray-800 dark:text-white min-h-[120px] flex items-center justify-center px-2">
          {currentSlide.text}
        </p>
        <Button
          onClick={handleNextSlide}
          className="font-headline mt-8 text-base sm:text-lg tracking-wide"
          size="lg"
        >
          Next <ChevronsRight className="ml-2" />
        </Button>
      </div>
    </div>
  );

      case 'final':
        return (
            <div className="flex flex-col items-center text-center animate-fade-in">
                <CatWithBanner />
                <h1 className="text-3xl md:text-4xl font-headline mt-4">Will you forgive this foolish kitty?</h1>
                <p className="text-xl md:text-2xl mt-4 max-w-lg">
                You mean the world to me. Can we please be best friends again?
                </p>
                <Button onClick={handleForgiveClick} className="font-headline mt-8" size="lg">
                    <Heart className="mr-2 fill-primary-foreground" /> Yes, I forgive you
                </Button>
          </div>
        )
      case 'forgiven':
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-left w-full h-full max-w-6xl gap-6 px-4">
      {/* Left Side - Text */}
<div className="md:w-1/2 w-full text-center md:text-left space-y-4">
  <h5 className="text-3xl font-extrabold font-headline text-pink-700 drop-shadow-lg">
    I know I mess things up sometimes, and yet, you always find it in your heart to forgive me. 💖
  </h5>
  <p className="text-2xl text-pink-600 font-medium drop-shadow-md">
    That means the world to me. 🐾🌸
  </p>
  <p className="text-lg text-pink-500 italic mt-2 leading-relaxed">
    You're not just close to my heart — you're where I truly feel at home. <br />
    I’ll keep doing my best to love and cherish you more every single day. 🌸💖
  </p>
</div>



      {/* Right Side - Image Collage */}
      <div className="relative w-full md:w-1/2 h-[32rem] md:h-[40rem] animate-fade-in" style={{ animationDelay: '1s' }}>
        {apologySlides.map((slide, index) => {
          const layout = collageLayout[index % collageLayout.length];
          const sizeClass = imageSizes[layout.size as keyof typeof imageSizes] || imageSizes.medium;
          return (
            <div 
              key={index}
              className="absolute animate-fade-in"
              style={{ 
                top: layout.top, 
                left: layout.left, 
                transform: layout.transform,
                animationDelay: `${1.5 + index * 0.2}s`,
                animationDuration: '1s',
              }}
            >
              <Image
                src={slide.image.src}
                alt={slide.image.alt}
                width={150}
                height={150}
                className={cn(
                  "rounded-2xl border-4 border-pink-300 bg-card p-1 shadow-2xl object-cover transition-transform hover:scale-110 hover:shadow-pink-300/50",
                  sizeClass
                )}
                data-ai-hint={slide.image.hint}
              />
            </div>
          );
        })}
      </div>
    </div>
  );

    }
  };

  return (
    <>
      <AudioPlayer ref={audioRef} />
      <FallingFlowers />
      <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 overflow-hidden">
        {renderContent()}
      </main>
    </>
  );
}
