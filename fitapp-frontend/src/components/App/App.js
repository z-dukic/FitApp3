import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import FooterComponent from '../FooterComponent/FooterComponent';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import FoodDisplay from '../FoodDisplay/FoodDisplay';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
          <Route path = "/" exact component = {FoodDisplay}></Route>


          </Switch>

        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
