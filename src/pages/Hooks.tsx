import React from "react";
import Layout from "../components/Layout";
import Explicacion from "../components/Explicacion";
import HookExample from "../components/HookExample";
import { Settings, Repeat, Beaker, Code, Layers, TestTube2 } from "lucide-react";

const Hooks: React.FC = () => {
  const codigoEjemplo = `import { useState } from "react";

export const useContador = (initialValue: number = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};`;

  const codigoAvanzado = `// Ejemplo de hook compuesto
export const useHistorial = (initialValue: number = 0) => {
  const { count, increment, decrement, reset } = useContador(initialValue);
  const [historial, setHistorial] = useState<number[]>([]);

  const guardarEnHistorial = () => {
    setHistorial(prev => [...prev, count]);
  };

  return { count, increment, decrement, reset, historial, guardarEnHistorial };
};`;

  const puntosClave = [
    "Los hooks permiten reutilizar lógica en distintos componentes.",
    "Un hook personalizado encapsula lógica en una función reutilizable.",
    "Se pueden combinar varios hooks para crear funcionalidades más avanzadas.",
    "Los hooks mejoran la separación de responsabilidades dentro de los componentes.",
  ];

  return (
    <Layout>
      <div className="animate-fade-in">
        {/* Encabezado */}
        <div className="page-header">
          <h1 className="page-title">Hooks Personalizados</h1>
          <p className="page-subtitle">
            Aprende a crear lógica reutilizable con hooks en React.
          </p>
        </div>

        {/* Explicación principal */}
        <Explicacion
          titulo="¿Qué es un Hook Personalizado?"
          concepto="Reutilización de lógica"
          descripcion="Los hooks personalizados te permiten encapsular lógica dentro de funciones reutilizables. Esto hace que tu código sea más modular y fácil de mantener."
          codigo={codigoEjemplo}
          puntosClave={puntosClave}
        />

        {/* Ejemplo básico */}
        <div className="grid-layout">
          <HookExample />
        </div>

        {/* Sección avanzada */}
        <div className="content-section">
          <h3 className="section-title">Composición de Hooks</h3>
          <p>Puedes combinar hooks para crear funcionalidades más complejas:</p>
          <pre className="code-block">{codigoAvanzado}</pre>
        </div>

        {/* Ventajas */}
        <div className="content-section text-center">
          <h3 className="section-title">Ventajas de los Hooks Personalizados</h3>
          <div className="grid-layout">
            {[
              {
                icon: <Settings size={40} className="text-accent" />,
                title: "Modularidad",
                desc: "Facilitan la organización del código y la reutilización de lógica."
              },
              {
                icon: <Repeat size={40} className="text-primary" />,
                title: "Reutilización",
                desc: "Permiten compartir lógica sin duplicar código en múltiples componentes."
              },
              {
                icon: <TestTube2 size={40} className="text-warning" />,
                title: "Testing",
                desc: "Los hooks personalizados pueden ser probados de manera independiente."
              }
            ].map((item, index) => (
              <div key={index} className="content-card">
                {item.icon}
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hooks;