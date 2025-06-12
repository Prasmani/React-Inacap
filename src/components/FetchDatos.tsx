import React, { useState, useEffect } from "react";
import { Download, RefreshCw, AlertCircle } from "lucide-react";

interface Usuario {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

const FetchDatos: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsuarios = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      if (!response.ok) {
        throw new Error("Error al cargar los datos");
      }
      const data = await response.json();
      setUsuarios(data.slice(0, 5)); // Solo mostrar 5 usuarios
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <div className="content-section">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <h3 className="section-title">Datos desde API</h3>
        <button
          onClick={fetchUsuarios}
          disabled={loading}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem 1rem",
            backgroundColor: "var(--primary-color)",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.6 : 1,
          }}
        >
          <RefreshCw
            size={16}
            style={{
              animation: loading ? "spin 1s linear infinite" : "none",
            }}
          />
          Recargar
        </button>
      </div>

      {loading && (
        <div
          style={{
            textAlign: "center",
            padding: "2rem",
            color: "var(--text-secondary)",
          }}
        >
          <Download
            size={40}
            style={{
              animation: "spin 1s linear infinite",
              marginBottom: "1rem",
            }}
          />
          <p>Cargando datos...</p>
        </div>
      )}

      {error && (
        <div
          style={{
            padding: "1rem",
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            borderRadius: "8px",
            borderLeft: "4px solid var(--error-color)",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--error-color)",
            }}
          >
            <AlertCircle size={20} />
            <strong>Error:</strong> {error}
          </div>
        </div>
      )}

      {!loading && !error && usuarios.length > 0 && (
        <div
          style={{
            display: "grid",
            gap: "1rem",
          }}
        >
          {usuarios.map((usuario) => (
            <div
              key={usuario.id}
              style={{
                padding: "1rem",
                backgroundColor: "var(--surface)",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                transition: "transform 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h4 style={{ margin: 0, color: "var(--text-primary)" }}>
                {usuario.name}
              </h4>
              <p
                style={{ margin: "0.25rem 0", color: "var(--text-secondary)" }}
              >
                📧 {usuario.email}
              </p>
              <p
                style={{ margin: "0.25rem 0", color: "var(--text-secondary)" }}
              >
                📞 {usuario.phone}
              </p>
              <p
                style={{ margin: "0.25rem 0", color: "var(--text-secondary)" }}
              >
                🌐 {usuario.website}
              </p>
            </div>
          ))}
        </div>
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
          💡 Concepto: useEffect y API calls
        </h4>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
          Este componente demuestra cómo usar <code>useEffect</code> para hacer
          llamadas a APIs cuando el componente se monta, y cómo manejar estados
          de carga, errores y datos.
        </p>
      </div>
    </div>
  );
};

export default FetchDatos;
