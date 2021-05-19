import { BrowserRouter as RouteContainer, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Login from './components/Authentication/Login'
import LoginWithPhone from './components/Authentication/LoginWithPhone'

const App = () => {
  return (
    <div className="app">
      <RouteContainer>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/login-with-phone">
            <LoginWithPhone />
          </Route>
        </Switch>
      </RouteContainer>
    </div>
  );
}

export default App;
