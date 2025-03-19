import { MapPin, Phone, Clock, Menu, X } from "lucide-react";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./stile.css";
import "./telas-menor.css";
import Sobre from "./sobre/Sobre";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image5 from "./images/5.png";
import image7 from "./images/7.png";
import image10 from "./images/10.png";
import image11 from "./images/11.png";
import fisio from "./images/fisio.png";
import logo from "./images/logo.png";

import insta from "./images/insta.png";
import tick from "./images/tick.png";
import you from "./images/you.png";
import wha from "./images/wha.png";

import i1 from "./images/scrow/1.png";
import i2 from "./images/scrow/2.png";
import i3 from "./images/scrow/3.png";
import i4 from "./images/scrow/4.png";

import VideosSection from "./Videos/Videos";

import Depoiments from "./Depoiments/Depoiments";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [isSobreOpen, setIsSobreOpen] = useState(false);

  const closeModal = () => setSelectedService(null);

  const [numToShow, setNumToShow] = useState(6);
  const [expanded, setExpanded] = useState(false); // Controla se está expandido

  const handleShowMore = () => {
    setNumToShow(services.length); // Exibe todos os serviços
    setExpanded(true);
  };

  const handleShowLess = () => {
    setNumToShow(6); // Volta para exibir apenas 6 serviços
    setExpanded(false);
  };

  const images = [i1, i2, i3, i4];

  // Configurações do Slick Carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Troca de imagem a cada 3 segundos
  };
  const [nome, setNome] = useState("");
  const [servico, setServico] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construir a mensagem com as informações do formulário
    const mensagem = `Olá, gostaria de agendar uma consulta.\n\nNome: ${nome}\nServiço: ${servico}\n\nDescrição: ${descricao}`;

    // Substitua '<seu_numero_whatsapp>' pelo número de WhatsApp de destino
    const numeroWhatsapp = "5588997015525"; // Exemplo: +55 (31) 99999-9999

    // Gerar o link do WhatsApp com a mensagem
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
      mensagem
    )}`;

    // Redirecionar para o link do WhatsApp
    window.open(urlWhatsapp, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#inicio">
                <img
                  src={logo}
                  alt="Minha Logo"
                  className="h-12 w-auto cursor-pointer"
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="nav-link">
                Início
              </a>
              <button onClick={() => setIsSobreOpen(true)} className="nav-link">
                Sobre
              </button>

              <a href="#servicos" className="nav-link">
                Serviços
              </a>
              <a href="#agendamento" className="nav-link">
                Agendamento
              </a>
              <a href="#videos" className="nav-link">
                Vídeos
              </a>
              <a href="#depoimentos" className="nav-link">
                Depoimentos
              </a>
              <a href="#contato" className="nav-link">
                Contato
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mobile-menu">
              <a
                href="#inicio"
                className="mobile-menu-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <button
                onClick={() => {
                  setIsSobreOpen(true);
                  setIsMenuOpen(false); // Fecha o menu ao clicar em "Sobre"
                }}
                className="mobile-menu-link"
              >
                Sobre
              </button>
              <a
                href="#servicos"
                className="mobile-menu-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#agendamento"
                className="mobile-menu-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Agendamento
              </a>
              <a
                href="#videos"
                className="mobile-menu-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Vídeos
              </a>
              <a
                href="#depoimentos"
                className="mobile-menu-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a
                href="#contato"
                className="mobile-menu-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </div>
          )}
          <Sobre isOpen={isSobreOpen} onClose={() => setIsSobreOpen(false)} />
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-16">
        <div className="hero-section relative min-h-[400px]">
          {/* Ajuste a altura conforme necessário */}
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Imagem Hero ${index + 1}`}
                  className="images" // Remova h-full para evitar que a imagem ocupe toda a altura
                />
              </div>
            ))}
          </Slider>
          <div className="hero-overlay absolute top-0 left-0 w-full h-full">
            <div className="container mx-auto px-4">
              {/* Imagem acima do título */}
              <img
                src={fisio}
                alt="Descrição da Imagem"
                className="pefil-img"
              />
              <h1 className="name">Dra. Tainá Sousa</h1>
              <p className="descricao-name">
                Cuidando da sua saúde com excelência e dedicação
              </p>
              <a href="#agendamento" className="primary-button">
                Agende sua Consulta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, numToShow).map((service, index) => (
              <div key={index} className="service-card">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <h3 className="service-title">{service.title}</h3>
                <p className="text-gray-600 line-clamp-3">
                  {service.description}
                </p>
                <button
                  onClick={() => setSelectedService(index)}
                  className="service-button"
                >
                  Ler mais
                </button>
              </div>
            ))}
          </div>

          {/* Botões "Mostrar mais" e "Mostrar menos" */}
          <div className="text-center mt-8">
            {!expanded && numToShow < services.length && (
              <button onClick={handleShowMore} className="abrir-mais">
                Mostrar mais
              </button>
            )}
            {expanded && (
              <button onClick={handleShowLess} className="abrir-mais">
                Mostrar menos
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            <h3 className="service-title mb-4">
              {services[selectedService].title}
            </h3>
            <img
              src={services[selectedService].image}
              alt={services[selectedService].title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600">
              {services[selectedService].description}
            </p>
            <button className="primary-button mt-6" onClick={closeModal}>
              Fechar
            </button>
          </div>
        </div>
      )}
      <VideosSection />
      {/* Appointment Section */}
      <section id="agendamento" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Agende sua Consulta
          </h2>
          <div className="form-container">
            <form className="form-group" onSubmit={handleSubmit}>
              <div>
                <label className="form-label">Nome Completo</label>
                <input
                  type="text"
                  name="nome"
                  className="form-input"
                  value={nome} // sempre passa o estado
                  onChange={(e) => setNome(e.target.value)} // atualiza o estado
                  required
                />
              </div>

              <div>
                <label className="form-label">Serviço Desejado</label>
                <select
                  name="servico"
                  className="form-select"
                  value={servico} // sempre passa o estado
                  onChange={(e) => setServico(e.target.value)} // atualiza o estado
                  required
                >
                  <option value="">Escolha um serviço</option>
                  <option value="Escoliose">Escoliose</option>
                  <option value="Fisioterapia Respiratória">
                    Fisioterapia Respiratória
                  </option>
                  <option value="Fisioterapia Neurológica">
                    Fisioterapia Neurológica
                  </option>
                  <option value="Pilates Clínico">Pilates Clínico</option>
                  <option value="Fisioterapia Domiciliar">
                    Fisioterapia Domiciliar
                  </option>
                  <option value="Fisioterapia Geriática">
                    Fisioterapia Geriática
                  </option>
                  <option value="Fisioterapia Cardiológica">
                    Fisioterapia Cardiológica
                  </option>
                  <option value="Fisioterapia Ortopédica">
                    Fisioterapia Ortopédica
                  </option>
                  <option value="Fisioterapia Desportiva">
                    Fisioterapia Desportiva
                  </option>
                </select>
              </div>

              <div>
                <label className="form-label">Descreva seus sintomas</label>
                <textarea
                  name="descricao"
                  className="form-input"
                  rows={4}
                  value={descricao} // sempre passa o estado
                  onChange={(e) => setDescricao(e.target.value)} // atualiza o estado
                  required
                ></textarea>
              </div>

              <button type="submit" className="form-button">
                Solicitar Agendamento
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

      <Depoiments />

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Contato
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <p>R. Chagas Bezerra, 75 - Várzea Alegre, CE, 63540-000</p>
                </div>
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <p>(88) 9 9701-5525</p>
                </div>

                <div className="contact-item">
                  <Clock className="contact-icon" />
                  <p>Segunda a Sexta: 8h às 20h</p>
                </div>
              </div>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.820586284855!2d-39.29602032409478!3d-6.791673566424104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a3b49dc5597b9f%3A0x62aee1d06b13b2bb!2sR.%20Chagas%20Bezerra%2C%2075%20-%20V%C3%A1rzea%20Alegre%2C%20CE%2C%2063540-000!5e0!3m2!1spt-BR!2sbr!4v1723305039565!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-8">
        <div className="container mx-auto px-4">
          {/* Informações */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#inicio"
                    className="text-gray-600 hover:text-white transition"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="text-gray-600 hover:text-white transition"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#agendamento"
                    className="text-gray-600 hover:text-white transition"
                  >
                    Agendamento
                  </a>
                </li>
                <li>
                  <a
                    href="#videos"
                    className="text-gray-600 hover:text-white transition"
                  >
                    Vídeos
                  </a>
                </li>
                <li>
                  <a
                    href="#depoimentos"
                    className="text-gray-600 hover:text-white transition"
                  >
                    Depoimentos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Horário de Funcionamento
              </h3>
              <p className="text-gray-600">Segunda a Sexta: 8h às 20h</p>
              <p className="text-gray-600">Sábado: 8h às 12h</p>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="text-center">
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="https://www.instagram.com/dra_tai_sousa_costa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={insta}
                  alt="Instagram"
                  className="w-10 h-10 hover:opacity-80"
                />
              </a>
              <a
                href="https://www.tiktok.com/@tai_fisio34?_t=ZM-8uoorGfaVK1&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={tick}
                  alt="TikTok"
                  className="w-10 h-10 hover:opacity-80"
                />
              </a>
              <a
                href="https://www.youtube.com/@Dra.Tain%C3%A1Sousa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={you}
                  alt="YouTube"
                  className="w-10 h-10 hover:opacity-80"
                />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-600 text-sm">
            &copy; 2024 Dra. Taina Sousa. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/5588997015525"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-button"
      >
        <img
          src={wha}
          alt="WhatsApp"
          className="w-9 h-9 rounded-full bg-transparent"
        />
      </a>
    </div>
  );
}

// Data
const services = [
  {
    title: "Fisioterapia Respiratoria",
    description:
      "A Fisioterapia Respiratória utiliza técnicas de tratamento não invasivas que tem como objetivo a otimização da ventilação pulmonar, contribuindo na prevenção e reabilitação das disfunções respiratórias, promovendo melhora na qualidade de vida de seus pacientes.",
    image: image10,
  },
  {
    title: "Fiseoterapia Especializada em Escoliose",
    description:
      "Visa a reorganização dos segmentos corporais, é fundamental para o tratamento de alterações fisiológicas na coluna vertebral, como escoliose, hiperlordose lombar e hipercifose torácica.",
    image: image11,
  },
  {
    title: "Fisioterapia Domiciliar",
    description:
      "A fisioterapia domiciliar é indicada para pacientes que não conseguem ou encontram-se com dificuldade de sair de casa. A FISIOlife oferece a seus clientes assistência fisioterapêutica domiciliar nas disfunções neurológicas, respiratórias e musculoesqueléticas.",
    image: image3,
  },
  {
    title: "Fisioterapia Geriátrica",
    description:
      "A fisioterapia geriátrica atua nas alterações fisiológicas decorrentes do envelhecimento humano. A reabilitação tem como objetivo reestabelecer a independência funcional e qualidade de vida da. O tratamento é realizado através de exercícios passivos, ativos, treino de marcha e equilíbrio, permitindo melhor força e mobilidade e coordenação para realizar as atividades da vida diária.",
    image: image5,
  },
  {
    title: "Pilates Clínico",
    description:
      "Exercícios personalizados para fortalecimento, flexibilidade e equilíbrio, adaptados às suas necessidades. O Pilates Clínico combina os princípios tradicionais do método Pilates com conhecimentos específicos da fisioterapia. Ideal para reabilitação, melhora da postura, fortalecimento do core, prevenção de lesões e condicionamento físico geral. Oferecemos aulas em equipamentos específicos e exercícios de solo, sempre com acompanhamento individualizado.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Fisioterapia Ortopédica",
    description:
      "Tratamento especializado para lesões musculoesqueléticas, recuperação pós-cirúrgica e dores crônicas. Nossa equipe altamente qualificada utiliza técnicas modernas e equipamentos de última geração para garantir sua recuperação. Tratamos condições como: lesões esportivas, artrite, dores na coluna, tendinites, reabilitação pós-cirúrgica, problemas posturais e muito mais. Cada tratamento é personalizado de acordo com suas necessidades específicas.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Fisioterapia Neurológica",
    description:
      "Reabilitação para pacientes com condições neurológicas, focando na recuperação funcional e qualidade de vida. Nosso programa abrangente inclui exercícios terapêuticos, treino de marcha, estimulação sensorial e atividades funcionais. Atendemos pacientes com AVC, Parkinson, Esclerose Múltipla, lesões medulares e outras condições neurológicas. Nossa abordagem multidisciplinar visa maximizar a independência e bem-estar dos pacientes.",
    image: image7,
  },

  {
    title: "Fisioterapia Cardiológica",
    description:
      "A fisioterapia na reabilitação cardíaca tem papel fundamental no tratamento de doenças como insuficiência cardíaca, infarto do miocárdio, doenças coronarianas e valvares, cardiopatias congênitas e doenças artérias venosas. O tratamento é realizado após uma avaliação clínica/funcional. Exercícios são prescritos e monitorados de acordo com a individualidade de cada paciente.",
    image: image1,
  },
  {
    title: "Fisioterapia Desportiva",
    description:
      "A fisioterapia na reabilitação cardíaca tem papel fundamental no tratamento de doenças como insuficiência cardíaca, infarto do miocárdio, doenças coronarianas e valvares, cardiopatias congênitas e doenças artérias venosas. O tratamento é realizado após uma avaliação clínica/funcional. Exercícios são prescritos e monitorados de acordo com a individualidade de cada paciente.",
    image: image2,
  },
];

export default App;
