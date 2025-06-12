import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  Zap,
  Users,
  BookOpen,
  Target,
  Sparkles,
} from "lucide-react";
import Layout from "../components/Layout";

const Inicio: React.FC = () => {
  const features = [
    {
      icon: <Code size={40} />,
      title: "Aprende Haciendo",
      description:
        "Practica con ejemplos interactivos y ve los resultados en tiempo real.",
      color: "#3b82f6",
    },
    {
      icon: <Zap size={40} />,
      title: "Conceptos Modernos",
      description:
        "Hooks, estado, efectos y las mejores prácticas de React actualizadas.",
      color: "#10b981",
    },
    {
      icon: <Users size={40} />,
      title: "Paso a Paso",
      description:
        "Desde conceptos básicos hasta temas avanzados, de forma progresiva.",
      color: "#f59e0b",
    },
  ];

  const topics = [
    {
      title: "Estados y Hooks",
      description: "Aprende a manejar el estado con useState y otros hooks",
      path: "/estados",
      difficulty: "Básico",
      color: "#3b82f6",
    },
    {
      title: "Manejo de Eventos",
      description: "Interactúa con el usuario capturando eventos",
      path: "/eventos",
      difficulty: "Básico",
      color: "#10b981",
    },
    {
      title: "Temas Dinámicos",
      description: "Cambia la apariencia de tu aplicación dinámicamente",
      path: "/temas",
      difficulty: "Intermedio",
      color: "#f59e0b",
    },
    {
      title: "Formularios",
      description: "Maneja formularios complejos con validación",
      path: "/formularios",
      difficulty: "Intermedio",
      color: "#ef4444",
    },
    {
      title: "Listas y Keys",
      description: "Renderiza listas dinámicas eficientemente",
      path: "/listas",
      difficulty: "Básico",
      color: "#8b5cf6",
    },
    {
      title: "Efectos",
      description: "useEffect y el ciclo de vida de los componentes",
      path: "/efectos",
      difficulty: "Avanzado",
      color: "#06b6d4",
    },
  ];

  return (
    <Layout>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <div className="page-header">
          <h1 className="page-title">
            Aprende React de Forma{" "}
            <span className="gradient-text">Interactiva</span>
          </h1>
          <p className="page-subtitle">
            Domina React desde cero con ejemplos prácticos, ejercicios
            interactivos y explicaciones claras. Tu viaje hacia el desarrollo
            frontend profesional comienza aquí.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              marginTop: "2rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/estados"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2rem",
                backgroundColor: "var(--primary-color)",
                color: "white",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(59, 130, 246, 0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Target size={20} />
              Comenzar Ahora
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2rem",
                backgroundColor: "var(--surface)",
                color: "var(--text-primary)",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: "600",
                border: "2px solid var(--border)",
                transition: "all 0.3s ease",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "var(--border)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "var(--surface)";
              }}
            >
              <BookOpen size={20} />
              Documentación
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid-layout">
          {features.map((feature, index) => (
            <div
              key={index}
              className="content-section"
              style={{
                textAlign: "center",
                borderTop: `4px solid ${feature.color}`,
              }}
            >
              <div
                style={{
                  color: feature.color,
                  marginBottom: "1rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{ marginBottom: "1rem", color: "var(--text-primary)" }}
              >
                {feature.title}
              </h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Topics Section */}
        <div style={{ marginTop: "4rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "3rem",
              color: "var(--text-primary)",
            }}
          >
            Explora los{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Temas
            </span>
          </h2>

          <div className="grid-layout">
            {topics.map((topic, index) => (
              <Link
                key={index}
                to={topic.path}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  className="content-section"
                  style={{
                    borderLeft: `4px solid ${topic.color}`,
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "1rem",
                    }}
                  >
                    <h3
                      style={{
                        color: "var(--text-primary)",
                        margin: 0,
                        fontSize: "1.25rem",
                      }}
                    >
                      {topic.title}
                    </h3>
                    <span
                      style={{
                        backgroundColor: topic.color,
                        color: "white",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "12px",
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {topic.difficulty}
                    </span>
                  </div>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                      marginBottom: "1rem",
                    }}
                  >
                    {topic.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: topic.color,
                      fontWeight: "600",
                    }}
                  >
                    <Sparkles size={16} />
                    Explorar tema
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="content-section"
          style={{
            textAlign: "center",
            marginTop: "4rem",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            border: "none",
          }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            ¿Listo para Comenzar?
          </h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "2rem", opacity: 0.9 }}>
            Únete a miles de desarrolladores que han aprendido React con nuestra
            plataforma interactiva.
          </p>
          <Link
            to="/estados"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2rem",
              backgroundColor: "white",
              color: "#667eea",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "700",
              fontSize: "1.1rem",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <Target size={20} />
            Empezar Tutorial
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Inicio;
