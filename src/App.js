import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Footer from './components/Footer';
import Vervelife from './pages/work/vervelife/Vervelife';
import Quickteller from './pages/work/quickteller/Quickteller';
import Caregivr from './pages/work/caregivr/Caregivr';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navigation />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
            <Route path='/vervelife' component={Vervelife} />
            <Route path='/quickteller' component={Quickteller} />
            <Route path='/caregivr' component={Caregivr} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
