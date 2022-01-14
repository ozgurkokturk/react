import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import Navi from "../navi/Navi";
import "../../index.css";
import { Routes, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <Container className="anaclass">
      <Navi />
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route path="cart" element={<CartDetail />} />
      </Routes>
      
  
    </Container>
  );
}

export default App;
