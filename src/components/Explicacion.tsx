import React from "react";
import { BookOpen, Code, Lightbulb, ChevronRight } from "lucide-react";
import "../styles/Explicacion.css";

interface ExplicacionProps {
  titulo: string;
  concepto: string;
  descripcion: string;
  codigo?: string;
  puntosClave?: string[];
  tipo?: 'teorica' | 'practica' | 'importante';
}

const Explicacion: React.FC<ExplicacionProps> = ({
  titulo,
  concepto,
  descripcion,
  codigo,
  puntosClave = [],
  tipo = 'teorica'
}) => {
  const tipoColor = {
    teorica: '#2196F3', // Azul INACAP
    practica: '#4CAF50', // Verde
    importante: '#E91E63' // Rojo INACAP
  };

  return (
    <div className={`explicacion-container ${tipo}`}>
      <div className="explicacion-header">
        <div className="icon-container">
          <BookOpen size={24} className="icon" />
        </div>
        <h3 className="explicacion-title">{titulo}</h3>
      </div>

      <div className="explicacion-concepto">
        <h4 className="concepto-title">
          <div className="icon-container small">
            <Lightbulb size={18} className="icon" />
          </div>
          Concepto
        </h4>
        <p className="explicacion-texto">{descripcion}</p>
      </div>

      {puntosClave.length > 0 && (
        <div className="explicacion-puntos">
          <h4>Puntos Clave:</h4>
          <ul>
            {puntosClave.map((punto, index) => (
              <li key={index} className="punto">
                <ChevronRight size={16} className="bullet-icon" />
                <span>{punto}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {codigo && (
        <div className="explicacion-codigo">
          <h4 className="codigo-title">
            <div className="icon-container small">
              <Code size={18} className="icon" />
            </div>
            Ejemplo de Código
          </h4>
          <pre><code>{codigo}</code></pre>
        </div>
      )}


    </div>
  );
};

export default Explicacion;