import { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function VideosSection() {
  const videos = [
    "https://www.youtube-nocookie.com/embed/IU50Let_0aQ?rel=0&modestbranding=1&controls=1",
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="videos" className="py-16 bg-gray-50 flex justify-center">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Vídeos</h2>

        <div className="relative flex items-center justify-center">
          {/* Botão Esquerdo (Só aparece se houver mais de um vídeo) */}
          {videos.length > 1 && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 md:-left-8 top-1/2 transform -translate-y-1/2 
                         bg-gray-800 text-white p-3 rounded-full shadow-md z-10 
                         opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Container Scrollável (Centraliza se houver apenas um vídeo) */}
          <div
            ref={scrollContainerRef}
            className={`flex gap-6 overflow-x-auto scrollbar-hide px-6 w-full max-w-5xl ${
              videos.length === 1 ? "justify-center" : "justify-start"
            }`}
            style={{
              scrollBehavior: "smooth",
              scrollSnapType: "x mandatory",
            }}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="min-w-[340px] md:min-w-[450px] flex justify-center"
              >
                <iframe
                  className="w-full h-64 rounded-lg shadow-md"
                  src={video}
                  title={`Vídeo ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>

          {/* Botão Direito (Só aparece se houver mais de um vídeo) */}
          {videos.length > 1 && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 md:-right-8 top-1/2 transform -translate-y-1/2 
                         bg-gray-800 text-white p-3 rounded-full shadow-md z-10 
                         opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
