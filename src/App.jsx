import Navbar from "./components/Navbar";
import Home from "./components/Home"

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/*
      <Switch>
        <RouteWithNavBar exact path="/" component={Home}/>
        <RouteWithNavBar exact path="/projects" component={Projects}/>
        <RouteWithNavBar exact path="/blog" component={Blog}/>
      </Switch>
      */}
    </div>
  );
}

{/*
function RouteWithNavBar({component:Component, ...rest}) {
  return (
     <Route {...rest}>
      <Navbar />
      <Component />
     </Route>
   );
}
*/}

export default App;