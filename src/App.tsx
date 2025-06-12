import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Estados from "./pages/Estados";
import Eventos from "./pages/Eventos";
import Temas from "./pages/Temas";
import Formularios from "./pages/Formularios";
import Listas from "./pages/Listas";
import Efectos from "./pages/Efectos";
import Comunicacion from "./pages/Comunicacion";
import LoginPage from "./pages/LoginPage";
import Final from "./pages/Final";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/estados" element={<Estados />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/temas" element={<Temas />} />
          <Route path="/formularios" element={<Formularios />} />
          <Route path="/listas" element={<Listas />} />
          <Route path="/efectos" element={<Efectos />} />
          <Route path="/comunicacion" element={<Comunicacion />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/final" element={<Final />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
