"use client"; // This is a client component 👈🏽

import { ReactNode } from "react";
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  // Typzusicherung, dass children ein String ist
  const text = typeof children === 'string' ? children : '';

  return (
    <div className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
    <TypeAnimation
      sequence={[
        text,
        1000, // Wartezeit
      ]}
      wrapper="h1"
      speed={50}
      //style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>
  );
}
