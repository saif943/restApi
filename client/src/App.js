import { Route, Switch } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Contactlist from "./Pages/Contactlist";
import Add from "./Pages/Add";
import Errors from "./Pages/Errors";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contactlist} />
          <Route path="/add" component={Add} />
          <Route path="/*" component={Errors} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
