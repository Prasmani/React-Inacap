import React from "react";
import Layout from "../components/Layout";
import { Lock, User, Shield } from "lucide-react";

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <div className="page-header">
          <h1 className="page-title">Autenticación y Login</h1>
          <p className="page-subtitle">
            Implementa sistemas de autenticación seguros con React y manejo de
            sesiones de usuario.
          </p>
        </div>

        <div className="content-section text-center">
          <Lock
            size={80}
            style={{ color: "var(--primary-color)", marginBottom: "2rem" }}
          />
          <h2 style={{ marginBottom: "1rem" }}>🚧 Contenido en Desarrollo</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
            Esta sección cubrirá autenticación, protección de rutas y manejo de
            tokens.
          </p>

          <div className="grid-layout">
            <div className="content-section">
              <User
                size={40}
                style={{ color: "var(--accent-color)", marginBottom: "1rem" }}
              />
              <h3>Formularios de Login</h3>
              <p>Validación y UX optimizada</p>
            </div>
            <div className="content-section">
              <Shield
                size={40}
                style={{ color: "var(--success-color)", marginBottom: "1rem" }}
              />
              <h3>Rutas Protegidas</h3>
              <p>Private routes y guards</p>
            </div>
            <div className="content-section">
              <Lock
                size={40}
                style={{ color: "var(--warning-color)", marginBottom: "1rem" }}
              />
              <h3>JWT y Tokens</h3>
              <p>Manejo seguro de sesiones</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
