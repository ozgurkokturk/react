import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import Navi from "../navi/Navi";
import "../../index.css";
import { Route, Switch } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import CreateOrUpdateProduct from "../products/CreateOrUpdateProduct";
import NotFound from "../common/NotFound"

function App() {
  return (
    <Container className="anaclass">
      <Navi />
      <Switch>
      <Route index path="/" exact component={Dashboard} />
        <Route path="/cart" component={CartDetail} />
        <Route path="/createorupdateproduct/:productId" component={CreateOrUpdateProduct} />
        <Route path="/createorupdateproduct/" component={CreateOrUpdateProduct} />
        <Route component={NotFound}/>
      </Switch>
    </Container>
  );
}

export default App;
