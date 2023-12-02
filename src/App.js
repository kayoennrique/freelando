import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { Styles } from "./components/GlobalStyles/Styles";
import { ProviderTheme } from "./components/ProviderTheme/ProviderTheme";

function App () {
  return (<ProviderTheme>
    <Styles />
    <RouterProvider router={router} />
  </ProviderTheme>)
} 

export default App