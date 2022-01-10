import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import Navi from "../navi/Navi";
import "../../index.css";

function App() {
  return (
    <Container>
      <Navi />
      <Dashboard />
    </Container>
  );
}

export default App;
