import React from "react";
import { Link } from "react-router-dom";
import { Rocket, BookOpen } from "lucide-react";

const HeroSection: React.FC = () => (
  <div className="page-header text-center py-16 px-4 animate-fade-in">
    <h1 className="text-5xl font-bold mb-6">
      <span className="text-gray-800">React</span>{" "}
      <span className="text-blue-500">INACAP</span>
    </h1>
    <p className="text-2xl mb-6">
      Aprende React <span className="font-bold text-orange-500">de forma práctica y colaborativa</span>
    </p>
    <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
      Plataforma de aprendizaje creada por y para estudiantes de INACAP. Aquí encontrarás recursos prácticos,
      ejemplos claros y proyectos reales que te ayudarán a dominar React desde cero hasta nivel avanzado.
    </p>
    <div className="flex flex-wrap justify-center gap-6 mt-12">
      <Link
        to="/estados"
        className="inline-flex items-center gap-3 px-10 py-4 bg-pink-500 text-white rounded-full font-semibold text-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition"
      >
        <Rocket size={20} /> Comenzar Aprendizaje
      </Link>
      <a
        href="https://react.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-10 py-4 bg-white text-blue-500 border-2 border-blue-500 rounded-full font-semibold text-lg hover:bg-blue-50 transition"
      >
        <BookOpen size={20} /> Documentación Oficial
      </a>
    </div>
  </div>
);

export default HeroSection;