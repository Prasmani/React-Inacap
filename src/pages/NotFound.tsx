import React from "react";
import Layout from "../components/Layout";
import { Home, Search, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <Layout>
      <div className="animate-fade-in text-center">
        <div className="page-header">
          <AlertTriangle
            size={120}
            style={{ color: "var(--warning-color)", marginBottom: "2rem" }}
          />
          <h1 className="page-title">404 - Página No Encontrada</h1>
          <p className="page-subtitle">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>

        <div
          className="content-section"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <h3 style={{ marginBottom: "1.5rem", color: "var(--text-primary)" }}>
            ¿Qué puedes hacer?
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                padding: "1rem",
                backgroundColor: "var(--surface)",
                borderRadius: "8px",
                border: "1px solid var(--border)",
              }}
            >
              <Search
                size={24}
                style={{
                  color: "var(--primary-color)",
                  marginBottom: "0.5rem",
                }}
              />
              <h4>Busca en el menú de navegación</h4>
              <p
                style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}
              >
                Usa la barra de navegación superior para encontrar el contenido
                que buscas.
              </p>
            </div>

            <div
              style={{
                padding: "1rem",
                backgroundColor: "var(--surface)",
                borderRadius: "8px",
                border: "1px solid var(--border)",
              }}
            >
              <Home
                size={24}
                style={{
                  color: "var(--success-color)",
                  marginBottom: "0.5rem",
                }}
              />
              <h4>Vuelve al inicio</h4>
              <p
                style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}
              >
                Regresa a la página principal y explora todos los temas
                disponibles.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/"
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
              <Home size={20} />
              Ir al Inicio
            </Link>

            <Link
              to="/estados"
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
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "var(--border)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "var(--surface)";
              }}
            >
              <Search size={20} />
              Explorar Tutoriales
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
