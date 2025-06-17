import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const topics = [
  {
    title: "Estados y Hooks", path: "/estados", difficulty: "Básico",
    description: "Domina el manejo del estado...", color: "#E91E63",
  },
  {
    title: "Manejo de Eventos", path: "/eventos", difficulty: "Básico",
    description: "Descubre cómo hacer aplicaciones interactivas...", color: "#FF9800",
  },
  // Agrega los demás tópicos aquí
];

const TemasPrincipalesSection: React.FC = () => (
  <section className="container mx-auto px-4 mt-20">
    <h2 className="text-3xl font-bold text-center mb-12">
      <span className="text-pink-500">Temas</span> <span className="text-blue-500">Principales</span>
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {topics.map((topic, i) => (
        <Link
          key={i}
          to={topic.path}
          className="block p-6 bg-white border-l-4 rounded-lg shadow hover:-translate-y-1 transition"
          style={{ borderColor: topic.color }}
        >
          <div className="mb-4">
            <h3 className="text-xl font-semibold" style={{ color: topic.color }}>{topic.title}</h3>
            <span className="inline-block bg-opacity-90 text-white text-sm font-bold px-3 py-1 rounded-full" style={{ backgroundColor: topic.color }}>{topic.difficulty}</span>
          </div>
          <p className="text-gray-700 mb-4">{topic.description}</p>
          <div className="flex items-center text-sm font-semibold" style={{ color: topic.color }}>
            <Sparkles size={16} /> <span className="ml-2">Explorar tema</span> <ArrowRight size={16} className="ml-1" />
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default TemasPrincipalesSection;