import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  // Si l'utilisateur n'est pas connecté => redirection vers la page loggin
  if (!user) return <Navigate to="/login"></Navigate>;

  // Afficher le composant
  return children;
};

export default ProtectedRoute;
