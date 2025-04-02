
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dsai-dark px-6">
      <div className="text-center max-w-xl animate-fade-in">
        <h1 className="text-dsai-green text-7xl md:text-9xl font-bold mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
        <p className="text-gray-400 mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild className="bg-dsai-green hover:bg-dsai-green-light text-black font-semibold transition-all">
          <Link to="/">
            <Home className="mr-2 h-4 w-4" /> Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
