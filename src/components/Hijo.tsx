import React, { useState } from "react";
import { Send, Heart } from "lucide-react";

interface HijoProps {
  mensajeDelPadre: string;
  onEnviarMensaje: (mensaje: string) => void;
}

const Hijo: React.FC<HijoProps> = ({ mensajeDelPadre, onEnviarMensaje }) => {
  const [nuevoMensaje, setNuevoMensaje] = useState("");

  const enviarMensaje = () => {
    if (nuevoMensaje.trim()) {
      onEnviarMensaje(nuevoMensaje.trim());
      setNuevoMensaje("");
    }
  };

  const enviarMensajePredefinido = () => {
    const mensajes = [
      "¡Hola Papá!",
      "Gracias por el mensaje",
      "React es increíble",
      "Aprendiendo mucho",
      "¡Props recibidas!",
    ];
    const mensajeAleatorio =
      mensajes[Math.floor(Math.random() * mensajes.length)];
    onEnviarMensaje(mensajeAleatorio);
  };

  return (
    <div
      style={{
        padding: "1.5rem",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        borderRadius: "8px",
        border: "2px solid var(--success-color)",
      }}
    >
      <h4
        style={{
          color: "var(--success-color)",
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <Heart size={20} />
        Componente Hijo
      </h4>

      <div
        style={{
          padding: "1rem",
          backgroundColor: "white",
          borderRadius: "6px",
          marginBottom: "1rem",
          border: "1px solid var(--border)",
        }}
      >
        <strong>Mensaje recibido del padre:</strong>
        <p style={{ margin: "0.5rem 0 0 0", fontStyle: "italic" }}>
          "{mensajeDelPadre}"
        </p>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
          <input
            type="text"
            value={nuevoMensaje}
            onChange={(e) => setNuevoMensaje(e.target.value)}
            placeholder="Escribe un mensaje para el padre..."
            onKeyPress={(e) => e.key === "Enter" && enviarMensaje()}
            style={{
              flex: 1,
              padding: "0.5rem",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              fontSize: "0.875rem",
            }}
          />
          <button
            onClick={enviarMensaje}
            disabled={!nuevoMensaje.trim()}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "var(--success-color)",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: nuevoMensaje.trim() ? "pointer" : "not-allowed",
              opacity: nuevoMensaje.trim() ? 1 : 0.5,
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            <Send size={14} />
            Enviar
          </button>
        </div>

        <button
          onClick={enviarMensajePredefinido}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "rgba(16, 185, 129, 0.2)",
            color: "var(--success-color)",
            border: "1px solid var(--success-color)",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "0.875rem",
            fontWeight: "600",
          }}
        >
          Enviar Mensaje Rápido
        </button>
      </div>

      <div
        style={{
          fontSize: "0.8rem",
          color: "var(--text-secondary)",
          fontStyle: "italic",
        }}
      >
        💡 Este componente recibe props del padre y puede comunicarse de vuelta
        usando la función callback.
      </div>
    </div>
  );
};

export default Hijo;
