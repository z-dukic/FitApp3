import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import FooterComponent from '../FooterComponent/FooterComponent';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import FoodList from '../FoodList/FoodList';
import AddFood from '../AddFood/AddFood';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
          <Route path = "/" exact component = {FoodList}></Route>
          <Route path = "/food" component = {FoodList}></Route>
          <Route path="/add-food" component = {AddFood}></Route>


          </Switch>

        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
