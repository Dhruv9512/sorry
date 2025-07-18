"use client"
import React from 'react';
import FlowerPetal from './FlowerPetal';

const FallingFlowers = () => {
  const petals = Array.from({ length: 30 });

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 overflow-hidden">
      {petals.map((_, i) => (
        <FlowerPetal key={i} />
      ))}
    </div>
  );
};

export default FallingFlowers;
