import React, { useState } from "react";
import Hijo from "./Hijo";
import { MessageSquare, ArrowUpDown } from "lucide-react";

const Padre: React.FC = () => {
  const [mensajePadre, setMensajePadre] = useState(
    "¡Hola desde el componente Padre!",
  );
  const [mensajesHijo, setMensajesHijo] = useState<string[]>([]);

  const recibirMensajeDelHijo = (mensaje: string) => {
    setMensajesHijo((prevMensajes) => [...prevMensajes, mensaje]);
  };

  const enviarMensajeAlHijo = () => {
    const mensajes = [
      "¡Excelente trabajo!",
      "Sigue así",
      "React es genial",
      "Props y callbacks funcionan",
      "¡Muy bien hecho!",
    ];
    const mensajeAleatorio =
      mensajes[Math.floor(Math.random() * mensajes.length)];
    setMensajePadre(mensajeAleatorio);
  };

  return (
    <div className="content-section">
      <h3 className="section-title">Comunicación Padre-Hijo</h3>

      <div
        style={{
          padding: "1.5rem",
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          borderRadius: "8px",
          marginBottom: "1.5rem",
          border: "2px solid var(--primary-color)",
        }}
      >
        <h4
          style={{
            color: "var(--primary-color)",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <MessageSquare size={20} />
          Componente Padre
        </h4>
        <p style={{ marginBottom: "1rem" }}>
          Mensaje actual para el hijo: <strong>"{mensajePadre}"</strong>
        </p>
        <button
          onClick={enviarMensajeAlHijo}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "var(--primary-color)",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Enviar Nuevo Mensaje
        </button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          margin: "1rem 0",
          color: "var(--text-secondary)",
        }}
      >
        <ArrowUpDown size={24} />
        <span>Comunicación bidireccional</span>
        <ArrowUpDown size={24} />
      </div>

      <Hijo
        mensajeDelPadre={mensajePadre}
        onEnviarMensaje={recibirMensajeDelHijo}
      />

      {mensajesHijo.length > 0 && (
        <div
          style={{
            marginTop: "1.5rem",
            padding: "1rem",
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            borderRadius: "8px",
            border: "1px solid var(--success-color)",
          }}
        >
          <h4
            style={{
              color: "var(--success-color)",
              marginBottom: "0.75rem",
            }}
          >
            Mensajes recibidos del hijo:
          </h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {mensajesHijo.map((mensaje, index) => (
              <li
                key={index}
                style={{
                  padding: "0.5rem",
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  borderRadius: "4px",
                  marginBottom: "0.25rem",
                  fontSize: "0.875rem",
                }}
              >
                {index + 1}. {mensaje}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        style={{
          marginTop: "1.5rem",
          padding: "1rem",
          backgroundColor: "rgba(245, 158, 11, 0.1)",
          borderRadius: "8px",
          borderLeft: "4px solid var(--warning-color)",
        }}
      >
        <h4 style={{ color: "var(--warning-color)", marginBottom: "0.5rem" }}>
          💡 Concepto: Props y Callbacks
        </h4>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
          Este ejemplo muestra cómo los componentes padre e hijo se comunican:
          el padre envía datos al hijo via <code>props</code>, y el hijo envía
          datos al padre via <code>callback functions</code>.
        </p>
      </div>
    </div>
  );
};

export default Padre;
