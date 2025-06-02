
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import JobCareers from "./pages/JobCareers";
import MarriageProfiles from "./pages/MarriageProfiles";
import BusinessBrands from "./pages/BusinessBrands";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Epaper from "./pages/Epaper";
import Advertise from "./pages/Advertise";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/job-careers" element={<JobCareers />} />
          <Route path="/marriage-profiles" element={<MarriageProfiles />} />
          <Route path="/business-brands" element={<BusinessBrands />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/epapers" element={<Epaper />} />
          <Route path="/advertise" element={<Advertise />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
