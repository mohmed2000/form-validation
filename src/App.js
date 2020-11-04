import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/SignUp">
          <SignUp/>
          </Route>
          <Route exact path="/">
          <SignIn/>
          </Route>
        </Switch>
      </Router>
      </div>
    );
}

export default App;
