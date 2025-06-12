import React from "react";
import { BookOpen, Code, Lightbulb } from "lucide-react";

interface ExplicacionProps {
  titulo: string;
  concepto: string;
  descripcion: string;
  codigo?: string;
  puntosClave?: string[];
}

const Explicacion: React.FC<ExplicacionProps> = ({
  titulo,
  concepto,
  descripcion,
  codigo,
  puntosClave = [],
}) => {
  return (
    <div className="content-section">
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <BookOpen size={24} style={{ color: "var(--primary-color)" }} />
        <h3 className="section-title">{titulo}</h3>
      </div>

      <div
        style={{
          padding: "1rem",
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          borderRadius: "8px",
          borderLeft: "4px solid var(--primary-color)",
          marginBottom: "1.5rem",
        }}
      >
        <h4
          style={{
            color: "var(--primary-color)",
            marginBottom: "0.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Lightbulb size={18} />
          Concepto: {concepto}
        </h4>
        <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>
          {descripcion}
        </p>
      </div>

      {puntosClave.length > 0 && (
        <div style={{ marginBottom: "1.5rem" }}>
          <h4 style={{ marginBottom: "1rem", color: "var(--text-primary)" }}>
            Puntos Clave:
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {puntosClave.map((punto, index) => (
              <li
                key={index}
                style={{
                  padding: "0.75rem",
                  backgroundColor: "var(--surface)",
                  borderRadius: "6px",
                  borderLeft: "3px solid var(--accent-color)",
                  fontSize: "0.9rem",
                }}
              >
                ✓ {punto}
              </li>
            ))}
          </ul>
        </div>
      )}

      {codigo && (
        <div>
          <h4
            style={{
              marginBottom: "0.75rem",
              color: "var(--text-primary)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Code size={18} />
            Ejemplo de Código:
          </h4>
          <pre
            style={{
              backgroundColor: "#1f2937",
              color: "#f9fafb",
              padding: "1rem",
              borderRadius: "8px",
              overflow: "auto",
              fontSize: "0.875rem",
              lineHeight: "1.6",
            }}
          >
            <code>{codigo}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default Explicacion;
