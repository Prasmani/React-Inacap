import React from "react";
import Layout from "../components/Layout";
import Tema from "../components/Tema";
import Explicacion from "../components/Explicacion";

const Temas: React.FC = () => {
  const codigoEjemplo = `import React, { useState } from 'react';

function TemaSelector() {
  const [tema, setTema] = useState('claro');

  return (
    <div className={\`app-\${tema}\`}>
      <button onClick={() => setTema(tema === 'claro' ? 'oscuro' : 'claro')}>
        Cambiar a tema {tema === 'claro' ? 'oscuro' : 'claro'}
      </button>
      
      {tema === 'claro' ? (
        <div className="contenido-claro">Modo claro activo</div>
      ) : (
        <div className="contenido-oscuro">Modo oscuro activo</div>
      )}
    </div>
  );
}`;

  const puntosClave = [
    "El renderizado condicional permite mostrar diferentes elementos según el estado",
    "Puedes usar operadores ternarios para alternar entre elementos",
    "Las clases CSS dinámicas se crean interpolando variables en las cadenas",
    "El estado controla qué elementos se renderizan en cada momento",
  ];

  return (
    <Layout>
      <div className="animate-fade-in">
        <div className="page-header">
          <h1 className="page-title">Temas Dinámicos</h1>
          <p className="page-subtitle">
            Descubre cómo crear interfaces que cambian dinámicamente según el
            estado de la aplicación usando renderizado condicional.
          </p>
        </div>

        <Explicacion
          titulo="Renderizado Condicional"
          concepto="Temas Dinámicos"
          descripcion="El renderizado condicional es una técnica fundamental en React que permite mostrar diferentes elementos o aplicar diferentes estilos según el estado actual de la aplicación. Es especialmente útil para implementar temas, modos oscuro/claro, y interfaces adaptativas."
          codigo={codigoEjemplo}
          puntosClave={puntosClave}
        />

        <Tema />

        <div className="content-section">
          <h3 className="section-title">Técnicas de Renderizado Condicional</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
              marginTop: "1.5rem",
            }}
          >
            <div
              style={{
                padding: "1.5rem",
                backgroundColor: "var(--surface)",
                borderRadius: "8px",
                border: "1px solid var(--border)",
              }}
            >
              <h4 style={{ color: "var(--primary-color)" }}>
                Operador Ternario
              </h4>
              <code
                style={{
                  display: "block",
                  backgroundColor: "#1f2937",
                  color: "#f9fafb",
                  padding: "0.75rem",
                  borderRadius: "4px",
                  fontSize: "0.8rem",
                  marginTop: "0.5rem",
                }}
              >
                {"{"}condicion ? &lt;ElementoA /&gt; : &lt;ElementoB /&gt;{"}"}
              </code>
            </div>

            <div
              style={{
                padding: "1.5rem",
                backgroundColor: "var(--surface)",
                borderRadius: "8px",
                border: "1px solid var(--border)",
              }}
            >
              <h4 style={{ color: "var(--success-color)" }}>
                Operador Lógico &&
              </h4>
              <code
                style={{
                  display: "block",
                  backgroundColor: "#1f2937",
                  color: "#f9fafb",
                  padding: "0.75rem",
                  borderRadius: "4px",
                  fontSize: "0.8rem",
                  marginTop: "0.5rem",
                }}
              >
                {"{"}condicion && &lt;Elemento /&gt;{"}"}
              </code>
            </div>

            <div
              style={{
                padding: "1.5rem",
                backgroundColor: "var(--surface)",
                borderRadius: "8px",
                border: "1px solid var(--border)",
              }}
            >
              <h4 style={{ color: "var(--warning-color)" }}>
                Clases Dinámicas
              </h4>
              <code
                style={{
                  display: "block",
                  backgroundColor: "#1f2937",
                  color: "#f9fafb",
                  padding: "0.75rem",
                  borderRadius: "4px",
                  fontSize: "0.8rem",
                  marginTop: "0.5rem",
                }}
              >
                className={"{`tema-${'{'}tema{'}'}`}"}
              </code>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Temas;
