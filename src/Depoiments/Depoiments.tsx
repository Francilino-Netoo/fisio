import { useEffect, useRef, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react"; // Ícones de setas

interface Testimonial {
  name: string;
  title: string;
  text: string;
  image: string;
}

const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll(); // Verifica no início
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350; // Define o quanto rolar (ajuste se necessário)
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="depoimentos" className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Depoimentos
        </h2>
        <div className="relative">
          {/* Botão de rolagem para a esquerda */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-400/60 text-white p-2 rounded-full shadow-md transition-opacity hover:bg-gray-600 cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Depoimentos */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex space-x-6 overflow-x-auto scrollbar-hide p-4"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card min-w-[300px] max-w-[350px] bg-white p-6 rounded-lg shadow-md"
              >
                <p className="testimonial-text text-gray-700 mb-4">
                  "{testimonial.text}"
                </p>
                <div className="testimonial-author flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botão de rolagem para a direita */}
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-400/60 text-white p-2 rounded-full shadow-md transition-opacity hover:bg-gray-600 cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

// ✅ Depoimentos de exemplo
const testimonialsData: Testimonial[] = [
  {
    name: "Maria Silva",
    title: "Paciente de Fisioterapia Ortopédica",
    text: "Excelente atendimento! Após 6 sessões, minha dor lombar melhorou significativamente. Profissionais muito competentes.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "João Santos",
    title: "Paciente de RPG",
    text: "As sessões de RPG mudaram minha postura completamente. Não sinto mais as dores que me incomodavam há anos.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Fernanda Oliveira",
    title: "Paciente de Pilates",
    text: "A prática de Pilates aqui mudou minha rotina. Me sinto muito mais forte e flexível!",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Carlos Mendes",
    title: "Paciente de Acupuntura",
    text: "Nunca pensei que acupuntura faria tanta diferença na minha qualidade de vida. Recomendo muito!",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
];

export default function App() {
  return <Testimonials testimonials={testimonialsData} />;
}
