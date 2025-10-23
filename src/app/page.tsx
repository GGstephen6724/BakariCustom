"use client";

import { useState, useRef } from "react";
import Navbar from "../../components/navbar";
import FadeIn from "../../components/FadeIn";

export default function Home() {
  const videos = ["chocolate-cake.mp4", "vanilla.mp4", "mixing.mp4"];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  // Gallery images
  const galleryImages = [
    "/public/image1.JPG",
    "/public/image2.JPG",
    "/public/image3.JPG",
    "/public/image4.JPG",
    "/public/image5.JPG",
    "/public/image6.JPG",
    "/public/image7.JPG",
    "/public/image8.JPG",
  ];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Deck of images state
  const images = [
    "/public/brownie.JPG",
    "/public/cake.JPG",
    "/public/bagels.JPG",
    "/public/custom_cake.JPG",
    "/public/tart.JPG",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <main className="relative w-full h-full overflow-x-hidden font-poppins">
      <Navbar/>

      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative z-0 flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-6 lg:px-8">
        <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        disablePictureInPicture
        controls={false}
        onEnded={handleVideoEnd}
        key={videos[currentVideoIndex]} // force re-render when source changes
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none"
      >
        <source src={`/${videos[currentVideoIndex]}`} type="video/mp4" />
      </video>
        <FadeIn>
          <div className="px-4 sm:px-6 py-8 sm:py-12 bg-white/20 backdrop-blur-md rounded-2xl max-w-xl sm:max-w-2xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-4">
              Sweet Treats Made Just For You
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white drop-shadow-md">
              Freshly baked every Wednesday. Place your custom orders today!
            </p>
            <a href="/order">
              <button className="mt-6 bg-pink-500 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-xl text-base sm:text-lg hover:bg-pink-600 transition">
                Schedule an Order
              </button>
            </a>
          </div>
        </FadeIn>
      </section>

      {/* About Section */}
<section
  id="about"
  className="relative z-10 flex flex-col sm:flex-row items-start justify-center text-left py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto gap-8"
>
  {/* Left: Deck of Images */}
  <div
    className="w-full sm:w-1/2 flex justify-center sm:justify-start relative h-64 sm:h-96 md:h-[28rem] lg:h-[32rem] cursor-pointer"
    onClick={handleClick}
    aria-label="Image deck - click to cycle"
  >
    {images.map((img, index) => {
      const totalImages = images.length;
      const offsetIndex = (index - currentIndex + totalImages) % totalImages;
      const isTop = offsetIndex === 0;

      const cornerOffset = 18; 
      const yOffsetFactor = 0.5; 
      const rotationStep = 2.5; 

      const x = offsetIndex * cornerOffset; 
      const y = offsetIndex * cornerOffset * yOffsetFactor; 
      const rotate = (offsetIndex - 1) * rotationStep; 

      const zIndex = totalImages - offsetIndex;
      const scale = isTop ? 1 : 0.96;

      return (
        <img
          key={img}
          src={img}
          alt={`Dessert ${index + 1}`}
          className="absolute top-6 left-6 w-40 sm:w-56 md:w-64 lg:w-80 rounded-2xl shadow-xl transition-transform duration-300 will-change-transform"
          style={{
            transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotate}deg)`,
            zIndex,
            objectFit: "cover",
          }}
        />
      );
    })}
  </div>

  {/* Right: Text */}
  <div className="w-full sm:w-1/2 flex flex-col justify-center">
    <FadeIn>
      <div className="space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg">
          About Us
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-white/90 font-medium leading-relaxed drop-shadow-md">
          At BakariCustom, we believe every sweet treat should be as unique as the person enjoying it. Our handcrafted desserts are made with love, creativity, and only the freshest ingredients, turning every bite into a moment to savor.
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-white/90 font-medium leading-relaxed drop-shadow-md">
          From decadent chocolate brownies to custom birthday and wedding cakes, every order is carefully crafted to match your vision. We specialize in bringing your dessert dreams to life, whether it’s a simple treat or a show-stopping centerpiece.
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-white/90 font-medium leading-relaxed drop-shadow-md">
          Baking isn’t just our craft — it’s our passion. Each dessert is baked fresh every Wednesday, ensuring you receive quality, flavor, and artistry in every creation. Your satisfaction is our priority, and we love making every occasion a little sweeter.
        </p>
      </div>
    </FadeIn>
  </div>
</section>


      {/* Contact Section */}
      <FadeIn>
  <section id="contact" className="relative w-full py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 bg-white/20 backdrop-blur-md rounded-2xl p-8">
      {/* Left: Contact Text */}
      <div className="flex-1 text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
          Contact Us
        </h2>
        <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
          Reach out via any of the options on the right, or scan our Instagram QR code below!
        </p>
      </div>

      {/* Right: Social Media Buttons + QR */}
      <div className="flex-1 flex flex-col items-center lg:items-end gap-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://www.instagram.com/bakaricustom/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition"
          >
            Instagram
          </a>
          <a
            href="mailto:youremail@example.com"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition"
          >
            Email
          </a>
          <a
            href="tel:+1234567890"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition"
          >
            Phone
          </a>
        </div>

        {/* QR Code */}
        <div className="mt-10">
          <img
            src="/bakaricustom_qr.png"
            alt="Instagram QR Code"
            className="w-44 h-44 sm:w-52 sm:h-52 rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  </section>
</FadeIn>

      {/* Gallery Section */}
      <section id="gallery" className="relative z-10 flex flex-col items-center justify-center text-center py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg mb-8">
            Gallery
          </h2>

          {/* Responsive Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img) => (
              <img
                key={img}
                src={img}
                alt="Dessert"
                className="w-full h-auto rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <img
                src={selectedImage}
                alt="Enlarged Dessert"
                className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
              />
            </div>
          )}
        </FadeIn>
      </section>

      {/* Footer Section */}
      <footer className="relative z-10 bg-gray-900 text-gray-300 py-8 px-6 mt-12">
  <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
    {/* Left: Logo / Brand */}
    <div className="mb-4 sm:mb-0 text-white font-bold text-xl">
      BakariCustom
    </div>

    {/* Center: Copyright */}
    <div className="text-sm text-gray-400 mb-4 sm:mb-0">
      &copy; 2025 BakariCustom. All rights reserved.
    </div>

    {/* Right: Social Links */}
    <div className="flex gap-6">
      {[
        { name: "Instagram", href: "https://www.instagram.com/bakaricustom/" },
        { name: "Email", href: "mailto:youremail@example.com" },
        { name: "Phone", href: "tel:+1234567890" },
      ].map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group text-gray-300 hover:text-white transition-colors duration-300"
        >
          {link.name}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}
    </div>
  </div>
</footer>
    </main>
  );
}
