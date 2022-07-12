import { Navigate } from "react-router-dom";

interface ProtectedRouteParams {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteParams) => {
  let token = localStorage.getItem("token");

  return token ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
