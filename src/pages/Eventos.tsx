import React from "react";
import Layout from "../components/Layout";
import Explicacion from "../components/Explicacion";
import BotonEvento from "../components/BotonEvento";
import FormularioEvento from "../components/FormularioEvento";
import EventoTeclado from "../components/EventoTeclado";
import { MousePointer, Keyboard, Zap } from "lucide-react";

const Eventos: React.FC = () => {
  const codigoEjemplo = `function BotonEvento() {
  const manejarClick = () => {
    alert('¡Hiciste clic!');
  };

  return (
    <button onClick={manejarClick}>
      Haz clic aquí
    </button>
  );
}`;

  const puntosClave = [
    "Los eventos en React se manejan con camelCase (por ejemplo, onClick, onChange).",
    "Puedes usar funciones anónimas o declarar funciones por separado.",
    "Los eventos se pasan como argumentos a los controladores: (e) => {...}",
    "Evita usar alertas en producción; son útiles para demostraciones.",
  ];

  return (
    <Layout>
      <div className="animate-fade-in">
        <div className="page-header">
          <h1 className="page-title">Manejo de Eventos</h1>
          <p className="page-subtitle">
            Aprende a capturar y manejar eventos del usuario como clics,
            teclas y formularios.
          </p>
        </div>

        <Explicacion
          titulo="¿Qué es un Evento en React?"
          concepto="Eventos Sintéticos"
          descripcion="React utiliza un sistema de eventos sintéticos que funciona de manera similar al modelo de eventos del DOM, pero con algunas mejoras de compatibilidad y rendimiento."
          codigo={codigoEjemplo}
          puntosClave={puntosClave}
        />

        <div className="grid-layout">
          <BotonEvento />
          <FormularioEvento />
          <EventoTeclado />
        </div>

        <div className="content-section text-center">
          <h3 className="section-title">Tipos Comunes de Eventos</h3>
          <div className="grid-layout">
            {/* Eventos de Mouse */}
        <div className="content-section">
          <MousePointer
            size={40}
            style={{ color: "var(--success-color)", marginBottom: "1rem" }}
          />
          <h4>Eventos de Mouse</h4>
          <ul className="text-left list-disc pl-5 space-y-1">
            <li><strong>onClick:</strong> Se ejecuta cuando el usuario hace clic en el botón.</li>
            <li><strong>onMouseDown:</strong> Se activa en el momento en que el botón del mouse es presionado.</li>
            <li><strong>onMouseOver:</strong> Detecta cuando el cursor entra en el área del botón.</li>
            <li><strong>onMouseOut:</strong> Se dispara cuando el cursor abandona el área del botón.</li>
          </ul>

          <p className="mt-4 text-sm text-muted-foreground">
            💡 <strong>Resumen:</strong> Al interactuar con el botón, <code>onMouseDown</code> se activa primero cuando se presiona el mouse, 
            luego <code>onClick</code> confirma la acción completa. <code>onMouseOver</code> y <code>onMouseOut</code> manejan la entrada y salida del cursor, 
            permitiendo efectos visuales al pasar sobre el elemento.
          </p>
        </div>

            
            {/* Eventos de Formulario */}
        <div className="content-section">
          <Zap
            size={40}
            style={{ color: "var(--warning-color)", marginBottom: "1rem" }}
          />
          <h4>Eventos de Formulario</h4>
          <ul className="text-left list-disc pl-5 space-y-1">
            <li><strong>onChange:</strong> Se activa cuando el usuario modifica el contenido de un campo.</li>
            <li><strong>onSubmit:</strong> Se ejecuta cuando el formulario es enviado (por botón o Enter).</li>
            <li><strong>onFocus:</strong> Se dispara cuando el usuario hace clic o navega a un campo, iniciando la edición.</li>
            <li><strong>onBlur:</strong> Ocurre cuando el usuario deja el campo, finalizando la edición.</li>
          </ul>

          <p className="mt-4 text-sm text-muted-foreground">
            💡 <strong>Resumen:</strong> Cuando un usuario interactúa con un formulario, 
            <code>onFocus</code> indica el inicio de la edición, <code>onChange</code> registra los cambios en tiempo real, 
            y <code>onBlur</code> finaliza la interacción. Finalmente, <code>onSubmit</code> procesa los datos ingresados si el usuario confirma el envío.
          </p>
        </div>


            {/* Eventos de Teclado */}
            <div className="content-section">
              <Keyboard
                size={40}
                style={{ color: "var(--accent-color)", marginBottom: "1rem" }}
              />
              <h4>Eventos de Teclado</h4>
              <ul className="text-left list-disc pl-5 space-y-1">
                <li>
                  <strong>onKeyDown:</strong> Se activa inmediatamente al presionar una tecla.
                </li>
                <li>
                  <strong>onInput:</strong> Se activa justo después, cuando el texto cambia.
                </li>
                <li>
                  <strong>onKeyUp:</strong> Se activa al soltar la tecla.
                </li>
              </ul>

              <p className="mt-4 text-sm text-muted-foreground">
                💡 <strong>Resumen:</strong> Cuando presionas una tecla, React detecta primero la acción (onKeyDown),
                luego el cambio en el campo (onInput), y finalmente la liberación (onKeyUp).
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                🧠 <strong>Dato curioso:</strong> Si mantienes una tecla presionada, se generarán múltiples eventos 
                <code>onKeyDown</code> y <code>onInput</code> repetidamente, pero <code>onKeyUp</code> solo se activará al soltarla.
              </p>
            </div>



          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Eventos;
