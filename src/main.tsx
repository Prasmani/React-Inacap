import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/global.css";
import "./styles/layout.css";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/form.css";
import "./styles/temas.css";
import "./styles/contador.css";

createRoot(document.getElementById("root")!).render(<App />);
