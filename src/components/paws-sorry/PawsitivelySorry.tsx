
"use client";

import { useState, useRef, useEffect } from 'react';
import { Heart, ChevronsRight, Gift } from 'lucide-react';
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
      hint: "woman smiling"
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
    text: "...and I realize my actions were not very purr-fect.",
    image: {
      src: "https://placehold.co/400x400.png",
      alt: "A picture of the person being apologized to",
      hint: "woman thinking"
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
    text: "You're the most important person in my world, and the thought of losing you is un-bear-able.",
    image: {
      src: "https://placehold.co/400x400.png",
      alt: "A picture of the person being apologized to",
      hint: "woman cute"
    }
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
             <div className={cn("bg-background/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-xl transition-opacity duration-500 border-2 border-primary/30", showSlide ? 'opacity-100' : 'opacity-0')}>
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
                <Button onClick={handleNextSlide} className="font-headline mt-6 rounded-full" size="lg">
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
            <div className="flex flex-col items-center text-center animate-fade-in">
                <Gift size={80} className="text-primary-foreground bg-primary p-4 rounded-full" />
                <h1 className="text-4xl md:text-5xl font-headline mt-8">Thank You!</h1>
                <p className="text-xl md:text-2xl mt-4 max-w-md">
                You've made my heart do a happy little meow!
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
