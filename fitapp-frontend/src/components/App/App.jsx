import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import FooterComponent from '../FooterComponent/FooterComponent';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import CreateFoodComponent from '../CreateFoodComponent/CreateFoodComponent';
import ListFoodComponent from '../ListFoodComponent/ListFoodComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
          <Route path = "/" exact component = {ListFoodComponent}></Route>
          <Route path = "/food" component = {ListFoodComponent}></Route>
          <Route path="/add-food" component = {CreateFoodComponent}></Route>


          </Switch>

        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
