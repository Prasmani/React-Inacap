import React from "react";
import Layout from "../components/Layout";
import Contador from "../components/Contador";
import Interruptor from "../components/Interruptor";
import Explicacion from "../components/Explicacion";

const Estados: React.FC = () => {
  const codigoEjemplo = `import React, { useState } from 'react';

function Contador() {
  // Declaramos una variable de estado llamada "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Haz clic aquí
      </button>
    </div>
  );
}`;

  const puntosClave = [
    "useState es un Hook que permite agregar estado a componentes funcionales",
    "Siempre devuelve un array con dos elementos: el valor actual y una función para actualizarlo",
    "El estado es inmutable: nunca modifiques directamente el estado",
    "React re-renderiza el componente automáticamente cuando el estado cambia",
    "El valor inicial del estado se pasa como argumento a useState",
  ];

  return (
    <Layout>
      <div className="animate-fade-in">
        <div className="page-header">
          <h1 className="page-title">Estados en React</h1>
          <p className="page-subtitle">
            Aprende cómo manejar el estado de tus componentes con el hook
            useState. El estado permite que tus componentes "recuerden"
            información y reaccionen a los cambios.
          </p>
        </div>

        <Explicacion
          titulo="¿Qué es el Estado?"
          concepto="useState Hook"
          descripcion="El estado es una característica de React que permite a los componentes 'recordar' información entre renderizados. Cuando el estado cambia, React automáticamente vuelve a renderizar el componente para reflejar los nuevos datos en la interfaz de usuario."
          codigo={codigoEjemplo}
          puntosClave={puntosClave}
        />

        <div className="grid-layout">
          <Contador />
          <Interruptor />
        </div>

        <div className="content-section">
          <h3 className="section-title">Reglas Importantes del Estado</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            <div
              style={{
                padding: "1.5rem",
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                borderRadius: "8px",
                borderLeft: "4px solid #10b981",
              }}
            >
              <h4 style={{ color: "#10b981", marginBottom: "0.5rem" }}>
                ✅ Correcto
              </h4>
              <code
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                }}
              >
                setCount(count + 1)
              </code>
              <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>
                Usa la función setter para actualizar el estado
              </p>
            </div>

            <div
              style={{
                padding: "1.5rem",
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                borderRadius: "8px",
                borderLeft: "4px solid #ef4444",
              }}
            >
              <h4 style={{ color: "#ef4444", marginBottom: "0.5rem" }}>
                ❌ Incorrecto
              </h4>
              <code
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                }}
              >
                count = count + 1
              </code>
              <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>
                Nunca modifiques el estado directamente
              </p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h3 className="section-title">Próximos Pasos</h3>
          <p style={{ marginBottom: "1rem", color: "var(--text-secondary)" }}>
            Ahora que entiendes los conceptos básicos del estado, puedes
            explorar temas más avanzados:
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="/eventos"
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "var(--primary-color)",
                color: "white",
                textDecoration: "none",
                borderRadius: "6px",
                fontWeight: "600",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Manejo de Eventos →
            </a>
            <a
              href="/formularios"
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "var(--surface)",
                color: "var(--text-primary)",
                textDecoration: "none",
                borderRadius: "6px",
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
              Formularios Avanzados →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Estados;
