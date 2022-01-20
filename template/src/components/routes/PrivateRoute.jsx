import { Navigate } from "react-router-dom";
import { useUserAuthenticateState } from "../../hooks/useUserAuthenticate";
const PrivateRoute = ({ children, path = "", ...props }) => {
  const isUserAuthenticated = useUserAuthenticateState();
  return isUserAuthenticated ? children : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
