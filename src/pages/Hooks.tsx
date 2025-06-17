import React from "react";
import Layout from "../components/Layout";
import Explicacion from "../components/Explicacion";
import Contador from "../components/Contador";
import { useContador } from "../components/useContador";

const HookExample: React.FC = () => {
  const { count, increment, decrement, reset } = useContador(0);

  return (
    <div className="content-section">
      <h3 className="section-subtitle">Usando nuestro Hook Personalizado:</h3>
      <div className="interactive-demo">
        <div className="counter-display">
          <span className="count-value">{count}</span>
        </div>
        <div className="button-group">
          <button onClick={increment} className="btn btn-primary">
            Incrementar
          </button>
          <button onClick={decrement} className="btn btn-secondary">
            Decrementar
          </button>
          <button onClick={reset} className="btn btn-accent">
            Resetear
          </button>
        </div>
      </div>
      <div className="code-explanation">
        <p>
          Este contador utiliza nuestro hook personalizado{" "}
          <code>useContador</code> que encapsula toda la lógica de manejo del
          estado.
        </p>
      </div>
    </div>
  );
};

const Hooks: React.FC = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <div className="page-header">
          <h1 className="page-title">
            <span style={{ color: "#9C27B0" }}>Hooks</span>{" "}
            <span style={{ color: "#E91E63" }}>Personalizados</span>
          </h1>
          <p className="page-subtitle">
            Crea lógica reutilizable con hooks personalizados
          </p>
        </div>

        <div className="container">
          <Explicacion
            titulo="Hooks Personalizados en React"
            descripcion="Los hooks personalizados te permiten extraer la lógica de los componentes en funciones reutilizables. Son una forma poderosa de compartir funcionalidad entre diferentes componentes sin duplicar código."
            conceptos={[
              "Definición de hooks personalizados",
              "Reutilización de lógica de estado",
              "Composición de hooks nativos",
              "Patrones comunes de hooks",
              "Testing de hooks personalizados",
              "Mejores prácticas",
            ]}
            enlaceDocu="https://react.dev/learn/reusing-logic-with-custom-hooks"
          />

          <div className="content-section">
            <h2 className="section-title">Ejemplo: Hook useContador</h2>
            <p className="section-description">
              Vamos a crear un hook personalizado que encapsule la lógica de un
              contador:
            </p>

            <div className="code-block">
              <pre>
                <code>{`// useContador.ts
import { useState } from 'react';

export const useContador = (initialValue: number = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};`}</code>
              </pre>
            </div>
          </div>

          <HookExample />

          <div className="content-section">
            <h2 className="section-title">
              Comparación con Componente Tradicional
            </h2>
            <p className="section-description">
              Aquí puedes ver la diferencia entre usar nuestro hook
              personalizado y un contador tradicional:
            </p>
            <Contador />
          </div>

          <div className="content-section">
            <h3 className="section-subtitle">
              Ventajas de los Hooks Personalizados:
            </h3>
            <div className="concepts-grid">
              <div className="concept-card">
                <h4>🔄 Reutilización</h4>
                <p>
                  Usa la misma lógica en múltiples componentes sin duplicar
                  código.
                </p>
              </div>
              <div className="concept-card">
                <h4>🧹 Separación de Responsabilidades</h4>
                <p>
                  Mantén la lógica de negocio separada de la presentación del
                  componente.
                </p>
              </div>
              <div className="concept-card">
                <h4>🧪 Testing</h4>
                <p>
                  Los hooks personalizados se pueden testear de forma
                  independiente.
                </p>
              </div>
              <div className="concept-card">
                <h4>📚 Composición</h4>
                <p>
                  Combina múltiples hooks para crear funcionalidades más
                  complejas.
                </p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h3 className="section-subtitle">Patrones Comunes:</h3>
            <div className="pattern-list">
              <div className="pattern-item">
                <h4>useLocalStorage</h4>
                <p>Sincroniza estado con localStorage del navegador.</p>
              </div>
              <div className="pattern-item">
                <h4>useFetch</h4>
                <p>Maneja peticiones HTTP con estados de carga y error.</p>
              </div>
              <div className="pattern-item">
                <h4>useToggle</h4>
                <p>
                  Alterna entre valores booleanos (útil para modales, menus,
                  etc.).
                </p>
              </div>
              <div className="pattern-item">
                <h4>useDebounce</h4>
                <p>
                  Retrasa la ejecución de funciones para optimizar rendimiento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hooks;
