import { useContext } from "react";
import {
  IsAuthenticatedSetter,
  IsAuthenticatedState,
} from "../context/AuthenticationProvider";

export const useUserAuthenticateState = () => useContext(IsAuthenticatedState);
export const useUserAuthenticateSetter = () =>
  useContext(IsAuthenticatedSetter);
