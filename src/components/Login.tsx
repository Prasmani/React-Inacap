import React, { useState } from "react";
import { User, Lock, Eye, EyeOff, LogIn } from "lucide-react";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError("Por favor, completa todos los campos");
      return;
    }

    setIsLoading(true);
    setError("");

    // Simular login
    setTimeout(() => {
      if (
        formData.username === "react" &&
        formData.password === "aprender123"
      ) {
        alert("¡Login exitoso! Bienvenido a React Aprende");
      } else {
        setError("Credenciales incorrectas. Prueba: react / aprender123");
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div
      className="content-section"
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <h3 className="section-title text-center">Iniciar Sesión</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            <User
              size={16}
              style={{ display: "inline", marginRight: "0.5rem" }}
            />
            Usuario
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Ingresa tu usuario"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            <Lock
              size={16}
              style={{ display: "inline", marginRight: "0.5rem" }}
            />
            Contraseña
          </label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Ingresa tu contraseña"
              style={{ paddingRight: "3rem" }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "0.75rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--text-secondary)",
              }}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {error && (
          <div className="form-error" style={{ marginBottom: "1rem" }}>
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="form-button"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          {isLoading ? (
            <>
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  border: "2px solid #ffffff",
                  borderTop: "2px solid transparent",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              />
              Iniciando sesión...
            </>
          ) : (
            <>
              <LogIn size={16} />
              Iniciar Sesión
            </>
          )}
        </button>
      </form>

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
          💡 Credenciales de prueba:
        </h4>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.875rem",
            margin: 0,
          }}
        >
          <strong>Usuario:</strong> react
          <br />
          <strong>Contraseña:</strong> aprender123
        </p>
      </div>
    </div>
  );
};

export default Login;
