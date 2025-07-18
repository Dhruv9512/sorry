"use client";

import { useState, useRef, useEffect } from 'react';
import { Heart, ChevronsRight, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AudioPlayer from './AudioPlayer';
import FallingFlowers from './FallingFlowers';
import ShyCat from './ShyCat';
import CatWithBanner from './CatWithBanner';
import { cn } from '@/lib/utils';

type Step = 'intro' | 'slideshow' | 'final' | 'forgiven';

const apologySlides = [
  "I've been thinking a lot about what happened...",
  "...and I realize how much my actions hurt you.",
  "It was thoughtless and I have no excuse.",
  "You are so important to me, and the thought of losing you is unbearable.",
  "I am truly, paws-itively sorry.",
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
            <h1 className="text-4xl md:text-5xl font-headline mt-4">Hey,</h1>
            <p className="text-xl md:text-2xl mt-4 max-w-md">
              I know I messed up... and I'm so sorry.
            </p>
            <Button onClick={handleIntroClick} className="font-headline mt-8" size="lg">
              <Heart className="mr-2" /> Tap to hear my heart (meow)
            </Button>
          </div>
        );
      case 'slideshow':
        return (
          <div
            className="flex flex-col items-center justify-center text-center p-4 w-full h-full bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')", backgroundBlendMode: 'overlay' }}
            data-ai-hint="soft focus flower garden"
          >
             <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-xl">
                <p className={cn("text-2xl md:text-3xl min-h-[140px] md:min-h-[100px] flex items-center justify-center transition-opacity duration-500", showSlide ? 'opacity-100' : 'opacity-0')}>
                {apologySlides[slideIndex]}
                </p>
                <Button onClick={handleNextSlide} className="font-headline mt-6" size="lg">
                <ChevronsRight className="mr-2" /> Next
                </Button>
            </div>
          </div>
        );
      case 'final':
        return (
            <div className="flex flex-col items-center text-center animate-fade-in">
                <CatWithBanner />
                <h1 className="text-3xl md:text-4xl font-headline mt-4">Please forgive me...</h1>
                <p className="text-xl md:text-2xl mt-4 max-w-lg">
                You mean the world to me. Can we please be best friends again?
                </p>
                <Button onClick={handleForgiveClick} className="font-headline mt-8" size="lg">
                    <Heart className="mr-2 fill-primary-foreground" /> Forgive Me?
                </Button>
          </div>
        )
      case 'forgiven':
        return (
            <div className="flex flex-col items-center text-center animate-fade-in">
                <Gift size={80} className="text-primary-foreground bg-primary p-4 rounded-full" />
                <h1 className="text-4xl md:text-5xl font-headline mt-8">Thank You!</h1>
                <p className="text-xl md:text-2xl mt-4 max-w-md">
                You've made my heart meow with joy!
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
