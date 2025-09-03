// components/Gallery.tsx
export default function Gallery() {
  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
  ];

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Baked item ${idx + 1}`}
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      ))}
    </div>
  );
}
