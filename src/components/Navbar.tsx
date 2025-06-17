import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, Home, Zap, Palette, List, Mail, Code, Users, Target } from "lucide-react";
import "../styles/navbar.css";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "light" : "dark",
    );
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: "Inicio", icon: <Home size={18} /> },
    { path: "/estados", label: "Estados", icon: <Target size={18} /> },
    { path: "/eventos", label: "Eventos", icon: <Zap size={18} /> },
    { path: "/temas", label: "Temas", icon: <Palette size={18} /> },
    { path: "/formularios", label: "Formularios", icon: <List size={18} /> },
    { path: "/listas", label: "Listas", icon: <Code size={18} /> },
    { path: "/efectos", label: "Efectos", icon: <Zap size={18} /> },
    { path: "/comunicacion", label: "Comunicación", icon: <Users size={18} /> },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="navbar-logo">
            <Code size={24} className="logo-icon" />
          </div>
          <span>React By INACAP</span>
        </Link>

        <ul className="navbar-nav">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link ${
                  isActiveRoute(item.path) ? "active" : ""
                }`}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button 
              onClick={toggleTheme} 
              className="theme-toggle"
              aria-label={`Cambiar a tema ${isDarkMode ? 'claro' : 'oscuro'}`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>

        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Menú de navegación"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-header">
            <Link to="/" className="mobile-brand" onClick={() => setIsMobileMenuOpen(false)}>
              <Code size={24} className="logo-icon" />
              <span>React-INACAP</span>
            </Link>
            <button 
              onClick={toggleTheme} 
              className="mobile-theme-toggle"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <ul className="mobile-nav">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`mobile-nav-link ${
                    isActiveRoute(item.path) ? "active" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;