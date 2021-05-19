import { BrowserRouter as RouteContainer, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import LoginOptions from './components/Authentication/LoginOptions'
import LoginPage from './components/Authentication/LoginPage'
import SignupPage from './components/Authentication/SignupPage'
import { createContext, useState } from 'react';

export const NumberContext = createContext()

const App = () => {

  const [isNumber, setIsNumber] = useState(null)
  console.log(isNumber)

  return (
    <NumberContext.Provider value={[isNumber, setIsNumber]}>
      <div className="app">
        <RouteContainer>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login">
              <LoginOptions />
            </Route>
            <Route path="/login-page">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignupPage />
            </Route>
          </Switch>
        </RouteContainer>
      </div>
    </NumberContext.Provider>
  );
}

export default App;
