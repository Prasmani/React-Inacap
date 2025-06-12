import React, { useState } from "react";
import { Keyboard } from "lucide-react";

const EventoTeclado: React.FC = () => {
  const [eventos, setEventos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  // Manejar cuando se presiona una tecla
  const manejarKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setEventos((prev) => [...prev, `🔽 Tecla presionada: "${e.key}" (onKeyDown)`]);
  };

  // Manejar cuando se suelta una tecla
  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setEventos((prev) => [...prev, `🔼 Tecla soltada: "${e.key}" (onKeyUp)`]);
  };

  // Manejar cambios en el input con limitación de 20 caracteres
  const manejarInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nuevoValor = e.target.value.slice(0, 20); // Recorta a 20 caracteres
    setInputValue(nuevoValor);
    setEventos((prev) => [...prev, `📝 Texto actualizado: "${nuevoValor}" (onInput)`]);
  };

  return (
    <div className="content-section">
      <h3 className="section-title">Eventos de Teclado</h3>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
        <Keyboard size={24} style={{ color: "var(--accent-color)" }} />
        <p>Presiona una tecla o escribe algo para ver los eventos generados.</p>
      </div>

      {/* Leyenda del orden de los eventos */}
      <div style={{ display: "flex", justifyContent: "center", fontSize: "0.85rem", color: "gray", marginBottom: "0.5rem", gap: "0.75rem", opacity: 0.9 }}>
        <span>🔽 Presionar</span>
        <span>→ 📝 Escribir</span>
        <span>→ 🔼 Soltar</span>
      </div>

      {/* Input con límite de 20 caracteres */}
      <input
        type="text"
        placeholder="Máximo 20 caracteres..."
        onKeyDown={manejarKeyDown}
        onKeyUp={manejarKeyUp}
        onInput={manejarInput}
        value={inputValue}
        maxLength={14} // Esto también impide la entrada excesiva sin cortar visualmente
        style={{
          padding: "0.75rem",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "1rem",
        }}
      />

      {/* Eventos mostrados en orden */}
      <div style={{ textAlign: "left", marginTop: "1rem" }}>
        {eventos.slice(-3).reverse().map((evento, index) => (
          <p key={index} style={{ opacity: 1 - index * 0.25, transition: "opacity 0.3s", marginBottom: "0.25rem" }}>
            {evento}
          </p>
        ))}
      </div>
    </div>
  );
};

export default EventoTeclado;