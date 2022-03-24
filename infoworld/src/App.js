import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllDrink from "./pages/AllDrink";
import Frappuccionos from "./pages/Frappuccionos";
import ColdDrinks from "./pages/ColdDrinks";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HotDrinks from "./pages/HotDrinks";
import Teas from "./pages/Teas";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={AllDrink} />
          <Route path="/Frappuccinos" exact component={Frappuccionos} />
          <Route path="/ColdDrinks" exact component={ColdDrinks} />
          <Route path="/HotDrinks" exact component={HotDrinks} />
          <Route path="/Teas" exact component={Teas} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
