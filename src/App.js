import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Superuser from './components/Superuser'
import Signin from './components/Signin'
import Signup from './components/Signup'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/superuser" component={Superuser} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
