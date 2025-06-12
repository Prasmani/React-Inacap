import React, { useState, useEffect } from "react";
import { Plus, Minus, RotateCcw } from "lucide-react";
import "../styles/contador.css";

interface HistoryItem {
  action: string;
  value: number;
  timestamp: Date;
}

const Contador: React.FC = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isUpdating, setIsUpdating] = useState(false);

  const addToHistory = (action: string, value: number) => {
    setHistory((prev) => [
      ...prev.slice(-9), // Mantener solo los últimos 10 elementos
      {
        action,
        value,
        timestamp: new Date(),
      },
    ]);
  };

  const increment = () => {
    setIsUpdating(true);
    setCount((prev) => {
      const newValue = prev + 1;
      addToHistory("Incrementar", newValue);
      return newValue;
    });
  };

  const decrement = () => {
    setIsUpdating(true);
    setCount((prev) => {
      const newValue = prev - 1;
      addToHistory("Decrementar", newValue);
      return newValue;
    });
  };

  const reset = () => {
    setIsUpdating(true);
    setCount(0);
    addToHistory("Resetear", 0);
    setHistory([]);
  };

  useEffect(() => {
    if (isUpdating) {
      const timer = setTimeout(() => setIsUpdating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isUpdating]);

  const getStatus = () => {
    if (count > 0) return "positivo";
    if (count < 0) return "negativo";
    return "cero";
  };

  const getStatusText = () => {
    if (count > 0) return "Número Positivo";
    if (count < 0) return "Número Negativo";
    return "En Cero";
  };

  return (
    <div className="contador-container">
      <h3>Contador Interactivo</h3>
      <div className={`contador-display ${isUpdating ? "updating" : ""}`}>
        {count}
      </div>

      <div className={`contador-status ${getStatus()}`}>{getStatusText()}</div>

      <div className="contador-controls">
        <button
          className="contador-btn"
          onClick={decrement}
          aria-label="Decrementar"
        >
          <Minus />
        </button>

        <button
          className="contador-btn reset"
          onClick={reset}
          aria-label="Resetear"
        >
          <RotateCcw size={16} />
          Reset
        </button>

        <button
          className="contador-btn"
          onClick={increment}
          aria-label="Incrementar"
        >
          <Plus />
        </button>
      </div>

      <div className="contador-info">
        <h4>¿Cómo funciona?</h4>
        <p>
          Este contador utiliza el hook <code>useState</code> para manejar el
          estado del número. Cada vez que haces clic en los botones, React
          actualiza el estado y re-renderiza el componente automáticamente.
        </p>
      </div>

      {history.length > 0 && (
        <div className="contador-history">
          <h4>Historial de Acciones</h4>
          {history.map((item, index) => (
            <div key={index} className="history-item">
              <span className="history-action">{item.action}</span>
              <span className="history-value">Valor: {item.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Contador;
