import { createContext, useState } from "react";
import { isTokenValidated } from "../utils/token/token-validation";
export const IsAuthenticatedState = createContext();
export const IsAuthenticatedSetter = createContext();
const AuthenticationProvider = ({ children }) => {
  //uncomment this section to use cookie validation
  //
  // const tokenIsValid = isTokenValidated("token");
  //
  const tokenIsValid = true;
  //
  const [isAuthenticated, setIsAuthenticated] = useState(tokenIsValid);
  return (
    <IsAuthenticatedState.Provider value={isAuthenticated}>
      <IsAuthenticatedSetter.Provider value={setIsAuthenticated}>
        {children}
      </IsAuthenticatedSetter.Provider>
    </IsAuthenticatedState.Provider>
  );
};

export default AuthenticationProvider;
