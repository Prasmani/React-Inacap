import React from "react";
import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";

const CallToAction: React.FC = () => (
  <section className="text-center text-white py-20" style={{ background: "linear-gradient(135deg, #E91E63 0%, #2196F3 100%)" }}>
    <h2 className="text-4xl font-bold mb-4">¿Listo para transformar tu aprendizaje?</h2>
    <p className="text-lg max-w-xl mx-auto mb-8">
      Únete a cientos de estudiantes de INACAP que ya están construyendo aplicaciones reales con React.
    </p>
    <Link
      to="/estados"
      className="inline-flex items-center gap-3 px-10 py-4 bg-white text-pink-500 rounded-full font-bold text-lg shadow hover:-translate-y-1 hover:shadow-lg transition"
    >
      <Rocket size={20} /> Comenzar Ahora
    </Link>
  </section>
);

export default CallToAction;
