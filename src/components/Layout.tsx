import React from "react";
import Navbar from "./Navbar";
import Footer from "../Componentes_Pages/Footer";
import "../styles/layout.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout-container flex flex-col min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <Navbar />
      <main className="main-content flex-grow px-6 py-4 bg-[var(--inacap-light)] text-[var(--inacap-dark)]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;