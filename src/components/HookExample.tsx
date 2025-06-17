import React, { useState } from "react";
import { Repeat } from "lucide-react";

const HookExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const [eventos, setEventos] = useState<string[]>([]);

  // Manejar incremento
  const incrementar = () => {
    setCount((prev) => prev + 1);
    setEventos((prev) => [...prev, `➕ Incrementado a ${count + 1}`]);
  };

  // Manejar decremento
  const decrementar = () => {
    setCount((prev) => prev - 1);
    setEventos((prev) => [...prev, `➖ Decrementado a ${count - 1}`]);
  };

  // Manejar reseteo
  const resetear = () => {
    setCount(0);
    setEventos((prev) => [...prev, `🔄 Contador reiniciado`]);
  };

  return (
    <div className="content-section">
      <h3 className="section-title">Ejemplo de Hook Personalizado</h3>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
        <Repeat size={24} style={{ color: "var(--primary-color)" }} />
        <p>Controla el estado de un contador usando un hook personalizado.</p>
      </div>

      {/* Vista del contador */}
      <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>{count}</div>

      {/* Botones */}
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={incrementar} className="btn btn-primary">Incrementar</button>
        <button onClick={decrementar} className="btn btn-secondary">Decrementar</button>
        <button onClick={resetear} className="btn btn-accent">Resetear</button>
      </div>

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

export default HookExample;