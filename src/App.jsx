import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <RouteWithNavBar exact path="/" component={Home}/>
        <RouteWithNavBar exact path="/about" component={About}/>
        <RouteWithNavBar exact path="/projects" component={Projects}/>
        <RouteWithNavBar exact path="/blog" component={Blog}/>
      </Switch>
    </div>
  );
}

function RouteWithNavBar({component:Component, ...rest}) {
  return (
     <Route {...rest}>
      <Navbar />
      <Component />
     </Route>
   );
}

export default App;
