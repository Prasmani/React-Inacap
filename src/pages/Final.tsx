import React from "react";
import Layout from "../components/Layout";
import { Trophy, Star, Rocket } from "lucide-react";

const Final: React.FC = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <div className="page-header">
          <h1 className="page-title">¡Felicitaciones!</h1>
          <p className="page-subtitle">
            Has completado tu viaje de aprendizaje de React. ¡Es hora de
            construir proyectos increíbles!
          </p>
        </div>

        <div className="content-section text-center">
          <Trophy
            size={120}
            style={{ color: "#f59e0b", marginBottom: "2rem" }}
          />
          <h2 style={{ marginBottom: "2rem", color: "#f59e0b" }}>
            🎉 ¡Curso Completado!
          </h2>

          <div className="grid-layout">
            <div className="content-section">
              <Star
                size={40}
                style={{ color: "var(--accent-color)", marginBottom: "1rem" }}
              />
              <h3>Conceptos Dominados</h3>
              <ul style={{ textAlign: "left", color: "var(--text-secondary)" }}>
                <li>• Estados y Hooks</li>
                <li>• Manejo de Eventos</li>
                <li>• Formularios</li>
                <li>• Efectos y Ciclo de Vida</li>
                <li>• Comunicación entre Componentes</li>
              </ul>
            </div>

            <div className="content-section">
              <Rocket
                size={40}
                style={{ color: "var(--success-color)", marginBottom: "1rem" }}
              />
              <h3>Próximos Pasos</h3>
              <ul style={{ textAlign: "left", color: "var(--text-secondary)" }}>
                <li>• Construye proyectos reales</li>
                <li>• Aprende React Router</li>
                <li>• Explora librerías populares</li>
                <li>• Contribuye a proyectos open source</li>
                <li>• Comparte tu conocimiento</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              marginTop: "3rem",
              padding: "2rem",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: "1rem",
              color: "white",
            }}
          >
            <h3 style={{ marginBottom: "1rem" }}>
              ¡Sigue construyendo cosas increíbles!
            </h3>
            <p>
              React es una herramienta poderosa, pero la verdadera maestría
              viene con la práctica. Sigue experimentando, construyendo y
              aprendiendo.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Final;
