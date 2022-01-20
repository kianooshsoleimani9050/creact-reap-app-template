import { BrowserRouter } from "react-router-dom";
const RouteWrapper = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default RouteWrapper;
