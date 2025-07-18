"use client";

import { useEffect, useRef, useImperativeHandle, forwardRef, useState } from 'react';
import * as Tone from 'tone';

type AudioPlayerHandle = {
  playMeow: () => void;
  startMusic: () => void;
};

const AudioPlayer = forwardRef<AudioPlayerHandle>((props, ref) => {
  const musicPlayer = useRef<Tone.Player | null>(null);
  const meowPlayer = useRef<Tone.Player | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      musicPlayer.current = new Tone.Player({
        url: "/audio/background-music.mp3",
        loop: true,
        volume: -12,
      }).toDestination();
  
      meowPlayer.current = new Tone.Player({
        url: "/audio/meow.mp3",
        volume: -6,
      }).toDestination();

      Promise.all([musicPlayer.current.load(musicPlayer.current.buffer.url), meowPlayer.current.load(meowPlayer.current.buffer.url)]).catch(err => {
        console.info("Could not load audio files. Please make sure they exist in /public/audio/");
      });

      setIsInitialized(true);
    }
    
    return () => {
      musicPlayer.current?.dispose();
      meowPlayer.current?.dispose();
    };
  }, [isInitialized]);
  
  useImperativeHandle(ref, () => ({
    async playMeow() {
      if (Tone.context.state !== 'running') {
        await Tone.start();
      }
      if (meowPlayer.current?.loaded) {
        meowPlayer.current.start();
      }
    },
    async startMusic() {
      if (Tone.context.state !== 'running') {
        await Tone.start();
      }
      if (musicPlayer.current?.loaded && musicPlayer.current.state !== 'started') {
        musicPlayer.current.start();
      }
    }
  }));

  return null;
});

AudioPlayer.displayName = 'AudioPlayer';

export default AudioPlayer;
