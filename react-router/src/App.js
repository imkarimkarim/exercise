import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/shop" component={ Shop } />
      </div>
    </BrowserRouter>
  );
}

export default App;