import React from "react";
import Layout from "../components/Layout";
import Formulario from "../components/Formulario";
import Explicacion from "../components/Explicacion";

const Formularios: React.FC = () => {
  const codigoEjemplo = `import React, { useState } from 'react';

function MiFormulario() {
  const [datos, setDatos] = useState({
    nombre: '',
    email: ''
  });

  const manejarCambio = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', datos);
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        name="nombre"
        value={datos.nombre}
        onChange={manejarCambio}
        placeholder="Nombre"
      />
      <input
        name="email"
        type="email"
        value={datos.email}
        onChange={manejarCambio}
        placeholder="Email"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}`;

  const puntosClave = [
    "Los formularios controlados sincronizan el estado con los valores de los inputs",
    "Usa el patrón de spread operator para actualizar objetos en el estado",
    "preventDefault() evita que el formulario se envíe automáticamente",
    "La validación puede hacerse en tiempo real o al enviar el formulario",
    "Los formularios no controlados usan refs para acceder a los valores",
  ];

  return (
    <Layout>
      <div className="animate-fade-in">
        <div className="page-header">
          <h1 className="page-title">Formularios en React</h1>
          <p className="page-subtitle">
            Aprende a crear formularios interactivos con validación, manejo de
            errores y mejor experiencia de usuario.
          </p>
        </div>

        <Explicacion
          titulo="Formularios Controlados"
          concepto="Controlled Components"
          descripcion="Los formularios controlados son aquellos donde React controla el valor de los elementos del formulario a través del estado. Esto permite validación en tiempo real, formateo automático y mejor control sobre la experiencia del usuario."
          codigo={codigoEjemplo}
          puntosClave={puntosClave}
        />

        <Formulario />
      </div>
    </Layout>
  );
};

export default Formularios;
