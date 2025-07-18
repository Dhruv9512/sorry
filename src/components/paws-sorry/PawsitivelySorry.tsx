
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
    text: "I've been a silly kitty and I've been thinking a lot about what happened...",
    image: {
      src: "https://placehold.co/400x400.png",
      alt: "A picture of the person being apologized to",
      hint: "woman thinking"
    }
  },
  { 
    text: "...especially how it made my favorite person feel.",
    image: {
      src: "https://placehold.co/400x400.png",
      alt: "A picture of the person being apologized to",
      hint: "woman happy"
    }
  },
  { 
    text: "I realize my actions were not very purr-fect.",
    image: {
      src: "https://placehold.co/400x400.png",
      alt: "A picture of the person being apologized to",
      hint: "woman looking down"
    }
  },
  { 
    text: "It was thoughtless and I have no excuse. I'm so sorry.",
    image: {
      src: "https://placehold.co/400x400.png",
      alt: "A picture of the person being apologized to",
      hint: "woman sad"
    }
  },
  { 
    text: "You're the most important person in my world...",
    image: {
      src: "https://placehold.co/400x400.png",
      alt: "A picture of the person being apologized to",
      hint: "woman cute"
    }
  },
  { 
    text: "...and the thought of you being upset is un-bear-able.",
    image: {
      src: "https://placehold.co/400x400.png",
      alt: "A picture of the person being apologized to",
      hint: "woman pensive"
    }
  },
  {
    text: "I promise to be a better kitty and cherish our moments together.",
    image: {
      src: "https://placehold.co/400x400.png",
      alt: "A picture of the person being apologized to",
      hint: "woman smiling"
    },
  },
  { 
    text: "I am truly, paws-itively sorry from the bottom of my fluffy heart.",
    image: {
      src: "https://placehold.co/400x400.png",
      alt: "A picture of the person being apologized to",
      hint: "woman heart"
    }
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
          <div
            className="flex flex-col items-center justify-center text-center p-4 w-full h-full bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')", backgroundBlendMode: 'overlay' }}
            data-ai-hint="soft focus flower garden"
          >
             <div className={cn("bg-card/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-xl transition-opacity duration-500 border-4 border-primary", showSlide ? 'opacity-100' : 'opacity-0')}>
                {currentSlide.image && (
                   <div className="mb-6 flex justify-center">
                    <Image
                      src={currentSlide.image.src}
                      alt={currentSlide.image.alt}
                      width={200}
                      height={200}
                      className="rounded-2xl border-4 border-primary/50 shadow-lg object-cover w-48 h-48"
                      data-ai-hint={currentSlide.image.hint}
                    />
                  </div>
                )}
                <p className="text-2xl md:text-3xl min-h-[140px] md:min-h-[100px] flex items-center justify-center">
                  {currentSlide.text}
                </p>
                <Button onClick={handleNextSlide} className="font-headline mt-6 text-lg tracking-wider" size="lg">
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
            <div className="flex flex-col items-center justify-center text-center w-full h-full max-w-3xl">
                <div className="relative w-full h-[32rem] md:h-[40rem] animate-fade-in" style={{ animationDelay: '1s' }}>
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
                                      "rounded-2xl border-4 border-primary bg-card p-1 shadow-2xl object-cover transition-transform hover:scale-110 hover:shadow-primary/50",
                                      sizeClass
                                    )}
                                  data-ai-hint={slide.image.hint}
                                />
                            </div>
                        )
                    })}
                </div>
                 <h1 className="text-4xl md:text-5xl font-headline mt-8 animate-fade-in" style={{ animationDelay: '0s', zIndex: 10 }}>You've made my heart so happy!</h1>
                <p className="text-xl md:text-2xl mt-4 max-w-md animate-fade-in" style={{ animationDelay: '0.5s', zIndex: 10 }}>
                    Here's to many more happy memories together!
                </p>
            </div>
        )
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
