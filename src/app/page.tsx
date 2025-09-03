"use client";
import { useState, useRef } from "react";
import Navbar from "../../components/navbar";
import About from "../../components/About";
import Gallery from "../../components/Gallery";
import Contact from "../../components/Contact";
import FadeIn from "../../components/FadeIn";

export default function Home() {
  const videos = ["chocolate-cake.mp4", "vanilla.mp4", "mixing.mp4"];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <main className="relative w-full h-full overflow-x-hidden font-poppins">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
          onEnded={handleVideoEnd}
          key={currentVideoIndex}
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
        </video>

        <FadeIn>
          <div className="px-6 py-12 bg-white/20 backdrop-blur-md rounded-2xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-white drop-shadow-lg mb-4">
              Sweet Treats Made Just For You
            </h1>
            <p className="text-lg sm:text-xl text-white drop-shadow-md">
              Freshly baked every Wednesday. Place your custom orders today!
            </p>
            <a href="/order">
              <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-xl text-lg hover:bg-pink-600 transition">
                Schedule an Order
              </button>
            </a>
          </div>
        </FadeIn>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative z-10 flex flex-col items-center justify-center text-center py-32 px-6 max-w-4xl mx-auto"
      >
        <FadeIn>
          <div className="space-y-6">
            <h2 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6">
              About Us
            </h2>
            <p className="text-lg sm:text-xl text-white/90 font-medium leading-relaxed drop-shadow-md">
              We create handcrafted, custom treats made with love and the freshest
              ingredients. Every order is baked to perfection, just for you.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 flex flex-col items-center justify-center text-center 
                   py-24 px-6 bg-white/10 backdrop-blur-md max-w-5xl mx-auto my-12 shadow-lg"
      >
        <FadeIn>
          <Contact />
        </FadeIn>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="relative z-10 flex flex-col items-center justify-center text-center py-32 px-6 max-w-4xl mx-auto"
      >
        <FadeIn>
          <div className="space-y-6">
            <h2 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6">
              Gallery
            </h2>
            <p className="text-lg sm:text-xl text-white/90 font-medium leading-relaxed drop-shadow-md">
              We create handcrafted, custom treats made with love and the freshest
              ingredients. Every order is baked to perfection, just for you.
            </p>
          </div>
        </FadeIn>
      </section>
      
    </main>
  );
}
