import React from 'react';
//import "font-awesome/css/font-awesome.min";
import ReactDOM from 'react-dom';
import HelpComponent from './components/HelpComponent';
import HomeComponent from './components/HomeComponent'
import MenuItemList from './components/menus/MenuItemList'
import CreateUserComponent from './components/users/CreateUserComponent'
import LoginComponent from './components/users/LoginComponent'
import ProfileComponent from './components/users/ProfileComponent'
import AdminUserComponent from './components/users/AdminUserComponent'
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/"><HomeComponent/></Route>
        <Route exact path="/login"><LoginComponent/></Route>
        <Route exact path="/createUser"><CreateUserComponent/></Route>
        <Route exact path="/userProfile"><ProfileComponent/></Route>
        <Route exact path="/menu"><MenuItemList/></Route>
        <Route path="/Help" component={HelpComponent}/>
        <Route exact path="/viewUsers"><AdminUserComponent/></Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
