import { X } from "lucide-react"; // Ícone de fechar
import "./styles.css";
import Fisio from "../images/fisio.png";

interface SobreProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sobre: React.FC<SobreProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Não renderiza se isOpen for falso

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        <h2 className="modal-title">
          <strong>Dra. Tainá Sousa</strong>{" "}
        </h2>

        {/* Foto e descrição */}
        <div className="modal-body">
          <img src={Fisio} alt="Dra. Tainá Sousa" className="modal-image" />
          <div className="modal-text">
            <p>
              Especialista em uma ampla gama de áreas da fisioterapia e terapias
              complementares, com uma abordagem focada na recuperação e
              bem-estar dos pacientes.
            </p>

            <ul>
              <li>
                <strong>Fisioterapia Especializada em Escoliose:</strong>
                Tratamento personalizado para correção postural e alívio de
                desconfortos, utilizando técnicas avançadas para melhorar a
                mobilidade e a qualidade de vida.
              </li>

              <li>
                <strong>Fisioterapia Neurológica:</strong> Atendimento
                especializado para pacientes com condições neurológicas,
                utilizando técnicas avançadas para promover a recuperação e a
                funcionalidade.
              </li>
              <li>
                <strong>Pilates:</strong> Implementação de exercícios
                personalizados para melhorar a força, flexibilidade e controle
                corporal, adaptados para atender às necessidades individuais.
              </li>
              <li>
                <strong>Fisioterapia Geral:</strong> Abordagem holística para
                tratar uma variedade de condições musculoesqueléticas e
                ortopédicas, promovendo a recuperação e o bem-estar geral.
              </li>
              <li>
                <strong>Fisioterapia Cardiorrespiratória:</strong> Tratamento de
                condições cardíacas e respiratórias, focando na reabilitação e
                no aumento da capacidade funcional.
              </li>
              <li>
                <strong>Fisioterapia Pélvica:</strong> Especialização no manejo
                de disfunções pélvicas e uro-ginecológicas, proporcionando
                alívio e melhorando a qualidade de vida dos pacientes.
              </li>
              <li>
                <strong>Fisioterapia Geriátrica:</strong> Cuidados direcionados
                a idosos para manter e melhorar a mobilidade, força e
                independência, abordando questões específicas do envelhecimento.
              </li>
              <li>
                <strong>Fisioterapia Funcional:</strong> Implementação de
                estratégias para restaurar e melhorar a função física, com
                ênfase na reabilitação funcional e na prevenção de lesões.
              </li>
              <li>
                <strong>Neurofuncional:</strong> Integração de abordagens
                neurológicas e funcionais para tratar e reabilitar pacientes com
                condições neuromusculares e neurológicas.
              </li>
              <li>
                <strong>Pediatria:</strong> Atendimento especializado para
                crianças, focando no desenvolvimento motor e na reabilitação de
                condições pediátricas.
              </li>
              <li>
                <strong>Redução Postural e Global:</strong> Aplicação de
                técnicas para melhorar a postura e promover a correção postural,
                contribuindo para a saúde global do paciente.
              </li>
              <li>
                <strong>Terapias Complementares com Combos Relaxantes:</strong>{" "}
                Oferecimento de terapias complementares que integram técnicas
                relaxantes e restauradoras para um bem-estar holístico.
              </li>
            </ul>
          </div>
        </div>

        {/* Botão de contato via WhatsApp */}
        <div className="modal-buttons">
          <a
            href="https://wa.me/5588997015525" // Substituir pelo número real
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            📲 Fale comigo no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
