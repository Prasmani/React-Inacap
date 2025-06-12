import React, { useState } from "react";
import { MousePointerClick } from "lucide-react";

const BotonEvento: React.FC = () => {
  const [mensaje, setMensaje] = useState("Interactúa con el botón");

  // Maneja el clic en el botón
  const manejarClick = () => {
    setMensaje("¡Has hecho clic! 🎉");
  };

  // Maneja cuando el cursor pasa sobre el botón
  const manejarMouseOver = () => {
    setMensaje("El cursor está sobre el botón");
  };

  // Maneja cuando el cursor sale del botón
  const manejarMouseOut = () => {
    setMensaje("El cursor ha salido del botón");
  };

  // Maneja cuando se presiona un botón del mouse sobre el botón
  const manejarMouseDown = () => {
    setMensaje("Estás presionando el botón");
  };

  return (
    <div className="rounded-xl shadow-md p-6 bg-white mb-6 text-center animate-fade-in">
      {/* Ícono representativo */}
      <MousePointerClick size={32} className="mx-auto mb-2 text-primary" />

      {/* Título */}
      <h3 className="text-lg font-semibold mb-2">Ejemplo: Eventos de Mouse</h3>

      {/* Mensaje dinámico basado en eventos */}
      <p className="mb-4 text-gray-600">{mensaje}</p>

      {/* Botón con todos los eventos de mouse */}
      <button
        onClick={manejarClick}         // Se activa al hacer clic
        onMouseOver={manejarMouseOver} // Se activa cuando el cursor pasa sobre el botón
        onMouseOut={manejarMouseOut}   // Se activa cuando el cursor sale del botón
        onMouseDown={manejarMouseDown} // Se activa cuando el botón del mouse se presiona
        className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-xl transition-all"
      >
        Interactúa conmigo
      </button>
    </div>
  );
};

export default BotonEvento;