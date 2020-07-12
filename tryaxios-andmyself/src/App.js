import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile'
import Setting from './components/Setting'
import SignOut from './components/SignOut'
import Home from './components/Home'
import { Route, BrowserRouter } from 'react-router-dom';
import Avatars from './components/Avatars';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/setting" component={Setting} />
          <Route path="/signout" component={SignOut} />
          <Route exact path="/avatars" component={Avatars} />
          <Route  path="/avatars/:avatar" component={Avatars} />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
