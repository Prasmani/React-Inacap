import React from "react";
import Layout from "../components/Layout";
import { Users, ArrowUpDown, MessageCircle } from "lucide-react";

const Comunicacion: React.FC = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <div className="page-header">
          <h1 className="page-title">Comunicación entre Componentes</h1>
          <p className="page-subtitle">
            Aprende a pasar datos entre componentes padre e hijo, y maneja
            estado compartido eficientemente.
          </p>
        </div>

        <div className="content-section text-center">
          <Users
            size={80}
            style={{ color: "var(--primary-color)", marginBottom: "2rem" }}
          />
          <h2 style={{ marginBottom: "1rem" }}>🚧 Contenido en Desarrollo</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
            Esta sección cubrirá props, callback functions, lifting state up y
            Context API.
          </p>

          <div className="grid-layout">
            <div className="content-section">
              <ArrowUpDown
                size={40}
                style={{ color: "var(--accent-color)", marginBottom: "1rem" }}
              />
              <h3>Props y Callbacks</h3>
              <p>Pasar datos hacia abajo y arriba</p>
            </div>
            <div className="content-section">
              <MessageCircle
                size={40}
                style={{ color: "var(--success-color)", marginBottom: "1rem" }}
              />
              <h3>Context API</h3>
              <p>Estado global sin prop drilling</p>
            </div>
            <div className="content-section">
              <Users
                size={40}
                style={{ color: "var(--warning-color)", marginBottom: "1rem" }}
              />
              <h3>Lifting State Up</h3>
              <p>Compartir estado entre hermanos</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Comunicacion;
