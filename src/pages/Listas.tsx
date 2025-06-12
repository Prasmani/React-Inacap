import React from "react";
import Layout from "../components/Layout";
import { List, Key, RefreshCw } from "lucide-react";

const Listas: React.FC = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <div className="page-header">
          <h1 className="page-title">Listas y Keys</h1>
          <p className="page-subtitle">
            Aprende a renderizar listas dinámicas eficientemente y entiende la
            importancia de las keys en React.
          </p>
        </div>

        <div className="content-section text-center">
          <List
            size={80}
            style={{ color: "var(--primary-color)", marginBottom: "2rem" }}
          />
          <h2 style={{ marginBottom: "1rem" }}>🚧 Contenido en Desarrollo</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
            Esta sección cubrirá map(), filter(), keys y optimización de listas
            en React.
          </p>

          <div className="grid-layout">
            <div className="content-section">
              <List
                size={40}
                style={{ color: "var(--accent-color)", marginBottom: "1rem" }}
              />
              <h3>Renderizado de Listas</h3>
              <p>map(), filter(), reduce()</p>
            </div>
            <div className="content-section">
              <Key
                size={40}
                style={{ color: "var(--success-color)", marginBottom: "1rem" }}
              />
              <h3>Keys en React</h3>
              <p>Optimización y reconciliación</p>
            </div>
            <div className="content-section">
              <RefreshCw
                size={40}
                style={{ color: "var(--warning-color)", marginBottom: "1rem" }}
              />
              <h3>Listas Dinámicas</h3>
              <p>Agregar, editar, eliminar elementos</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Listas;
