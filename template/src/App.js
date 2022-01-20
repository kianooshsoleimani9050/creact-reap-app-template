import RoutesList from "./components/routes/RoutesList";
import RouteWrapper from "./components/routes/RouteWrapper";
import AuthenticationProvider from "./context/AuthenticationProvider";

function App() {
  return (
    <AuthenticationProvider>
      <RouteWrapper>
        <RoutesList />
      </RouteWrapper>
    </AuthenticationProvider>
  );
}

export default App;
