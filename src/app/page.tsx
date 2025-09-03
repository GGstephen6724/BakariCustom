"use client";
import { useState, useRef } from "react";
import Navbar from "../../components/navbar";
import About from "../../components/About";
import Gallery from "../../components/Gallery";
import Contact from "../../components/Contact";
import OrderForm from "../../components/orderForm";
import FadeIn from "../../components/FadeIn";

export default function Home() {

    const videos = ["chocolate-cake.mp4", "vanilla.mp4", "mixing.mp4"]; // list of videos
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <main className="relative w-full h-full overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <FadeIn>
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
          key={currentVideoIndex} // forces reload when index changes
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
        </video>

        <div className="px-6 py-12 bg-white/20 backdrop-blur-md rounded-2xl">
          <h1 className="text-5xl sm:text-6xl font-bold text-white drop-shadow-lg mb-4">
            Sweet Treats Made Just For You
          </h1>
          <p className="text-lg sm:text-xl text-white drop-shadow-md">
            Freshly baked every Wednesday. Place your custom orders today!
          </p>
          <a href="#about">
            <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-xl text-lg hover:bg-pink-600 transition">
              Schedule an Order
            </button>
          </a>
        </div>
      </section>
      </FadeIn>

      {/* About Section */}
      <FadeIn delay={0.2}>
      <section
        id="about"
        className="relative z-10 flex flex-col items-center justify-center text-center py-32 px-6 max-w-4xl mx-auto"
      >
  <h2 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6">
    About Us
  </h2>
  <p className="text-lg sm:text-xl text-white/90 font-medium leading-relaxed drop-shadow-md">
    We create handcrafted, custom treats made with love and the freshest
    ingredients. Every order is baked to perfection, just for you.
  </p>
</section>
</FadeIn>

      {/* Contact Section */}
      <FadeIn delay={0.6}>
      <section
        id="contact"
        className="relative z-10 flex flex-col items-center justify-center text-center 
             py-24 px-6 bg-white/10 backdrop-blur-md max-w-5xl mx-auto my-12 shadow-lg"
      >
        <Contact />
      </section>
      </FadeIn>

      {/* Order Form Section
      <section
        id="order"
        className="relative z-10 flex flex-col items-center justify-center text-center 
             py-24 px-6 bg-white/10 backdrop-blur-md rounded-2xl max-w-5xl mx-auto my-12 shadow-lg"
             >
        <OrderForm />
      </section> */}

      {/* Gallery Section (Chocolate Glazing Video) */}
      <FadeIn delay={0.8}>
      <section
        id="about"
        className="relative z-10 flex flex-col items-center justify-center text-center py-32 px-6 max-w-4xl mx-auto"
      >
  <h2 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6">
    Gallery
  </h2>
  <p className="text-lg sm:text-xl text-white/90 font-medium leading-relaxed drop-shadow-md">
    We create handcrafted, custom treats made with love and the freshest
    ingredients. Every order is baked to perfection, just for you.
  </p>
</section>
</FadeIn>
    </main>
  );
}
