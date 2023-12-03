import { RouterProvider } from "react-router-dom"
import { Styles } from "./components/GlobalStyles/Styles"
import { ProviderTheme } from "./components/ProviderTheme/ProviderTheme"
import { router } from "./router/router"

function App () {
  return (<ProviderTheme>
    <Styles />
    <RouterProvider router={router} />
  </ProviderTheme>)
} 

export default App
