import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

export default function ProtectedRoute({ children }) {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/user" />;
  }

  return children;
}