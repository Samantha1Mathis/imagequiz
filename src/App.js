
import { HashRouter, Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Home from './components/Home';
import Login from './components/Login';
import NavigationBar from "./components/NavigationBar";


function App() {
  return (
    <HashRouter>
      <Container fluid>
      <NavigationBar />
      <Switch>
        <Route path="/Home" component={Home}/>
        <Route path="/Login" component={Login}/>
      </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;