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
  Coffee,
  Laugh,
  Rocket,
  Home,
  Palette,
  List,
  Mail
} from "lucide-react";
import Layout from "../components/Layout";

const Inicio: React.FC = () => {
  const features = [
    {
      icon: <Code size={40} />,
      title: "Aprende Haciendo",
      description:
        "Olvídate de las clases teóricas aburridas. En React-INACAP te sumergirás directamente en el código con ejemplos prácticos y proyectos reales que podrás ver en acción inmediatamente. Aprende React construyendo componentes desde el primer día.",
      color: "#E91E63", // Rojo INACAP
      bgColor: "rgba(233, 30, 99, 0.05)"
    },
    {
      icon: <Laugh size={40} />,
      title: "Aprendizaje Sin Presiones",
      description:
        "Sabemos que cada estudiante tiene su propio ritmo. Por eso ofrecemos un ambiente relajado donde puedes cometer errores, experimentar y aprender sin miedo al fracaso. ¡Aquí los errores son oportunidades de aprendizaje!",
      color: "#FF9800", // Naranja INACAP
      bgColor: "rgba(255, 152, 0, 0.05)"
    },
    {
      icon: <Users size={40} />,
      title: "Comunidad Colaborativa",
      description:
        "Únete a una red de estudiantes de INACAP que comparten tus mismos desafíos. Resuelve dudas, comparte tus proyectos y celebra tus logros con compañeros que están en el mismo camino de aprendizaje.",
      color: "#2196F3", // Azul INACAP
      bgColor: "rgba(33, 150, 243, 0.05)"
    },
  ];

  const topics = [
    {
      title: "Estados y Hooks",
      description: "Domina el manejo del estado en componentes funcionales con useState, useEffect y otros hooks esenciales. Aprende a gestionar datos y efectos secundarios como un profesional.",
      path: "/estados",
      difficulty: "Básico",
      color: "#E91E63",
      icon: <Target size={20} />,
    },
    {
      title: "Manejo de Eventos",
      description: "Descubre cómo hacer aplicaciones interactivas que respondan a clicks, formularios y otras acciones del usuario. Desde handlers simples hasta eventos complejos.",
      path: "/eventos",
      difficulty: "Básico",
      color: "#FF9800",
      icon: <Zap size={20} />,
    },
    {
      title: "Estilos Dinámicos",
      description: "Aprende técnicas modernas para estilizar tus componentes React, incluyendo CSS-in-JS, módulos CSS y bibliotecas como styled-components.",
      path: "/temas",
      difficulty: "Intermedio",
      color: "#2196F3",
      icon: <Palette size={20} />,
    },
    {
      title: "Formularios Avanzados",
      description: "Controla formularios complejos con validación, manejo de errores y envío de datos. Aprende a usar bibliotecas como Formik y react-hook-form.",
      path: "/formularios",
      difficulty: "Intermedio",
      color: "#4CAF50",
      icon: <List size={20} />,
    },
    {
      title: "Renderizado de Listas",
      description: "Domina el renderizado eficiente de listas dinámicas, el uso de keys y técnicas de optimización para grandes conjuntos de datos.",
      path: "/listas",
      difficulty: "Básico",
      color: "#9C27B0",
      icon: <Code size={20} />,
    },
    {
      title: "Comunicación entre Componentes",
      description: "Aprende patrones efectivos para compartir datos entre componentes, incluyendo props, context API y composición avanzada.",
      path: "/comunicacion",
      difficulty: "Intermedio",
      color: "#00BCD4",
      icon: <Mail size={20} />,
    },
  ];

  return (
    <Layout>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <div className="page-header" style={{ textAlign: "center", padding: "4rem 1rem" }}>
          <h1 className="page-title" style={{ color: "#E91E63", fontSize: "3rem", marginBottom: "1.5rem" }}>
            <span style={{ color: "#333" }}>React</span>{" "}
            <span style={{ color: "#2196F3" }}>INACAP</span>
          </h1>
          <p className="page-subtitle" style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
            Aprende React{" "}
            <span style={{ fontWeight: "bold", color: "#FF9800" }}>
              de forma práctica y colaborativa
            </span>
          </p>
          <p style={{ 
            maxWidth: "800px", 
            margin: "0 auto", 
            fontSize: "1.1rem",
            lineHeight: "1.7",
            color: "#444"
          }}>
            Plataforma de aprendizaje creada por y para estudiantes de INACAP. Aquí encontrarás recursos prácticos, 
            ejemplos claros y proyectos reales que te ayudarán a dominar React desde cero hasta nivel avanzado.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              justifyContent: "center",
              marginTop: "3rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/estados"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 2.5rem",
                backgroundColor: "#E91E63",
                color: "white",
                textDecoration: "none",
                borderRadius: "50px",
                fontWeight: "600",
                fontSize: "1.1rem",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 6px rgba(233, 30, 99, 0.3)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 6px 15px rgba(233, 30, 99, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(233, 30, 99, 0.3)";
              }}
            >
              <Rocket size={20} />
              Comenzar Aprendizaje
            </Link>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 2.5rem",
                backgroundColor: "white",
                color: "#2196F3",
                textDecoration: "none",
                borderRadius: "50px",
                fontWeight: "600",
                fontSize: "1.1rem",
                border: "2px solid #2196F3",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#E3F2FD";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "white";
              }}
            >
              <BookOpen size={20} />
              Documentación Oficial
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="container" style={{ marginTop: "2rem", padding: "0 1rem" }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "2.2rem",
            fontWeight: "700",
            marginBottom: "3rem",
            color: "#333"
          }}>
            <span style={{ color: "#E91E63" }}>Nuestra</span>{" "}
            <span style={{ color: "#2196F3" }}>Metodología</span>
          </h2>
          
          <div className="grid-layout">
            {features.map((feature, index) => (
              <div
                key={index}
                className="content-section"
                style={{
                  textAlign: "center",
                  borderTop: `4px solid ${feature.color}`,
                  borderRadius: "12px",
                  padding: "2.5rem 1.5rem",
                  transition: "all 0.3s ease",
                  backgroundColor: feature.bgColor
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    color: feature.color,
                    marginBottom: "1.5rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  style={{
                    marginBottom: "1.5rem",
                    color: feature.color,
                    fontSize: "1.5rem",
                    fontWeight: "600"
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    color: "#555",
                    lineHeight: "1.7",
                    fontSize: "1.1rem",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Topics Section */}
        <div className="container" style={{ marginTop: "5rem", padding: "0 1rem" }}>
          <h2
            style={{
              fontSize: "2.2rem",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "3rem",
              color: "#333",
            }}
          >
            <span style={{ color: "#E91E63" }}>Temas</span>{" "}
            <span style={{ color: "#2196F3" }}>Principales</span>
          </h2>

          <div className="grid-layout" style={{ gap: "2rem" }}>
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
                    padding: "2rem",
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                    height: "100%",
                    backgroundColor: "white",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.05)"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = `0 10px 25px ${topic.color}33`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        color: topic.color,
                        display: "flex",
                        alignItems: "center",
                        paddingTop: "0.25rem"
                      }}
                    >
                      {topic.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          color: "#333",
                          margin: "0 0 0.5rem 0",
                          fontSize: "1.3rem",
                          fontWeight: "600"
                        }}
                      >
                        {topic.title}
                      </h3>
                      <span
                        style={{
                          backgroundColor: topic.color,
                          color: "white",
                          padding: "0.25rem 1rem",
                          borderRadius: "12px",
                          fontSize: "0.8rem",
                          fontWeight: "600",
                          display: "inline-block"
                        }}
                      >
                        {topic.difficulty}
                      </span>
                    </div>
                  </div>
                  <p
                    style={{
                      color: "#555",
                      lineHeight: "1.7",
                      marginBottom: "1.5rem",
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
          style={{
            textAlign: "center",
            marginTop: "6rem",
            background: "linear-gradient(135deg, #E91E63 0%, #2196F3 100%)",
            color: "white",
            padding: "5rem 1rem",
          }}
        >
          <div className="container">
            <h2 style={{ 
              fontSize: "2.5rem", 
              marginBottom: "1.5rem",
              fontWeight: "700"
            }}>
              ¿Listo para transformar tu aprendizaje?
            </h2>
            <p style={{ 
              fontSize: "1.2rem", 
              marginBottom: "3rem", 
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: "1.7"
            }}>
              Únete a cientos de estudiantes de INACAP que ya están construyendo aplicaciones reales con React. 
              Aprende, practica y crea tu portafolio con nuestros proyectos guiados.
            </p>
            <Link
              to="/estados"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1.2rem 3rem",
                backgroundColor: "white",
                color: "#E91E63",
                textDecoration: "none",
                borderRadius: "50px",
                fontWeight: "700",
                fontSize: "1.2rem",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
              }}
            >
              <Rocket size={20} />
              Comenzar Ahora
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer
          style={{
            textAlign: "center",
            padding: "3rem 1rem",
            color: "#666",
            fontSize: "0.95rem",
            backgroundColor: "#f8f9fa"
          }}
        >
          <div className="container">
            <p style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
              Proyecto React-INACAP - Creado con ❤️ por Cristóbal Lagos y compañeros - 2025
            </p>
            <p style={{ fontStyle: "italic", color: "#888" }}>
              "El conocimiento compartido es el que realmente perdura"
            </p>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Inicio;