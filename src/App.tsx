import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Registration from "./pages/Registration";
import Sponsors from "./pages/Sponsors";
import Rewards from "./pages/Rewards";
import Analytics from "./pages/Analytics";
import LiveStreaming from "./pages/LiveStreaming";
import AIMatching from "./pages/AIMatching";
import Tickets from "./pages/Tickets";
import Feedback from "./pages/Feedback";
import Sustainability from "./pages/Sustainability";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/streaming" element={<LiveStreaming />} />
          <Route path="/ai-matching" element={<AIMatching />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/sustainability" element={<Sustainability />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
