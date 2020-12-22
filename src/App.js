import { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from 'react-router-dom'
import './App.css';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import PrivateRoute from './PrivateRoute'
class App extends Component {
  state={isLogeIn:false}
  handleLogeIn=()=>{
    this.setState({isLogeIn:true})
  }
  handleLogeOut=()=>{
    this.setState({isLogeIn:false})
  }
  render(){
    const{isLogeIn}=this.state

    return (
      <div>
        <Router>
          <nav>
            <ul className="navbar">
          <li><Link to ="/home">home</Link></li>
          <li><Link to ="/SignUp">SignUp</Link></li>
          <li><Link to ="/">signin</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/SignUp">
            <SignUp/>
            </Route>
            <Route exact path="/">
            <SignIn handleLogeIn={this.handleLogeIn}/>
            </Route>
            <PrivateRoute isLogeIn={isLogeIn} exact path="/home">
            <button className={this.isLogeIn===false && "logout"}
          onClick={this.handleLogeOut}><Link to="/">LogeOut</Link></button>
               <Home/>
            </PrivateRoute>
            {/* <Route exact path="/home">
            {isLogeIn? <Home/>: <Redirect to="/" /> }
            </Route> */}
          </Switch>
        </Router>
        </div>
      );
  }

}

export default App;
