"use client";

import { useEffect, useRef, useImperativeHandle, forwardRef, useState } from 'react';
import * as Tone from 'tone';

export type AudioPlayerHandle = {
  startMusic: () => void;
};

const AudioPlayer = forwardRef<AudioPlayerHandle>((_, ref) => {
  const musicPlayer = useRef<Tone.Player | null>(null);

  useEffect(() => {
    musicPlayer.current = new Tone.Player({
      url: "/audio/a.mp3",
      loop: true,
      volume: -12,
    }).toDestination();

    return () => {
      musicPlayer.current?.dispose();
    };
  }, []);

  useImperativeHandle(ref, () => ({
    async startMusic() {
      await Tone.start(); // Required to unlock audio context
      musicPlayer.current?.start();
    },
  }));

  return null;
});

AudioPlayer.displayName = 'AudioPlayer';

export default AudioPlayer;
