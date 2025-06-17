import React from "react";
import Layout from "../components/Layout";
import Explicacion from "../components/Explicacion";
import FetchDatos from "../components/FetchDatos";

const Datos: React.FC = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <div className="page-header">
          <h1 className="page-title">
            <span style={{ color: "#2196F3" }}>Manejo</span>{" "}
            <span style={{ color: "#E91E63" }}>de Datos</span>
          </h1>
          <p className="page-subtitle">
            Aprende a obtener y mostrar datos externos en React
          </p>
        </div>

        <div className="container">
          <Explicacion
            titulo="Fetching de Datos en React"
            descripcion="En React, obtener datos de APIs externas es una tarea común. Aprenderás a usar useEffect para hacer peticiones HTTP, manejar estados de carga y errores, y mostrar los datos de manera efectiva."
            conceptos={[
              "fetch() y async/await",
              "useEffect para side effects",
              "Estados de carga (loading)",
              "Manejo de errores",
              "Actualización de estado con datos externos",
              "Cleanup de peticiones",
            ]}
            enlaceDocu="https://react.dev/learn/synchronizing-with-effects"
          />

          <div className="content-section">
            <h2 className="section-title">Ejemplo Práctico: Fetch de Datos</h2>
            <FetchDatos />
          </div>

          <div className="content-section">
            <h3 className="section-subtitle">Conceptos Clave:</h3>
            <div className="concepts-grid">
              <div className="concept-card">
                <h4>🔄 useEffect para Fetching</h4>
                <p>
                  Utiliza useEffect con un array de dependencias vacío para
                  realizar peticiones al montar el componente.
                </p>
              </div>
              <div className="concept-card">
                <h4>⏳ Estados de Carga</h4>
                <p>
                  Mantén al usuario informado sobre el estado de la petición con
                  indicadores de carga.
                </p>
              </div>
              <div className="concept-card">
                <h4>❌ Manejo de Errores</h4>
                <p>
                  Siempre maneja los posibles errores en las peticiones HTTP y
                  muestra mensajes apropiados.
                </p>
              </div>
              <div className="concept-card">
                <h4>🧹 Cleanup</h4>
                <p>
                  Cancela peticiones pendientes cuando el componente se desmonte
                  para evitar memory leaks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Datos;
