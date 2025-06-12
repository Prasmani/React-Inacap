import React, { useState } from "react";
import { Trees, Sun } from "lucide-react";
import "../styles/temas.css";

type TemaType = "sabana" | "bosque";

const Tema: React.FC = () => {
  const [temaActual, setTemaActual] = useState<TemaType>("sabana");

  const cambiarTema = (nuevoTema: TemaType) => {
    setTemaActual(nuevoTema);
  };

  const temas = {
    sabana: {
      nombre: "Tema Sabana",
      descripcion:
        "Experimenta la calidez y amplitud de la sabana africana con tonos dorados y naranjas.",
      icon: <Sun size={24} />,
      elementos: [
        "Colores cálidos y terrosos",
        "Sensación de amplitud",
        "Inspirado en atardeceres africanos",
        "Perfecto para contenido energético",
      ],
    },
    bosque: {
      nombre: "Tema Bosque",
      descripcion:
        "Sumérgete en la tranquilidad del bosque con verdes frescos y naturales.",
      icon: <Trees size={24} />,
      elementos: [
        "Colores frescos y naturales",
        "Sensación de tranquilidad",
        "Inspirado en la naturaleza",
        "Ideal para contenido relajante",
      ],
    },
  };

  const temaConfig = temas[temaActual];

  return (
    <div className={`theme-container theme-${temaActual}`}>
      <h2 className="theme-title">{temaConfig.nombre}</h2>
      <p className="theme-description">{temaConfig.descripcion}</p>

      <div className="theme-selector">
        <button
          className={`theme-option sabana ${
            temaActual === "sabana" ? "active" : ""
          }`}
          onClick={() => cambiarTema("sabana")}
        >
          <Sun size={20} style={{ marginRight: "0.5rem" }} />
          Sabana
        </button>
        <button
          className={`theme-option bosque ${
            temaActual === "bosque" ? "active" : ""
          }`}
          onClick={() => cambiarTema("bosque")}
        >
          <Trees size={20} style={{ marginRight: "0.5rem" }} />
          Bosque
        </button>
      </div>

      <div className="theme-card">
        <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {temaConfig.icon}
          Características del {temaConfig.nombre}
        </h3>
        <ul style={{ marginTop: "1rem", listStyle: "none", padding: 0 }}>
          {temaConfig.elementos.map((elemento, index) => (
            <li
              key={index}
              style={{
                padding: "0.5rem 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              • {elemento}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button className="theme-button">Aplicar {temaConfig.nombre}</button>
      </div>

      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "8px",
          color: "#1f2937",
        }}
      >
        <h4 style={{ marginBottom: "0.5rem" }}>
          💡 Concepto: Renderizado Condicional
        </h4>
        <p style={{ fontSize: "0.875rem", lineHeight: "1.6" }}>
          Este componente demuestra el renderizado condicional en React. Según
          el tema seleccionado (<code>temaActual</code>), se aplican diferentes
          clases CSS y se muestran diferentes contenidos. React actualiza
          automáticamente la interfaz cuando el estado cambia.
        </p>
      </div>
    </div>
  );
};

export default Tema;
