import React from "react";
import { Github, Twitter, Linkedin, Heart } from "lucide-react";
import "../styles/footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Simulamos el progreso del curso
  const courseProgress = 65; // porcentaje

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>React Aprende</h3>
            <p>
              Una plataforma interactiva para aprender React desde cero hasta
              conceptos avanzados. Practica con ejemplos reales y construye tu
              conocimiento paso a paso.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Temas del Curso</h3>
            <ul className="footer-links">
              <li>
                <a href="/estados">Estados y Hooks</a>
              </li>
              <li>
                <a href="/eventos">Manejo de Eventos</a>
              </li>
              <li>
                <a href="/formularios">Formularios</a>
              </li>
              <li>
                <a href="/efectos">Efectos y Ciclo de Vida</a>
              </li>
              <li>
                <a href="/comunicacion">Comunicación entre Componentes</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Recursos</h3>
            <ul className="footer-links">
              <li>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentación Oficial
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Ejemplos de Código
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Ejercicios Prácticos
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Comunidad
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Tu Progreso</h3>
            <p>Has completado {courseProgress}% del curso</p>
            <div className="footer-progress">
              <div
                className="progress-bar"
                style={{ width: `${courseProgress}%` }}
              ></div>
            </div>
            <p style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
              ¡Sigue así! Estás haciendo un gran progreso.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} React Aprende. Hecho con{" "}
            <Heart size={16} style={{ display: "inline", color: "#ef4444" }} />{" "}
            para la comunidad de desarrolladores.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
