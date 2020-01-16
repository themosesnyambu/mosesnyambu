import React from 'react';
import Navv from './components/navbar'
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

import { Switch, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <BrowserRouter>
                  <Navv />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contact' component={Contact} />
            <Route component={Home} />


          </Switch>      
      </BrowserRouter>
    </div>
  );
}

export default App;
