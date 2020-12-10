import React from 'react';
import "font-awesome/css/font-awesome.min";
import ReactDOM from 'react-dom';
import './css/index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AssignmentListComponent from './AssignmentListComponent';
import HelpComponent from './HelpComponent';
import * as serviceWorker from './serviceWorker';
import NavbarComponent from './NavbarComponent';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducers from './reducers/index';
import { createStore } from 'redux';


const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <NavbarComponent />
      <Route exact path="/"><AssignmentListComponent/></Route>
      <Route path="/Help" component={HelpComponent}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
