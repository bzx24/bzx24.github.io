import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Blog from "./components/blog/Blog";
import PageNotFound from "./components/page-not-found/PageNotFound"
import { Switch, Route } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <RouteWithNavBar exact path="bzx24.github.io/homepage/" component={Landing}/>
        <RouteWithNavBar exact path="/about" component={About}/>
        <RouteWithNavBar exact path="/projects" component={Projects}/>
        <RouteWithNavBar exact path="/blog" component={Blog}/>
        <Route path="*" component={PageNotFound}></Route>
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
