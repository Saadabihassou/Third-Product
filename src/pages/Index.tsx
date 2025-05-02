import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import Dashboard from "./Dashboard";

const Index = () => {
  const navigate = useNavigate();

  // Redirect to dashboard
  useEffect(() => {
    // This effectively makes "/" show the Dashboard component
    // While keeping our routing structure clean
    navigate("/", { replace: true });
  }, [navigate]);

  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
};

export default Index;
