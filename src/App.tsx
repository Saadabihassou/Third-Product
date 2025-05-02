
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import History from "./pages/History";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import { ThemeProvider } from "./contexts/ThemeContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={
              <MainLayout>
                <Dashboard />
              </MainLayout>
            } />
            <Route path="/workouts" element={
              <MainLayout>
                <Workouts />
              </MainLayout>
            } />
            <Route path="/history" element={
              <MainLayout>
                <History />
              </MainLayout>
            } />
            <Route path="/profile" element={
              <MainLayout>
                <Profile />
              </MainLayout>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
