import React, { useState } from "react";
import { Send } from "lucide-react";

const FormularioEvento: React.FC = () => {
  const [formData, setFormData] = useState({ nombre: "", correo: "" });
  const [mensaje, setMensaje] = useState("");
  const [campoActivo, setCampoActivo] = useState<string | null>(null); // Indica qué campo tiene foco
  const [limiteAlcanzado, setLimiteAlcanzado] = useState({ nombre: false, correo: false }); // Estado para indicar límite alcanzado

  // Se ejecuta cuando el contenido de un campo cambia
  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const nuevoValor = value.slice(0, 30); // Limita a 30 caracteres

    setFormData({ ...formData, [name]: nuevoValor });
    setMensaje(`Cambiando "${name}": ${nuevoValor}`);

    // Indicar si el usuario ha alcanzado el límite
    setLimiteAlcanzado((prev) => ({ ...prev, [name]: nuevoValor.length >= 30 }));
  };

  // Se ejecuta al enviar el formulario
  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje(`¡Gracias, ${formData.nombre}! Te contactaremos a ${formData.correo}.`);
    setFormData({ nombre: "", correo: "" });
    setCampoActivo(null);
    setLimiteAlcanzado({ nombre: false, correo: false });
  };

  // Se dispara cuando un campo recibe el foco
  const manejarFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setCampoActivo(e.target.name);
    setMensaje(`Estás escribiendo en "${e.target.name}"`);
  };

  // Se activa cuando el campo pierde el foco
  const manejarBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setMensaje(`Saliste del campo "${e.target.name}"`);
    setCampoActivo(null);
  };

  return (
    <div className="rounded-xl shadow-md p-6 bg-white mb-6 text-center animate-fade-in">
      <Send size={32} className="mx-auto mb-2 text-primary" />
      <h3 className="text-lg font-semibold mb-2">
        Ejemplo: Eventos de Formulario
      </h3>

      {/* Formulario con todos los eventos */}
      <form onSubmit={manejarEnvio} className="space-y-4">
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre (Máximo 30 caracteres)"
          value={formData.nombre}
          onChange={manejarCambio}
          onFocus={manejarFocus}
          onBlur={manejarBlur}
          maxLength={30} // Impide la entrada excesiva sin cortar visualmente
          className={`w-full border rounded-md p-2 ${
            campoActivo === "nombre" ? "border-primary" : "border-gray-300"
          } ${limiteAlcanzado.nombre ? "border-warning" : ""}`}
          required
        />
        {limiteAlcanzado.nombre && (
          <p className="text-warning text-sm">⚠️ Has alcanzado el límite de 30 caracteres.</p>
        )}

        <input
          type="email"
          name="correo"
          placeholder="Tu correo (Máximo 30 caracteres)"
          value={formData.correo}
          onChange={manejarCambio}
          onFocus={manejarFocus}
          onBlur={manejarBlur}
          maxLength={30} // Impide la entrada excesiva sin cortar visualmente
          className={`w-full border rounded-md p-2 ${
            campoActivo === "correo" ? "border-primary" : "border-gray-300"
          } ${limiteAlcanzado.correo ? "border-warning" : ""}`}
          required
        />
        {limiteAlcanzado.correo && (
          <p className="text-warning text-sm">⚠️ Has alcanzado el límite de 30 caracteres.</p>
        )}

        <button
          type="submit"
          className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-xl transition-all"
        >
          Enviar
        </button>
      </form>

      {/* Mensaje que cambia según el evento */}
      {mensaje && <p className="mt-4 text-success">{mensaje}</p>}
    </div>
  );
};

export default FormularioEvento;