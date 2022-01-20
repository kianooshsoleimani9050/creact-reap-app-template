import { Routes, Route, Navigate } from "react-router-dom";
import { useUserAuthenticateState } from "../../hooks/useUserAuthenticate";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import PrivateRoute from "./PrivateRoute";
const RoutesList = () => {
  const isUserAuthenticated = useUserAuthenticateState();
  return (
    <Routes>
      <Route
        path="/sign-in"
        element={isUserAuthenticated ? <Navigate to="/" /> : <SignIn />}
      />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default RoutesList;
