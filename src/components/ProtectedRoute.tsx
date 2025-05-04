
import { useAuth } from "@/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { isSupabaseConfigured } from "@/lib/supabase";
import { toast } from "sonner";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      toast({
        title: "Configuration Error",
        description: "Backend services are not available. Please set up your Supabase environment variables.",
      });
    }
  }, []);

  if (!isSupabaseConfigured()) {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
