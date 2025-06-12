import React, { useState } from "react";
import { User, Mail, MessageSquare, Send, CheckCircle } from "lucide-react";
import "../styles/form.css";

interface FormData {
  nombre: string;
  email: string;
  mensaje: string;
  categoria: string;
  acepta: boolean;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  mensaje?: string;
  categoria?: string;
  acepta?: string;
}

const Formulario: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    mensaje: "",
    categoria: "",
    acepta: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = "El nombre debe tener al menos 2 caracteres";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido";
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
    }

    if (!formData.categoria) {
      newErrors.categoria = "Selecciona una categoría";
    }

    if (!formData.acepta) {
      newErrors.acepta = "Debes aceptar los términos";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      console.log("Formulario enviado:", formData);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      nombre: "",
      email: "",
      mensaje: "",
      categoria: "",
      acepta: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="form-container text-center">
        <CheckCircle
          size={64}
          style={{ color: "var(--success-color)", marginBottom: "1rem" }}
        />
        <h3 style={{ color: "var(--success-color)", marginBottom: "1rem" }}>
          ¡Formulario Enviado Exitosamente!
        </h3>
        <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
          Gracias por tu mensaje. Te responderemos pronto.
        </p>
        <button onClick={resetForm} className="form-button">
          Enviar Otro Mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h3 style={{ marginBottom: "1.5rem", textAlign: "center" }}>
        Formulario Interactivo
      </h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre" className="form-label">
            <User
              size={16}
              style={{ display: "inline", marginRight: "0.5rem" }}
            />
            Nombre Completo
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            className={`form-input ${errors.nombre ? "error" : ""}`}
            placeholder="Ingresa tu nombre completo"
          />
          {errors.nombre && <div className="form-error">{errors.nombre}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            <Mail
              size={16}
              style={{ display: "inline", marginRight: "0.5rem" }}
            />
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`form-input ${errors.email ? "error" : ""}`}
            placeholder="tu@email.com"
          />
          {errors.email && <div className="form-error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="categoria" className="form-label">
            Categoría
          </label>
          <select
            id="categoria"
            name="categoria"
            value={formData.categoria}
            onChange={handleInputChange}
            className={`form-select ${errors.categoria ? "error" : ""}`}
          >
            <option value="">Selecciona una categoría</option>
            <option value="consulta">Consulta General</option>
            <option value="feedback">Feedback</option>
            <option value="soporte">Soporte Técnico</option>
            <option value="colaboracion">Colaboración</option>
          </select>
          {errors.categoria && (
            <div className="form-error">{errors.categoria}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="mensaje" className="form-label">
            <MessageSquare
              size={16}
              style={{ display: "inline", marginRight: "0.5rem" }}
            />
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleInputChange}
            className={`form-textarea ${errors.mensaje ? "error" : ""}`}
            placeholder="Escribe tu mensaje aquí..."
            rows={4}
          />
          {errors.mensaje && <div className="form-error">{errors.mensaje}</div>}
        </div>

        <div className="form-group">
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="acepta"
              name="acepta"
              checked={formData.acepta}
              onChange={handleInputChange}
              className="form-checkbox"
            />
            <label htmlFor="acepta">Acepto los términos y condiciones</label>
          </div>
          {errors.acepta && <div className="form-error">{errors.acepta}</div>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="form-button"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          {isSubmitting ? (
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
              Enviando...
            </>
          ) : (
            <>
              <Send size={16} />
              Enviar Mensaje
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Formulario;
