import React from "react";
import { Code, Laugh, Users } from "lucide-react";

const features = [
  {
    icon: <Code size={40} />, title: "Aprende Haciendo", description:
      "Olvídate de las clases teóricas aburridas. En React-INACAP te sumergirás directamente en el código con ejemplos prácticos y proyectos reales...",
    color: "#E91E63", bgColor: "rgba(233, 30, 99, 0.05)",
  },
  {
    icon: <Laugh size={40} />, title: "Aprendizaje Sin Presiones", description:
      "Sabemos que cada estudiante tiene su propio ritmo...",
    color: "#FF9800", bgColor: "rgba(255, 152, 0, 0.05)",
  },
  {
    icon: <Users size={40} />, title: "Comunidad Colaborativa", description:
      "Únete a una red de estudiantes de INACAP que comparten tus mismos desafíos...",
    color: "#2196F3", bgColor: "rgba(33, 150, 243, 0.05)",
  },
];

const MetodologiaSection: React.FC = () => (
  <section className="container mx-auto px-4 mt-10">
    <h2 className="text-3xl font-bold text-center mb-12">
      <span className="text-pink-500">Nuestra</span> <span className="text-blue-500">Metodología</span>
    </h2>
    <div className="grid md:grid-cols-3 gap-6">
      {features.map((feature, i) => (
        <div
          key={i}
          className="text-center rounded-xl p-10 transition transform hover:-translate-y-2 shadow-sm"
          style={{ backgroundColor: feature.bgColor, borderTop: `4px solid ${feature.color}` }}
        >
          <div className="mb-6 text-center" style={{ color: feature.color }}>{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-4" style={{ color: feature.color }}>{feature.title}</h3>
          <p className="text-gray-700 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default MetodologiaSection;