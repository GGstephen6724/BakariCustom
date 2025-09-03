"use client";

import { useState, useEffect } from "react";

interface CarouselProps {
  videos: string[];
  interval?: number;
}

export default function Carousel({ videos, interval = 8000 }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!videos || videos.length === 0) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, interval);

    return () => clearInterval(timer);
  }, [videos, interval]);

  if (!videos || videos.length === 0) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <video
        src= {videos[current]} // must be "/video.mp4" from public/
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
