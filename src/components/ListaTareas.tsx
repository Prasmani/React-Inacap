import React, { useState } from "react";
import { Plus, Trash2, Check } from "lucide-react";

interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}

const ListaTareas: React.FC = () => {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [textoNuevo, setTextoNuevo] = useState("");

  const agregarTarea = () => {
    if (textoNuevo.trim()) {
      setTareas([
        ...tareas,
        {
          id: Date.now(),
          texto: textoNuevo.trim(),
          completada: false,
        },
      ]);
      setTextoNuevo("");
    }
  };

  const eliminarTarea = (id: number) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const toggleTarea = (id: number) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea,
      ),
    );
  };

  return (
    <div className="content-section">
      <h3 className="section-title">Lista de Tareas</h3>

      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
        <input
          type="text"
          value={textoNuevo}
          onChange={(e) => setTextoNuevo(e.target.value)}
          placeholder="Agregar nueva tarea..."
          onKeyPress={(e) => e.key === "Enter" && agregarTarea()}
          style={{
            flex: 1,
            padding: "0.75rem",
            border: "2px solid var(--border)",
            borderRadius: "8px",
            fontSize: "1rem",
          }}
        />
        <button
          onClick={agregarTarea}
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "var(--primary-color)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Plus size={16} />
          Agregar
        </button>
      </div>

      {tareas.length === 0 ? (
        <p style={{ textAlign: "center", color: "var(--text-secondary)" }}>
          No hay tareas. ¡Agrega una para comenzar!
        </p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tareas.map((tarea) => (
            <li
              key={tarea.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.75rem",
                backgroundColor: tarea.completada
                  ? "rgba(16, 185, 129, 0.1)"
                  : "var(--surface)",
                borderRadius: "8px",
                marginBottom: "0.5rem",
                border: "1px solid var(--border)",
              }}
            >
              <button
                onClick={() => toggleTarea(tarea.id)}
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  border: `2px solid ${
                    tarea.completada ? "#10b981" : "var(--border)"
                  }`,
                  backgroundColor: tarea.completada ? "#10b981" : "transparent",
                  color: "white",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {tarea.completada && <Check size={12} />}
              </button>
              <span
                style={{
                  flex: 1,
                  textDecoration: tarea.completada ? "line-through" : "none",
                  color: tarea.completada
                    ? "var(--text-secondary)"
                    : "var(--text-primary)",
                }}
              >
                {tarea.texto}
              </span>
              <button
                onClick={() => eliminarTarea(tarea.id)}
                style={{
                  padding: "0.25rem",
                  backgroundColor: "transparent",
                  color: "var(--error-color)",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                <Trash2 size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}

      <div
        style={{
          marginTop: "1.5rem",
          padding: "1rem",
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          borderRadius: "8px",
          borderLeft: "4px solid var(--primary-color)",
        }}
      >
        <h4 style={{ color: "var(--primary-color)", marginBottom: "0.5rem" }}>
          💡 Concepto: Arrays y map()
        </h4>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
          Esta lista demuestra cómo usar arrays en React con el método{" "}
          <code>map()</code> para renderizar listas dinámicas. Cada elemento
          necesita una <code>key</code> única para optimizar el renderizado.
        </p>
      </div>
    </div>
  );
};

export default ListaTareas;
