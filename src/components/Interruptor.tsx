import React, { useState } from "react";
import { Power, Lightbulb } from "lucide-react";

const Interruptor: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    setClickCount((prev) => prev + 1);
  };

  return (
    <div className="content-section">
      <h3 className="section-title">Interruptor de Luz</h3>

      <div className="flex-center" style={{ marginBottom: "2rem" }}>
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            backgroundColor: isOn ? "#fbbf24" : "#374151",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            boxShadow: isOn
              ? "0 0 50px rgba(251, 191, 36, 0.5)"
              : "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Lightbulb
            size={80}
            color={isOn ? "#1f2937" : "#9ca3af"}
            fill={isOn ? "#1f2937" : "none"}
          />
        </div>
      </div>

      <div className="text-center" style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
          La luz está <strong>{isOn ? "ENCENDIDA" : "APAGADA"}</strong>
        </p>
        <p style={{ color: "var(--text-secondary)" }}>
          Has hecho clic {clickCount} veces
        </p>
      </div>

      <div className="flex-center">
        <button
          onClick={toggleSwitch}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "1rem 2rem",
            backgroundColor: isOn ? "#ef4444" : "#22c55e",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "1.1rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <Power size={20} />
          {isOn ? "Apagar" : "Encender"}
        </button>
      </div>

      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          borderRadius: "8px",
          borderLeft: "4px solid var(--primary-color)",
        }}
      >
        <h4 style={{ color: "var(--primary-color)", marginBottom: "0.5rem" }}>
          Concepto: Estado Booleano
        </h4>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
          Este componente demuestra cómo usar <code>useState</code> con valores
          booleanos. El estado <code>isOn</code> cambia entre <code>true</code>{" "}
          y <code>false</code>, y la interfaz se actualiza automáticamente para
          reflejar el cambio.
        </p>
      </div>
    </div>
  );
};

export default Interruptor;
