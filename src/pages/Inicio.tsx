
import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../Componentes_Pages/HeroSection";
import MetodologiaSection from "../Componentes_Pages/MetodologiaSection";
import TemasPrincipalesSection from "../Componentes_Pages/TemasPrincipalesSection";
import CallToAction from "../Componentes_Pages/CallToAction";
import Footer from "../Componentes_Pages/Footer";

const Inicio: React.FC = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <HeroSection />
        <MetodologiaSection />
        <TemasPrincipalesSection />
        <CallToAction />
        <Footer />
      </div>
    </Layout>
  );
};

export default Inicio;
