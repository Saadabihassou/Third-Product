
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  // Redirect to dashboard
  useEffect(() => {
    // This effectively redirects to the dashboard route
    navigate("/dashboard", { replace: true });
  }, [navigate]);

  // Return null while redirecting
  return null;
};

export default Index;
