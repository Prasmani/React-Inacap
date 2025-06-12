import React from "react";
import Layout from "../components/Layout";
import { Zap, Clock, Database } from "lucide-react";

const Efectos: React.FC = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <div className="page-header">
          <h1 className="page-title">Efectos y Ciclo de Vida</h1>
          <p className="page-subtitle">
            Domina useEffect y comprende el ciclo de vida de los componentes en
            React funcional.
          </p>
        </div>

        <div className="content-section text-center">
          <Zap
            size={80}
            style={{ color: "var(--primary-color)", marginBottom: "2rem" }}
          />
          <h2 style={{ marginBottom: "1rem" }}>🚧 Contenido en Desarrollo</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
            Esta sección cubrirá useEffect, cleanup, dependencias y llamadas a
            APIs.
          </p>

          <div className="grid-layout">
            <div className="content-section">
              <Clock
                size={40}
                style={{ color: "var(--accent-color)", marginBottom: "1rem" }}
              />
              <h3>Ciclo de Vida</h3>
              <p>Mount, Update, Unmount</p>
            </div>
            <div className="content-section">
              <Database
                size={40}
                style={{ color: "var(--success-color)", marginBottom: "1rem" }}
              />
              <h3>Llamadas a APIs</h3>
              <p>Fetch, async/await, loading states</p>
            </div>
            <div className="content-section">
              <Zap
                size={40}
                style={{ color: "var(--warning-color)", marginBottom: "1rem" }}
              />
              <h3>Cleanup</h3>
              <p>Limpiar suscripciones y timers</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Efectos;
