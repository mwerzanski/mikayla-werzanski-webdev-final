import React from 'react';
//import "font-awesome/css/font-awesome.min";
import ReactDOM from 'react-dom';
import HelpComponent from './components/HelpComponent';
import HomeComponent from './components/HomeComponent'
import MenuItemList from './components/menus/MenuItemList'
import LoginComponent from './components/users/LoginComponent'
import ProfileComponent from './components/users/ProfileComponent'
import AdminUserComponent from './components/users/AdminUserComponent'
import CreateUserComponent from './components/users/CreateUserComponent'
import AdminMenuComponent from './components/menus/AdminMenuList'
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store'
import SearchNutrition from './components/search/SearchNutrition';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import CreateMenuItem from './components/menus/CreateMenuItem';
import UpdateMenuItem from './components/menus/UpdateMenuItem';

ReactDOM.render(
  <Provider store={store}>
      <Router>
        <Route exact path={["/","/Home/:userID"]} component={HomeComponent}></Route>
        <Route exact path="/Login" component={LoginComponent}></Route>
        <Route exact path="/CreateUser" component={CreateUserComponent}></Route>
        <Route exact path="/UserProfile/:userID" component={ProfileComponent}></Route>
        <Route exact path="/Menu/:userID" component={MenuItemList}></Route>
        <Route path={["/Help","/Help/:userID"]} component={HelpComponent}/>
        <Route exact path="/ViewUsers/:userID" component={AdminUserComponent}></Route>
        <Route exact path="/CreateMenuItem/:userID" component={CreateMenuItem}></Route>
        <Route exact path="/UpdateMenuItem/:userID" component={UpdateMenuItem}></Route>
        <Route exact path="/ViewUsers/:userID/ViewMenu/:username" component={AdminMenuComponent}></Route>
        <Route exact path={["/ViewNutritionInformation/:userID","/ViewNutritionInformation"]} component={SearchNutrition}></Route>
      </Router>
  </Provider>,
  document.getElementById('root')
);