import React from 'react';
import Navv from './components/navbar'
import Home from './components/home';
import { Switch, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <BrowserRouter>
                  <Navv />
          <Switch>
            <Route path='/' component={Home} exact />
          </Switch>      
      </BrowserRouter>
    </div>
  );
}

export default App;
