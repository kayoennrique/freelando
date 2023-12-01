import { Card } from "./components/Card/Card";
import { Styles } from "./components/GlobalStyles/Styles";
import { ProviderTheme } from "./components/ProviderTheme/ProviderTheme";

function App() {
  return (
    <ProviderTheme>
      <Styles />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </ProviderTheme>
  );
}

export default App;