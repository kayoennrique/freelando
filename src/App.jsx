import { RouterProvider } from "react-router-dom";
import { Styles } from "./components/GlobalStyles/Styles";
import { ProviderTheme } from "./components/ProviderTheme/ProviderTheme";
import { router } from "./router/router";
import { SessionUserProvider } from "./context/UserSession";

function App() {
  return (<ProviderTheme>
    <Styles />
    <SessionUserProvider>
      <RouterProvider router={router} />
    </SessionUserProvider>
  </ProviderTheme>);
}

export default App
