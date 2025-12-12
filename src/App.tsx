import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Minecraft from "./pages/Minecraft";
import DiscordBots from "./pages/DiscordBots";
import VPS from "./pages/VPS";
import WebHosting from "./pages/WebHosting";
import FreeHosting from "./pages/FreeHosting";
import Status from "./pages/Status";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/minecraft" element={<Minecraft />} />
          <Route path="/discord-bots" element={<DiscordBots />} />
          <Route path="/vps" element={<VPS />} />
          <Route path="/web-hosting" element={<WebHosting />} />
          <Route path="/free-hosting" element={<FreeHosting />} />
          <Route path="/status" element={<Status />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
