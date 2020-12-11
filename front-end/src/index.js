import React from 'react';
//import "font-awesome/css/font-awesome.min";
import ReactDOM from 'react-dom';
import HelpComponent from './components/HelpComponent';
import HomeComponent from './components/HomeComponent'
import MenuComponent from './components/menus/MenuComponent'
import CreateUserComponent from './components/users/CreateUserComponent'
import LoginComponent from './components/users/LoginComponent'
import ProfileComponent from './components/users/ProfileComponent'
import NavbarComponent from './components/NavbarComponent';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
//import reducers from './reducers/index';
import { createStore } from 'redux';


//const store = createStore(reducers);

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

ReactDOM.render(
  //<Provider store={store}>
  <Router>
    <NavbarComponent />
    <Switch>
      <Route exact path="/"><HomeComponent/></Route>
      <Route exact path="/login"><LoginComponent/></Route>
      <Route exact path="/createUser"><CreateUserComponent/></Route>
      <Route exact path="/userProfile"><ProfileComponent/></Route>
      <Route exact path="/menu"><MenuComponent/></Route>
      <Route path="/Help" component={HelpComponent}/>
    </Switch>
  </Router>,
  //</Provider>,
  document.getElementById('root')
);
